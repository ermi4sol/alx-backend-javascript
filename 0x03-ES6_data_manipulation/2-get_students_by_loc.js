export default function getStudentsByLocation(students, city) {
    // Use the filter function to return students located in the specified city
    return students.filter(student => student.location === city);
  }
  