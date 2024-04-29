export default function getStudentsByLocation(getListStudents, city) {
  const fil = getListStudents.filter((getListStudents) => getListStudents.location === city);
  return fil;
}
