
// var element;

// element = document.all;
// console.log(element);

// element = document.body;
// console.log(element);

// element = document.links;
// console.log(element);

// element = document.baseURI;
// console.log(element);


// element = document.getElementById("Amount");
// console.log(element);

// element = document.getElementById("Month").innerText;
// console.log(element);

// element = document.getElementById("Amount").innerHTML;
// console.log(element);

// element = document.getElementById("abc").getAttribute("class");
// console.log(element);

// element = document.getElementById("abc").getAttributeNode("class");
// console.log(element);

// element = document.getElementById("abc").attributes[1].name;
// console.log(element);

// element = document.getElementById("abc").innerHTML = "<h1>Hello</h1>";
// console.log(element);

// element = document.getElementById("abc").setAttribute("style","border : 2px solid yellow");
// console.log(element);


// -------------------------------------------------

// element = document.querySelector(".header").innerHTML = "<h1>Hello</h1>";
// console.log(element);


// element = document.querySelector(".header").style.backgroundColor = "orange";
// console.log(element);
// element = document.querySelector(".header").style.color = "blue";
// console.log(element);


// -----------------------------------------------------

// document.getElementById("indar").onclick = xyz;

// document.getElementById("indar").addEventListener("click",xyz);
// document.getElementById("indar").addEventListener("click",zyx);


// function xyz(){
//     document.getElementById("abc").style.background = "green";   
// }

// function zyx(){
//     document.getElementById("abc").style.border = "2px solid white";   
// }


// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text");

// newElement.appendChild(newText);

// console.log(newElement);

// document.getElementById("target").addEventListener("click", xyz);

// var a;

// function xyz() {
//     if (a == 0) {
//         document.getElementById("abc").style.display = "block";
//         return a = 1;
//     }
//     else {
//         document.getElementById("abc").style.display = "none";
//         return a = 0;
//     }
// }

// var selector = '.navbar li';

// $(selector).on('click', function(){
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });


function openform(){
    document.getElementById("form2").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("overflow").style.overflowY = "hidden";
}

function closeform(){
    document.getElementById("form2").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("overflow").style.overflowY = "visible";
}