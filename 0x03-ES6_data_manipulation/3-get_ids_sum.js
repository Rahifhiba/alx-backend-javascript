export default function getStudentIdsSum(getListStudents) {
  const ids = getListStudents.map((getListStudents) => getListStudents.id);
  const red = ids.reduce((acc, e) => acc + e);
  return red;
}
