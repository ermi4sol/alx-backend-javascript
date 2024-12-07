const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((fileContent) => {
      const lines = fileContent.trim().split('\n').slice(1); // Skip header
      const validStudents = lines.filter(line => line.trim() !== '');

      console.log(`Number of students: ${validStudents.length}`);

      const fields = {};
      validStudents.forEach(student => {
        const [firstname, lastname, age, field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      return validStudents; // Optional: return students if needed
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;