// ASSIGNMENTS data is now stored directly on each student in students.js
// as student.assignments — this file only contains the scan logic
// for the Assignment module page.

function handleAssignmentScan(rawId) {
  const id = rawId.trim();
  if (!id) return;

  const student = STUDENTS.find(s => s.id.toLowerCase() === id.toLowerCase());
  const card = document.getElementById("studentCard");
  const notFound = document.getElementById("notFound");
  const completedList = document.getElementById("completedList");
  const incompleteList = document.getElementById("incompleteList");

  if (!student) {
    card.classList.remove("show");
    notFound.classList.add("show");
    return;
  }

  notFound.classList.remove("show");
  document.getElementById("sName").textContent = student.name;

  const assignments = student.assignments || [];
  completedList.innerHTML = "";
  incompleteList.innerHTML = "";

  assignments
    .filter(a => a.status === "completed")
    .forEach(a => completedList.appendChild(makeItem(a.title)));

  assignments
    .filter(a => a.status === "incomplete")
    .forEach(a => incompleteList.appendChild(makeItem(a.title)));

  if (completedList.children.length === 0) completedList.appendChild(makeItem("None", true));
  if (incompleteList.children.length === 0) incompleteList.appendChild(makeItem("None", true));

  card.classList.add("show");
}

function makeItem(text, empty) {
  const li = document.createElement("li");
  li.textContent = text;
  if (empty) li.classList.add("empty");
  return li;
}