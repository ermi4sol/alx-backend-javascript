export default function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students based on the specified city
    return students
      .filter(student => student.location === city)  // Filter students by city
      .map(student => {
        // Find the corresponding grade in newGrades
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        // If found, assign the grade, otherwise assign 'N/A'
        student.grade = gradeObj ? gradeObj.grade : 'N/A';
        return student;  // Return the updated student object
      });
  }
  