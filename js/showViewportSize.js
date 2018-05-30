var elem = document.getElementById("screenYposition");
elem.textContent = "scrolled = " + pageYOffset;
window.onscroll = function() {
  scrollSurprise();
  getCoords(document.getElementById("screenYposition"));
};
// get document coordinates of the element
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  // your size calculation code here
  document.getElementById("screenYposition").textContent = "scrolled = " + Math.floor(pageYOffset);
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function scrollSurprise() {
  var topDistance = document.body.scrollTop || (document.documentElement && document.documentElement.scrollTop);
  var gridItem1 = document.querySelectorAll(".grid-item-row1");
  var gridItem2 = document.querySelectorAll(".grid-item-row2");
  var gridItem3 = document.querySelectorAll(".grid-item-row3");

  var show1 = 270;
  var show2 = 425;
  var show3 = 580;
  var showEnd = 590;
  if ((topDistance >= show1) && (topDistance < show2)) {
    // console.log("Scrolled = " + topDistance);
    for (var i = 0; i < gridItem1.length; i++) {
      gridItem1[i].classList.add("gridAnimate");
      document.getElementById('screenYposition').style.backgroundColor = 'rgba(238, 89, 89, 1)';
    }
  } else if ((topDistance >= show2) && (topDistance < show3)) {
    // console.log("\t Scrolled 2 = " + topDistance);
    for (var i = 0; i < gridItem2.length; i++) {
      gridItem2[i].classList.add("gridAnimate");
      document.getElementById('screenYposition').style.backgroundColor = 'rgba(255, 0, 145, 0.97)';
    }
  } else if ((topDistance >= show3) && (topDistance < showEnd)) {
    // console.log("\t\t Scrolled 3 = " + topDistance);
    for (var i = 0; i < gridItem3.length; i++) {
      gridItem3[i].classList.add("gridAnimate");
      document.getElementById('screenYposition').style.backgroundColor = 'rgba(255, 0, 145, 0.97)';
    }
  } else if ((topDistance >= 550) && (topDistance < 1500)) {
    // Show all the shit out!!!
    // console.log("\t\t\t Scrolled 2 = " + topDistance);
    document.getElementById('screenYposition').style.backgroundColor = 'rgba(254, 30, 30, 0.97)';
    document.getElementById('divChatMe').style.opacity = "1";
    document.getElementById('dimensions').style.opacity = "1";
    document.getElementById('underConstr').style.opacity = "1";
    document.getElementById('divChatMe').classList.add("floatDivShow");
    document.getElementById('dimensions').classList.add("floatDivShow");
    document.getElementById('underConstr').classList.add("floatDivShow");
    document.getElementById('divChatMe').classList.remove("floatDiv-Hide");
    document.getElementById('dimensions').classList.remove("floatDiv-Hide");
    document.getElementById('underConstr').classList.remove("floatDiv-Hide");
  } else if (topDistance >= 1500) {
    document.getElementById('screenYposition').style.backgroundColor = 'rgb(255, 106, 51)';
    document.getElementById('svg-IDframe2').classList.add("svg-frame2");
    document.getElementById('svg-IDframe3').classList.add("svg-frame3");
  } else {
    document.getElementById('screenYposition').style.backgroundColor = 'rgb(255, 56, 56)';
    document.getElementById('divChatMe').classList.remove("floatDivShow");
    document.getElementById('dimensions').classList.remove("floatDivShow");
    document.getElementById('underConstr').classList.remove("floatDivShow");
    document.getElementById('divChatMe').classList.add("floatDiv-Hide");
    document.getElementById('dimensions').classList.add("floatDiv-Hide");
    document.getElementById('underConstr').classList.add("floatDiv-Hide");
    document.getElementById('svg-IDframe2').classList.remove("svg-frame2");
    document.getElementById('svg-IDframe3').classList.remove("svg-frame3");
    var allGridItem = document.querySelectorAll(".grid-item");
    for (var i = 0; i < allGridItem.length; i++) {
      allGridItem[i].classList.remove("gridAnimate");
    }
  }
}

// Get the modal
// var modal = document.getElementById('modal-window');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var modalBtn = document.getElementsByClassName('modalBtn');
console.log("modalBtn.length : " + modalBtn.length);

// for (var i = 0; i < modalBtn.length; i++) {
//   console.log("modalBtn #: " + i);
//   modalBtn[i].onclick = function() {
//       modalClass[i].style.display = "block";
//   }
// }
// var btn = document.getElementsByClassName("click-to-open");


var btn = document.getElementsByClassName("click-to-open");

for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function() {
    var modal = document.getElementById(this.dataset.modal);
    modal.style.display = "block";
  }, false);
}
// for (var i = 0; i < btn.length; i++) {
//   var thisBtn = btn[i];
//   console.log("thisBtn.length  " + thisBtn.length);
//   thisBtn.addEventListener("click", function() {
//     var modalS = document.getElementById(this.dataset.modal);
//     modalS.style.display = "block";
//   }, false);
// }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
var modalDiv = document.getElementsByClassName('modal');

console.log("modal.length : " + modalDiv.length);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  console.log("span.onclick() Im ere!! ");
  modalDiv.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDiv) {
    modalDiv.style.display = "none";
  }
}
