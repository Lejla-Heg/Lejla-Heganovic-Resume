/*--KOMENTAR OZNAKA
Name: Lejla Heganovic
Course: CS412
Assignment: Resume JS
Due Date: 09.12.2021-->*/

/*Declaring a function*/

function goToTop(){
/*Window object is a JS object that points to documnet and Document presents a tree of objects on our page*/
    window.scrollTo(0,0)
};
/*it takes an object with a property*/

function Toggle(){
    var element = document.body;
   element.classList.toggle("d-mode");

}

function Git(){
    window.open("https://github.com/Lejla-Heg");
}

window.addEventListener("scroll", () => {
    const top_btn=document.getElementById("top-btn");
    if(top_btn !== null){
        // console.log(window.scrollY);
        top_btn.classList.toggle("show-top-btn", window.scrollY>300);
        }
});

$(document).ready(() => {
    // console.log('here');
    $("#welcome-btn").click(function () { 
    $("#TextNote").animate({
        width:'toggle',
        opacity:1
    });
    });
})


$(document).ready(() => {
    // console.log('here');
    $("#calendar-btn").click(function () { 
    $("#Calendar").animate({
        width:'toggle',
        opacity:1
    });
    });
})

// window.onload = function() {
    const Languages = ["Bosnian C1", "English B2", "German A2", "Turskih A1"]
    let text = "";
    for (let i = 0; i < Languages.length; i++) {
      text += Languages[i] + "<br>";
    }

    document.getElementById("jezici").innerHTML = text;
    console.log(text)
// }

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday! IT'S THE WEEKEND";
    break;
  case 1:
    day = "Monday! 5 more days until the weekend";
    break;
  case 2:
    day = "Tuesday! 4 more days until the weekend";
    break;
  case 3:
    day = "Wednesday! 3 more days untily the weekend!";
    break;
  case 4:
    day = "Thursday! 2 more day until the weekend ";
    break;
  case 5:
    day = "Friday! 1 more day until the weekend";
    break;
  case  6:
    day = "Saturday IT'S THE WEEKEND";
}
document.getElementById("Calendar").innerHTML = "Today is " + day;