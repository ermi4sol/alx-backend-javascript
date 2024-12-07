import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      
      const lines = data.trim().split('\n').slice(1); // Skip header
      const students = lines.filter(line => line.trim() !== '');
      
      const fields = {};
      students.forEach(student => {
        const [firstname, lastname, age, field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      
      resolve(fields);
    });
  });
};

export default readDatabase;