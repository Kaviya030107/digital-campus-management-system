function getGrade(percentage) {
  if (percentage >= 90) return "O";
  if (percentage >= 80) return "A+";
  if (percentage >= 70) return "A";
  if (percentage >= 60) return "B+";
  if (percentage >= 50) return "B";
  if (percentage >= 40) return "C";
  return "F";
}

function handleMarksScan(rawId) {
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

  // Marks table
  const tbody = document.getElementById("marksBody");
  tbody.innerHTML = "";

  let grandTotal = 0;
  let grandMax = 0;

  student.marks.forEach(m => {
    const total = m.internal + m.external;
    const max = 50 + 100; // internal out of 50, external out of 100
    const pct = ((total / max) * 100).toFixed(1);
    const grade = getGrade(parseFloat(pct));
    const pass = total >= (max * 0.4); // pass if 40% and above

    grandTotal += total;
    grandMax += max;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.subject}</td>
      <td>${m.internal} / 50</td>
      <td>${m.external} / 100</td>
      <td>${total} / ${max}</td>
      <td>${grade}</td>
      <td class="${pass ? 'pass' : 'fail'}">${pass ? "Pass" : "Fail"}</td>
    `;
    tbody.appendChild(tr);
  });

  // Overall summary
  const overallPct = ((grandTotal / grandMax) * 100).toFixed(1);
  document.getElementById("grandTotal").textContent = grandTotal + " / " + grandMax;
  document.getElementById("overallPct").textContent = overallPct + "%";
  document.getElementById("overallGrade").textContent = getGrade(parseFloat(overallPct));

  card.classList.add("show");
}