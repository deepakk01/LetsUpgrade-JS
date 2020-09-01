//Question 1 -----Program to search for a particular Character in a String------

let myString = "Education";
console.log(myString.indexOf("d"));

//Question 2 -----Program to convert Minutes to Second--------------------------

let minutes = prompt("Input a Number(Minutes) to get Seconds value");
console.log(minutes * 60);

//Question 3 ----Program to search for a element in a array of string-----------

let tech = ["Python", "JavaScript", "Css", "React", "Angular", "Vue"];
console.log(tech.includes("Python"));

//Question 4 ---- Program to display only elements containing 'a' in them from a array----------------------

let myArray = [
  "Python",
  "JavaScript",
  "Css",
  "React",
  "Angular",
  "Vue",
  "Redux",
];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i].includes("a")) {
    console.log(myArray[i]);
  }
}

//Question 5 ----- Print an array in reverse order ---------------------------
let myArr = ["Python", "JavaScript", "Css", "React", "Angular", "Vue", "Saas"];

for (let i = myArr.length - 1; i >= 0; i--) {
  console.log(myArr[i]);
}
