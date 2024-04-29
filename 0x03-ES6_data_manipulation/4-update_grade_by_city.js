export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const specificStud = getListStudents.filter(
    (getListStudents) => getListStudents.location === city,
  );

  const filtered = specificStud.map((specificStud) => {
    const findGrade = newGrades.find((newGrades) => newGrades.studentId === specificStud.id);
    const gradeCheck = findGrade ? findGrade.grade : 'N/A';
    return { ...specificStud, grade: gradeCheck };
  });
  return filtered;
}
