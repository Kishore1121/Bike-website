let redbtn = document.getElementById("red");
let bluebtn=document.getElementById("blue");
let blackbtn=document.getElementById("black");
let bike=document.getElementById("bike");

redbtn.onclick=function () {
    bike.style.backgroundImage="url(Images/BMW1.png)";
}

bluebtn.onclick=function () {
    bike.style.backgroundImage="url(Images/BMW2.png)";
}

blackbtn.onclick=function () {
    bike.style.backgroundImage="url(Images/BMW3.png)";
}