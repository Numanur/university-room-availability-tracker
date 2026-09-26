// Course codes and course names are taken from the supplied Fall 2026 Day Program course list.
// Batch text from the spreadsheet is intentionally excluded from course names.
export const COURSE_NAMES: Record<string, string> = {
  CSE0612401: "Switching and Routing",
  CSE0612405: "Internet of Things (IoT)(Elective-II)",
  CSE0613403: "Software Testing and Quality Assurance",
  MIS0611403: "System Auditing and Maintenance",
  CSE0611301: "Engineering Drawing",
  CSE0611303: "Computer and Cyber Security",
  CSE0612305: "Computer Networking",
  CSE0612306: "Computer Networking Lab",
  CSE0613309: "Software Engineering",
  CSE0613310: "Software Engineering Lab",
  CSE0613301: "Web Programming",
  CSE0613302: "Web Programming Lab",
  CSE0613303: "Systems Analysis and Design",
  CSE0613311: "Artificial Intelligence",
  CSE0613312: "Artificial Intelligence Lab",
  CSE0613205: "Operating System",
  CSE0613206: "Operating System Lab",
  CSE0613209: "Microprocessor Assembly Programming",
  CSE0613210: "Microprocessor Assembly Programming Lab",
  CSE0611101: "Discrete Mathematics",
  CSE0613207: "Java Programming",
  CSE0613208: "Java Programming Lab",
  CSE0613201: "Object-Oriented Programming Language",
  CSE0613202: "Object-Oriented Programming Language Lab",
  CSE0613203: "Digital Logic Design",
  CSE0613204: "Digital Logic Design Lab",
  CSE0613103: "Data Structure and Algorithms",
  CSE0613104: "Data Structure and Algorithms Lab",
  CSE0611201: "Computer Architecture",
  CSE0613101: "Structured Programming Language",
  CSE0613102: "Structured Programming Language Lab",
  EEE0713201: "Electronics",
  EEE0714202: "Electronics Lab",
  EEE0713101: "Electrical Engineering",
  EEE0713102: "Electrical Engineering Lab",
  ENG0232101: "Communicative English",
  ENG0232102: "Communicative English Lab",
  MAT0541401: "Numerical Methods(Elective-IV)",
  MAT0541201: "Engineering Mathematics",
  MAT0541202: "Statistics and Queuing Theory",
  "MAT 0541102": "Linear Algebra",
  MAT0541101: "Differential & Integral Calculus",
  PHY0533101: "Physics",
  PHY0533102: "Physics Lab",
  BUS0411301: "Financial and Managerial Accounting",
  ECO0311101: "Engineering Economics",
  GED0413201: "Entrepreneurship: Innovation and Commercialization",
  GED0223101: "Professional Ethics and Environmental Protection",
  GED0222101: "Bangladesh Studies: History and Cultures",
};

// Mechanical whitespace normalization only. This lets the room routine's
// MAT0541102 resolve to the provided spreadsheet entry MAT 0541102 without
// changing the code displayed from the room routine.
const NORMALIZED_COURSE_NAMES = Object.fromEntries(
  Object.entries(COURSE_NAMES).map(([code, name]) => [code.replace(/\s+/g, ""), name]),
);

export function getCourseName(code: string): string | undefined {
  return COURSE_NAMES[code] ?? NORMALIZED_COURSE_NAMES[code.replace(/\s+/g, "")];
}
