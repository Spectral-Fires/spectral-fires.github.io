setTimeout(dragElement, 5000)

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

/* Other */
dragElement(document.getElementById("exclaim1"));
dragElement(document.getElementById("exclaim2"));
dragElement(document.getElementById("exclaim3"));
dragElement(document.getElementById("exclaim4"));
dragElement(document.getElementById("exclaim5"));
dragElement(document.getElementById("exclaim6"));
dragElement(document.getElementById("exclaim7"));
dragElement(document.getElementById("exclaim8"));
dragElement(document.getElementById("exclaim9"));
dragElement(document.getElementById("exclaim0"));

dragElement(document.getElementById("x1"));
dragElement(document.getElementById("x2"));
dragElement(document.getElementById("x3"));
dragElement(document.getElementById("x4"));
dragElement(document.getElementById("x5"));
dragElement(document.getElementById("x6"));
dragElement(document.getElementById("x7"));
dragElement(document.getElementById("x8"));
dragElement(document.getElementById("x9"));
dragElement(document.getElementById("x0"));

dragElement(document.getElementById("check1"));
dragElement(document.getElementById("check2"));
dragElement(document.getElementById("check3"));
dragElement(document.getElementById("check4"));
dragElement(document.getElementById("check5"));
dragElement(document.getElementById("check6"));
dragElement(document.getElementById("check7"));
dragElement(document.getElementById("check8"));
dragElement(document.getElementById("check9"));
dragElement(document.getElementById("check0"));

dragElement(document.getElementById("sword1"));
dragElement(document.getElementById("sword2"));
dragElement(document.getElementById("sword3"));
dragElement(document.getElementById("sword4"));
dragElement(document.getElementById("sword5"));
dragElement(document.getElementById("sword6"));
dragElement(document.getElementById("sword7"));
dragElement(document.getElementById("sword8"));
dragElement(document.getElementById("sword9"));
dragElement(document.getElementById("sword0"));

dragElement(document.getElementById("b1"));
dragElement(document.getElementById("b2"));
dragElement(document.getElementById("b3"));
dragElement(document.getElementById("b4"));
dragElement(document.getElementById("b5"));
dragElement(document.getElementById("b6"));
dragElement(document.getElementById("b7"));
dragElement(document.getElementById("b8"));
dragElement(document.getElementById("b9"));
dragElement(document.getElementById("b0"));

dragElement(document.getElementById("r1"));
dragElement(document.getElementById("r2"));
dragElement(document.getElementById("r3"));
dragElement(document.getElementById("r4"));
dragElement(document.getElementById("r5"));
dragElement(document.getElementById("r6"));
dragElement(document.getElementById("r7"));
dragElement(document.getElementById("r8"));
dragElement(document.getElementById("r9"));
dragElement(document.getElementById("r0"));

dragElement(document.getElementById("y1"));
dragElement(document.getElementById("y2"));
dragElement(document.getElementById("y3"));
dragElement(document.getElementById("y4"));
dragElement(document.getElementById("y5"));
dragElement(document.getElementById("y6"));
dragElement(document.getElementById("y7"));
dragElement(document.getElementById("y8"));
dragElement(document.getElementById("y9"));
dragElement(document.getElementById("y0"));

dragElement(document.getElementById("g1"));
dragElement(document.getElementById("g2"));
dragElement(document.getElementById("g3"));
dragElement(document.getElementById("g4"));
dragElement(document.getElementById("g5"));
dragElement(document.getElementById("g6"));
dragElement(document.getElementById("g7"));
dragElement(document.getElementById("g8"));
dragElement(document.getElementById("g9"));
dragElement(document.getElementById("g0"));

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
