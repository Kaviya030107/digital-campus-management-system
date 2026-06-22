// Scan logic for the Admin module only. Fee data now lives directly
// on each student in students.js (as student.fee), so this file just
// reads it and renders it — nothing to keep in sync between two files.
function handleAdminScan(rawId) {
  const id = rawId.trim();
  if (!id) return;

  const student = STUDENTS.find(s => s.id.toLowerCase() === id.toLowerCase());
  const card = document.getElementById("studentCard");
  const notFound = document.getElementById("notFound");
  const noFee = document.getElementById("noFeeData");

  card.classList.remove("show");
  notFound.classList.remove("show");
  noFee.classList.remove("show");

  if (!student) {
    notFound.classList.add("show");
    return;
  }

  const fee = student.fee;
  if (!fee) {
    noFee.classList.add("show");
    return;
  }

  document.getElementById("sName").textContent = student.name;
  document.getElementById("sId").textContent = student.id;
  document.getElementById("sDept").textContent = student.dept;
  document.getElementById("sYear").textContent = student.year;
  document.getElementById("sCategory").textContent = fee.category;

  const list = document.getElementById("feeList");
  list.innerHTML = "";
  let total = 0;

  fee.items.forEach(f => {
    const li = document.createElement("li");
    const labelSpan = document.createElement("span");
    labelSpan.textContent = f.label;
    const amountSpan = document.createElement("span");
    amountSpan.textContent = "₹" + f.amount.toLocaleString("en-IN");
    li.appendChild(labelSpan);
    li.appendChild(amountSpan);
    list.appendChild(li);
    total += f.amount;
  });

  document.getElementById("feeTotal").textContent = "₹" + total.toLocaleString("en-IN");

  const statusEl = document.getElementById("feeStatus");
  statusEl.textContent = fee.status;
  statusEl.className = "fee-status " + (fee.status === "Pending" ? "status-pending" : "status-paid");

  card.classList.add("show");
}