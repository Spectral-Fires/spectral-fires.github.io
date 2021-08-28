/* Tanks */
dragElement(document.getElementById("pld"));
dragElement(document.getElementById("pld1"));
dragElement(document.getElementById("war"));
dragElement(document.getElementById("war1"));
dragElement(document.getElementById("drk"));
dragElement(document.getElementById("drk1"));
dragElement(document.getElementById("gnb"));
dragElement(document.getElementById("gnb1"));
/* Casters */
dragElement(document.getElementById("blm"));
dragElement(document.getElementById("blm1"));
dragElement(document.getElementById("smn"));
dragElement(document.getElementById("smn1"));
dragElement(document.getElementById("rdm"));
dragElement(document.getElementById("rdm1"));
dragElement(document.getElementById("blu"));
dragElement(document.getElementById("blu1"));
/* Melee */
dragElement(document.getElementById("drg"));
dragElement(document.getElementById("drg1"));
dragElement(document.getElementById("mnk"));
dragElement(document.getElementById("mnk1"));
dragElement(document.getElementById("nin"));
dragElement(document.getElementById("nin1"));
dragElement(document.getElementById("sam"));
dragElement(document.getElementById("sam1"));
/* Ranged */
dragElement(document.getElementById("brd"));
dragElement(document.getElementById("brd1"));
dragElement(document.getElementById("mch"));
dragElement(document.getElementById("mch1"));
dragElement(document.getElementById("dnc"));
dragElement(document.getElementById("dnc1"));
/* Healers */
dragElement(document.getElementById("whm"));
dragElement(document.getElementById("whm1"));
dragElement(document.getElementById("sch"));
dragElement(document.getElementById("sch1"));
dragElement(document.getElementById("ast"));
dragElement(document.getElementById("ast1"));

/* Roles */
dragElement(document.getElementById("tank"));
dragElement(document.getElementById("tank1"));
dragElement(document.getElementById("healer"));
dragElement(document.getElementById("healer1"));
dragElement(document.getElementById("melee"));
dragElement(document.getElementById("melee1"));
dragElement(document.getElementById("melee2"));
dragElement(document.getElementById("melee3"));
dragElement(document.getElementById("ranged"));
dragElement(document.getElementById("ranged1"));
dragElement(document.getElementById("ranged2"));
dragElement(document.getElementById("ranged3"));
dragElement(document.getElementById("caster"));
dragElement(document.getElementById("caster1"));
dragElement(document.getElementById("caster2"));
dragElement(document.getElementById("caster3"));

/* Markers */
dragElement(document.getElementById("mark1"));
dragElement(document.getElementById("mark2"));
dragElement(document.getElementById("mark3"));
dragElement(document.getElementById("mark4"));
dragElement(document.getElementById("mark5"));
dragElement(document.getElementById("mark6"));
dragElement(document.getElementById("mark7"));
dragElement(document.getElementById("mark8"));
dragElement(document.getElementById("chain1"));
dragElement(document.getElementById("chain2"));
dragElement(document.getElementById("chain3"));
dragElement(document.getElementById("chain4"));
dragElement(document.getElementById("chain5"));
dragElement(document.getElementById("chain6"));
dragElement(document.getElementById("chain7"));
dragElement(document.getElementById("chain8"));
dragElement(document.getElementById("ignore1"));
dragElement(document.getElementById("ignore2"));
dragElement(document.getElementById("ignore3"));
dragElement(document.getElementById("ignore4"));
dragElement(document.getElementById("ignore5"));
dragElement(document.getElementById("ignore6"));
dragElement(document.getElementById("ignore7"));
dragElement(document.getElementById("ignore8"));
dragElement(document.getElementById("square"));
dragElement(document.getElementById("circle"));
dragElement(document.getElementById("cross"));
dragElement(document.getElementById("triangle"));

/* Waymarks */
dragElement(document.getElementById("waymarka"));
dragElement(document.getElementById("waymarkb"));
dragElement(document.getElementById("waymarkc"));
dragElement(document.getElementById("waymarkd"));
dragElement(document.getElementById("waymark1"));
dragElement(document.getElementById("waymark2"));
dragElement(document.getElementById("waymark3"));
dragElement(document.getElementById("waymark4"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
