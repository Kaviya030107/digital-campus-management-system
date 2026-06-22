function handleDatabaseScan(rawId) {
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

  // ── Student Profile ──────────────────────────────────────
  document.getElementById("sName").textContent = student.name;
  document.getElementById("sId").textContent = student.id;
  document.getElementById("sDept").textContent = student.dept;
  document.getElementById("sYear").textContent = student.year;

  // ── Attendance ───────────────────────────────────────────
  const att = student.attendance;
  const absent = att.totalDays - att.presentDays;
  const attPct = ((att.presentDays / att.totalDays) * 100).toFixed(1);
  document.getElementById("dbTotal").textContent = att.totalDays;
  document.getElementById("dbPresent").textContent = att.presentDays;
  document.getElementById("dbAbsent").textContent = absent;
  const pctEl = document.getElementById("dbAttPct");
  pctEl.textContent = attPct + "%";
  pctEl.className = "db-value " + (parseFloat(attPct) >= 75 ? "pass" : "fail");

  // ── Marks ────────────────────────────────────────────────
  let grandTotal = 0, grandMax = 0;
  student.marks.forEach(m => {
    grandTotal += m.internal + m.external;
    grandMax += 150;
  });
  const marksPct = ((grandTotal / grandMax) * 100).toFixed(1);
  document.getElementById("dbMarksTotal").textContent = grandTotal + " / " + grandMax;
  document.getElementById("dbMarksPct").textContent = marksPct + "%";

  // ── Assignments ──────────────────────────────────────────
  const asgn = student.assignments || [];
  const completed = asgn.filter(a => a.status === "completed").length;
  const incomplete = asgn.filter(a => a.status === "incomplete").length;
  document.getElementById("dbCompleted").textContent = completed;
  document.getElementById("dbIncomplete").textContent = incomplete;

  // ── Fee ──────────────────────────────────────────────────
  const fee = student.fee;
  if (fee) {
    const total = fee.items.reduce((s, f) => s + f.amount, 0);
    document.getElementById("dbFeeCategory").textContent = fee.category;
    document.getElementById("dbFeeTotal").textContent = "₹" + total.toLocaleString("en-IN");
    const feeStatusEl = document.getElementById("dbFeeStatus");
    feeStatusEl.textContent = fee.status;
    feeStatusEl.className = "fee-status " + (fee.status === "Pending" ? "status-pending" : "status-paid");
    document.getElementById("feeSection").style.display = "";
  } else {
    document.getElementById("feeSection").style.display = "none";
  }

  card.classList.add("show");
}