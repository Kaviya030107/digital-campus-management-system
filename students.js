const STUDENTS = [
  {
    id: "VIT24205042", name: "Maha Varshini S", dept: "CSE", year: "3rd Year",
    fee: {
      category: "Hosteller",
      items: [
        { label: "Tuition Fee", amount: 100000 },
        { label: "Hostel Fee", amount: 150000 }
      ],
      status: "Paid"
    },
    attendance: { totalDays: 90, presentDays: 82 },
    marks: [
      { subject: "Maths",           internal: 45, external: 72 },
      { subject: "Physics",         internal: 42, external: 68 },
      { subject: "Data Structures", internal: 48, external: 80 },
      { subject: "DBMS",            internal: 44, external: 75 },
      { subject: "Web Technology",  internal: 46, external: 78 }
    ],
    assignments: [
      { title: "Data Structures - Assignment 1", status: "completed" },
      { title: "Data Structures - Assignment 2", status: "incomplete" },
      { title: "DBMS - Assignment 1",            status: "completed" }
    ]
  },
  {
    id: "VIT24205012", name: "Dhanalakshmi R", dept: "CSE", year: "3rd Year",
    fee: {
      category: "Hosteller",
      items: [
        { label: "Tuition Fee", amount: 100000 },
        { label: "Hostel Fee", amount: 150000 }
      ],
      status: "Pending"
    },
    attendance: { totalDays: 90, presentDays: 76 },
    marks: [
      { subject: "Maths",           internal: 38, external: 55 },
      { subject: "Physics",         internal: 35, external: 50 },
      { subject: "Data Structures", internal: 40, external: 62 },
      { subject: "DBMS",            internal: 36, external: 58 },
      { subject: "Web Technology",  internal: 39, external: 60 }
    ],
    assignments: [
      { title: "Data Structures - Assignment 1", status: "completed" },
      { title: "DBMS - Assignment 1",            status: "incomplete" }
    ]
  },
  {
    id: "VIT24205072", name: "Subasri S", dept: "IT", year: "2nd Year",
    attendance: { totalDays: 90, presentDays: 88 },
    marks: [
      { subject: "Maths",            internal: 49, external: 85 },
      { subject: "Physics",          internal: 47, external: 82 },
      { subject: "Networks",         internal: 48, external: 88 },
      { subject: "Operating Systems",internal: 46, external: 80 },
      { subject: "Web Technology",   internal: 50, external: 90 }
    ],
    assignments: [
      { title: "Web Technology - Assignment 1", status: "incomplete" },
      { title: "Web Technology - Assignment 2", status: "incomplete" }
    ]
  },
  {
    id: "24ITB16", name: "Kaviya N", dept: "ECE", year: "3rd Year",
    fee: {
      category: "Day Scholar",
      items: [
        { label: "College Fee", amount: 100000 },
        { label: "Bus Fee",     amount: 45000  }
      ],
      status: "Pending"
    },
    attendance: { totalDays: 90, presentDays: 70 },
    marks: [
      { subject: "Maths",            internal: 30, external: 45 },
      { subject: "Circuits",         internal: 32, external: 48 },
      { subject: "Electronics",      internal: 28, external: 42 },
      { subject: "Signals & Systems",internal: 35, external: 50 },
      { subject: "Physics",          internal: 31, external: 46 }
    ],
    assignments: [
      { title: "Circuits - Assignment 1", status: "completed" },
      { title: "Circuits - Assignment 2", status: "completed" }
    ]
  },
  {
    id: "VIT24205080", name: "Vasanthi. J", dept: "IT", year: "3rd Year",
    fee: {
      category: "Hosteller",
      items: [
        { label: "Tuition Fee", amount: 100000 },
        { label: "Hostel Fee", amount: 150000 }
      ],
      status: "Paid"
    },
    attendance: { totalDays: 90, presentDays: 85 },
    marks: [
      { subject: "Maths",            internal: 43, external: 70 },
      { subject: "Networks",         internal: 45, external: 74 },
      { subject: "Operating Systems",internal: 44, external: 72 },
      { subject: "DBMS",             internal: 42, external: 68 },
      { subject: "Web Technology",   internal: 46, external: 76 }
    ],
    assignments: [
      { title: "Web Technology - Assignment 1", status: "completed"  },
      { title: "Web Technology - Assignment 2", status: "incomplete" }
    ]
  }
];
