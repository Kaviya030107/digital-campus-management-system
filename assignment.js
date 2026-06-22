// Sample assignment records per student ID — replace with a real
// database call later, keyed the same way: student id -> list of assignments.
const ASSIGNMENTS = {
  "VIT24205042": [
    { title: "Data Structures - Assignment 1", status: "completed" },
    { title: "Data Structures - Assignment 2", status: "incomplete" },
    { title: "DBMS - Assignment 1", status: "completed" }
  ],
  "VIT24205012": [
    { title: "Data Structures - Assignment 1", status: "completed" },
    { title: "DBMS - Assignment 1", status: "incomplete" }
  ],
  "VIT24205080": [
    { title: "Web Technology - Assignment 1", status: "incomplete" },
    { title: "Web Technology - Assignment 2", status: "incomplete" }
  ],
  "VIT24205036": [
    { title: "Circuits - Assignment 1", status: "completed" },
    { title: "Circuits - Assignment 2", status: "completed" }
  ]
};

// Runs only on the Assignment module page. Looks up the student (from
// students.js), then splits their assignments into completed/incomplete.
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

  const assignments = ASSIGNMENTS[student.id] || [];
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