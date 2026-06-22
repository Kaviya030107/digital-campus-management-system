// Runs whenever a barcode is scanned (the scanner types the code and
// presses Enter, which submits the form on each page).
function handleScan(rawId) {
  const id = rawId.trim();
  if (!id) return;

  const student = STUDENTS.find(s => s.id.toLowerCase() === id.toLowerCase());
  const card = document.getElementById("studentCard");
  const notFound = document.getElementById("notFound");

  if (student) {
    document.getElementById("sName").textContent = student.name;
    document.getElementById("sId").textContent = student.id;
    document.getElementById("sDept").textContent = student.dept;
    document.getElementById("sYear").textContent = student.year;
    card.classList.add("show");
    notFound.classList.remove("show");
  } else {
    card.classList.remove("show");
    notFound.classList.add("show");
  }
}