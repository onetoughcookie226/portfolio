

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/b.jpg') {
      myImage.setAttribute ('src','images/w.jpg');
    } else {
      myImage.setAttribute ('src','images/b.jpg');
    }
}

// Store the value of button and h3 in a variable
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

// Store user input in myName variable using prompt()function
function setUserName() {
    var myName = prompt('Please enter your name.');
//store the data in the browser using localStorage so to retrieve it later
    localStorage.setItem('name', myName);
// set the textContent of the heading to a string, plus the user's newly stored name.
    myHeading.textContent = 'Hey, ' + myName;
  }
// check whether the name data exists  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
//retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name   
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey, ' + storedName;
  }
//Add an onclick event handler
  myButton.onclick = function() {
    setUserName();
  }

let question = prompt('Ask a question about me and I\'ll try to answer it');
   
if (question.includes("where" && "from" )) {
  document.write ("From Canada")
} else if ( question.includes ("how" && "old" && "you")) {
  document.write ("22")
} else {
  document.write ('Sorry, I dont understand your question')
}
