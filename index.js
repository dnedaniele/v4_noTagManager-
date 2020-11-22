
let buttonsList = document.getElementsByClassName("btn btn-primary");


buttonsList[1].addEventListener("click", function teest(){alert("clicked!")}) // this works


for (let i = 0; i < buttonsList.lengt; i++) {    // this does not

    console.log(buttonsList) 
   buttonsList[i].addEventListener("click", function () {
      alert("you clicked");
    }); 

  
}

// here below an working example

/* var listMenubar = document.querySelectorAll("a.has-sub-menu").length;

for (var i = 0; i < listMenubar; i++) {
  document
    .querySelectorAll("a.has-sub-menu")
    [i].addEventListener("mouseover", function () {
      var x = this;
      x.innerHTML = "test";
    });
} */

// SHift + Alt + A
