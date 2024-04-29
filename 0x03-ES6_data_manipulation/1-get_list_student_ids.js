export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const ids = getListStudents.map((getListStudents) => getListStudents.id);
  // const ids = getListStudents.get('id')
  return ids;
}
