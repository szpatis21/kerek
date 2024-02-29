


/* KÖTELEZŐ */

function kikapcs() {
  var x = document.getElementById("kotelezo_lent");
  var y = document.getElementById("kotelezo_fent");
  
  if (x.style.transform === "translatex(80%)" || y.style.transform === "translateY(80%)") 
  {y.style.opacity = "1";
  y.style.transform = "translatex(0%)";
  y.style.transition = "all 0.5s"
    x.style.opacity = "1";
    x.style.transform = "translatex(0%)";
    x.style.transition = "all 0.5s"
 
  } else {
    y.style.transform = "translatex(80%)";
    y.style.transition = "all 0.5s"
    y.style.opacity = "0";
    x.style.transform = "translatex(80%)";
    x.style.transition = "all 0.5s"
    x.style.opacity = "0";
  }}

/* MOBILMENU */

function checkUncheck()
{var checkbox = document.getElementById('menu-bar');
    if(checkbox.checked)
    {checkbox.checked = false;
      } else 
            {checkbox.checked = true;}}


 /*  INTÉZMÉNYVÁLASZTÓ */

const pp = document.querySelector('.pp');
const kep = document.querySelector('.kep');
const info = document.querySelector('.info');
const pp3 = document.querySelector('.pp3');
const kep3 = document.querySelector('.kep3');
const info4 = document.querySelector('.info4');
const pp4 = document.querySelector('.pp4');
const kep4 = document.querySelector('.kep4');
const info3 = document.querySelector('.info3');
const pp2 = document.querySelector('.pp2');
const kep2 = document.querySelector('.kep2');
const info2 = document.querySelector('.info2');

kep.addEventListener('mouseover', () => {
  pp.style.visibility =  'visible'
  pp.style.color = 'white';
  pp.style.textShadow = 'black 5px 5px 5px';
  pp.style.transition = "all 1s";
  pp.style.transform = "scale(1.1)";
  info.style.transition = "all 1s";
  info.style.color = 'rgba(255, 255, 255, 0)'
  info.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';  });
kep.addEventListener('mouseout', () => {
  pp.style.visibility =  'hidden'
  pp.style.color = '';
  pp.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info.style.color = '';
  info.style.textShadow = 'black 5px 5px 5px';
  pp.style.transform = "scale(1)";});

kep3.addEventListener('mouseover', () => {
  pp3.style.visibility =  'visible'
  pp3.style.transition = 'all 1s';
  pp3.style.color = 'white';
  pp3.style.textShadow = 'black 5px 5px 5px';
  pp3.style.marginTop = '0px';
  pp3.style.transform = "scale(1.1)";
  info4.style.transition = "all 1s";
  info4.style.color = 'rgba(255, 255, 255, 0)'
  info4.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';  });
kep3.addEventListener('mouseout', () => {
  pp3.style.visibility =  'hidden'
  pp3.style.color = '';
  pp3.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info4.style.color = '';
  info4.style.textShadow = 'black 5px 5px 5px';
  pp3.style.transform = "scale(1)";});

kep4.addEventListener('mouseover', () => {
  pp4.style.visibility =  'visible'
  pp4.style.color = 'white';
  pp4.style.textShadow = 'black 5px 5px 5px';
  pp4.style.transition = "all 1s";
  pp4.style.transform = "scale(1.1)";
  info3.style.transition = "all 1s";
  info3.style.color = 'rgba(255, 255, 255, 0)'
  info3.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';  });
kep4.addEventListener('mouseout', () => {
  pp4.style.visibility =  'hidden'
  pp4.style.color = '';
  pp4.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info3.style.color = '';
  info3.style.textShadow = 'black 5px 5px 5px';
  pp4.style.transform = "scale(1)";});

kep2.addEventListener('mouseover', () => {
  pp2.style.visibility =  'visible'
  pp2.style.color = 'white';
  pp2.style.textShadow = 'black 5px 5px 5px';
  pp2.style.transition = "all 1s";
  pp2.style.transform = "scale(1.1)";
  info2.style.transition = "all 1s";
  info2.style.color = 'rgba(255, 255, 255, 0)'
  info2.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';});
kep2.addEventListener('mouseout', () => {
  pp2.style.visibility =  'hidden'
  pp2.style.color = '';
  pp2.style.textShadow = 'rgba(255, 255, 255, 0) 0px 0px 0px';
  info2.style.color = '';
  info2.style.textShadow = 'black 5px 5px 5px';
  pp2.style.transform = "scale(1)";});


const fomenu = document.querySelector("#fomenu");
const tamogati = document.querySelector("#szoci")


