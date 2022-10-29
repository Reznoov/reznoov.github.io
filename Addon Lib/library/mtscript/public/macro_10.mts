
const updateBars = () => {
let x = document.querySelectorAll("p.hp_txt");

var num, color;
for(let i in x) {
  num = eval(x[i].innerHTML).toPrecision(3) * 100;
  document.querySelectorAll("div.hp_cur")[i].style.width = num + "%";

  num = Math.round(num/5)*5;
if(num >= 90) {
  color = "#246d1d";
} else if(num <= 10) {
  color = "#be3932";
} else {
  switch(num) {
    case 85: color = "#387b23";
      break;
    case 80: color = "#528f2c";
      break;
    case 75: color = "#578b1d";
      break;
    case 70: color = "#78a52d";
      break;
    case 65: color = "#7b9d1a";
      break;
    case 60: color = "#8ea41a";
      break;
    case 55: color = "#959f13";
      break;
    case 50: color = "#b4b428";
      break;
    case 45: color = "#aba21f";
      break;
    case 40: color = "#aba21f";
      break;
    case 35: color = "#c6b13a";
      break;
    case 30: color = "#b28a26";
      break;
    case 25: color = "#c78c3b";
      break;
    case 20: color = "#ba432e";
     break;
    case 15: color = "#ba432e";
     break;
  } 
}

  document.querySelectorAll("div.hp_cur")[i].style.backgroundColor = color;
  }
}

document.body.onload = function() {updateBars()}; 

const getPosition = ele => {
  var xPos = 0;
  var yPos = 0;
 
  while (ele) {
    if (ele.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = ele.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = ele.scrollTop || document.documentElement.scrollTop;
 
      xPos += (ele.offsetLeft - xScroll + ele.clientLeft);
      yPos += (ele.offsetTop - yScroll + ele.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (ele.offsetLeft - ele.scrollLeft + ele.clientLeft);
      yPos += (ele.offsetTop - ele.scrollTop + ele.clientTop);
    }
 
    ele = ele.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}


const showTooltip = (ele, show) => {
  let name = document.getElementById(ele.name);
  if(show == 1) {
  	let position = getPosition(ele);
    name.style.display = "flex";
    name.style.left = position.x - 85 + "px";
    name.style.top = position.y + 30 +"px";
  } else {
    name.style.display = "none";
  }
}