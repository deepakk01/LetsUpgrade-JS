//Q-1: create a webpage containing an image and three buttons
//     a. on click of the second btn change the existing image to new image
//     b. on click of third btn change it once again
//     c. on click of first btn the first image should come back

document.getElementById("change-1").addEventListener("click", existingImage);
document.getElementById("change-2").addEventListener("click", secondChange);
document.getElementById("change-3").addEventListener("click", thirdChange);

function secondChange() {
  document.getElementById("myImg").src = "image2.jpg";
}
function thirdChange() {
  document.getElementById("myImg").src = "image3.jpg";
}
function existingImage() {
  document.getElementById("myImg").src = "image1.jpg";
}

//Q-2: create a webpage containing two input field and a btn
//     a. Write something in the first input
//     b. on click of the btn the content of input one should be copied in the second input

document.getElementById("copy").addEventListener("click", copyText);

function copyText() {
  let firstInput = document.getElementById("input-1").value;
  document.getElementById("input-2").value = firstInput;
}

//Q-3: create an array of object with object having the following properties
//     a. {name (string), age(number), country(string), hobbies array(string[])}
//     b. write a function to display all objects on the console

let myArray = [
  {
    name: "Brad",
    age: 40,
    country: "USA",
    hobbies: ["coding", "reading books", "gaming"],
  },
  {
    name: "Jonas",
    age: 29,
    country: "Portugal",
    hobbies: ["coding", "painting", "reading"],
  },
  {
    name: "Harry",
    age: 26,
    country: "India",
    hobbies: ["coding", "singing", "gaming"],
  },
  {
    name: "Gary",
    age: 39,
    country: "USA",
    hobbies: ["coding", "desinging", "raeding"],
  },
  {
    name: "Edwin",
    age: 27,
    country: "Romania",
    hobbies: ["coding", "desinging", "photography"],
  },
  {
    name: "Ryuga",
    age: 22,
    country: "India",
    hobbies: ["coding", "Anime", "Manga"],
  },
];

function printObject() {
  myArray.forEach((el) => {
    console.log(el);
  });
  //console.log(myArray);
}
printObject();

//Q-4: following the 3rd question
//     a. write a function to display all the object having age less than 30
//     b. write a function to display all the objects having country india

function showAgeObject() {
  console.log("Showing Objects with less than 30");
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].age < 30) {
      console.log(myArray[i]);
    }
  }
}

function showCountryIndia() {
  console.log("Showing Objects with Country having India");
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].country === "India") {
      console.log(myArray[i]);
    }
  }
}
showAgeObject();
showCountryIndia();
