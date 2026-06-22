function handleAttendanceScan(rawId) {
  const id = rawId.trim();
  if (!id) return;

  const student = STUDENTS.find(s => s.id.toLowerCase() === id.toLowerCase());
  const card = document.getElementById("studentCard");
  const notFound = document.getElementById("notFound");

  card.classList.remove("show");
  notFound.classList.remove("show");

  if (!student) {
    notFound.classList.add("show");
    return;
  }

  // Student details
  document.getElementById("sName").textContent = student.name;
  document.getElementById("sId").textContent = student.id;
  document.getElementById("sDept").textContent = student.dept;
  document.getElementById("sYear").textContent = student.year;

  // Attendance details
  const att = student.attendance;
  const absentDays = att.totalDays - att.presentDays;
  const percentage = ((att.presentDays / att.totalDays) * 100).toFixed(1);

  document.getElementById("totalDays").textContent = att.totalDays;
  document.getElementById("presentDays").textContent = att.presentDays;
  document.getElementById("absentDays").textContent = absentDays;
  document.getElementById("attPercent").textContent = percentage + "%";

  // Color the percentage — red if below 75%, green if above
  const percentEl = document.getElementById("attPercent");
  percentEl.className = parseFloat(percentage) >= 75 ? "att-good" : "att-low";

  card.classList.add("show");
}
