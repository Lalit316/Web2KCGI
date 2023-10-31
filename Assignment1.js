var students = [
  { name: "Ramesh", score: 85 },
  { name: "Polard", score: 92 },
  { name: "Suman", score: 78 },
  { name: "Rajesh", score: 95 },
  { name: "Susila", score: 30 },
  { name: "Suresh", score: 76 },
  { name: "Ganesh", score: 89 },
  { name: "Hari", score: 66 },
  { name: "Indu", score: 81 },
  { name: "Janak", score: 87 },
  { name: "Karishma", score: 90 },
  { name: "Lalit", score: 99 },
  { name: "Milan", score: 97 },
  { name: "Narendra", score: 91 },
  { name: "Pandey", score: 87 },
];

// Sort students by score in descending order
students.sort(function (a, b) {
  return b.score - a.score;
});
var studentList = document.createElement("ol");

for (var i = 0; i < students.length; i++) {
  var student = students[i];
  var listItem = document.createElement("li");
  listItem.textContent = student.name + ": " + student.score;
  studentList.appendChild(listItem);
}
var studentScoresDiv = document.getElementById("studentScores");
studentScoresDiv.appendChild(studentList);
