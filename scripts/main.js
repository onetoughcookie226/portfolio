

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/b.jpg') {
      myImage.setAttribute ('src','images/w.jpg');
    } else {
      myImage.setAttribute ('src','images/b.jpg');
    }
}

// let quseion = 'where are you from?';
//     substring = 'from'

//     // console.log(question.includes(substring));

// if (question == '') {

// }
