var elem =   document.getElementById("screenYposition");
elem.textContent = "scrolled = " + pageYOffset;
window.onscroll = function() {
  scrollSurprise();
  getCoords(document.getElementById("screenYposition"));
};
// get document coordinates of the element
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  // your size calculation code here
    document.getElementById("screenYposition").textContent = "scrolled = " + pageYOffset;
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
  var show1 = 240;
  var show2 = 330;
  var show3 = 445;
  var showEnd = 500;
  if ((topDistance >= show1) && (topDistance < show2)) {
    // console.log("Scrolled = " + topDistance);
    for (var i = 0; i < gridItem1.length; i++) {
      gridItem1[i].classList.add("gridAnimate");
    }
  } else if ((topDistance >= show2) && (topDistance < show3)) {
    // console.log("\t Scrolled 2 = " + topDistance);
    for (var i = 0; i < gridItem2.length; i++) {
      gridItem2[i].classList.add("gridAnimate");
    }
  } else if ((topDistance >= show3) && (topDistance < showEnd)) {
    // console.log("\t\t Scrolled 3 = " + topDistance);
    for (var i = 0; i < gridItem3.length; i++) {
      gridItem3[i].classList.add("gridAnimate");
    }
  } else if ((topDistance >= 420) && (topDistance < 1500)) {
    // Show all the shit out!!!
    // console.log("\t\t\t Scrolled 2 = " + topDistance);
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
    document.getElementById('svg-IDframe2').classList.add("svg-frame2");
    document.getElementById('svg-IDframe3').classList.add("svg-frame3");
  } else {
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
