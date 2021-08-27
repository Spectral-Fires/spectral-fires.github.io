dragElement(document.getElementById("pld"));
dragElement(document.getElementById("war"));
dragElement(document.getElementById("drk"));
dragElement(document.getElementById("gnb"));
dragElement(document.getElementById("blm"));
dragElement(document.getElementById("smn"));
dragElement(document.getElementById("rdm"));
dragElement(document.getElementById("blu"));
dragElement(document.getElementById("drg"));
dragElement(document.getElementById("mnk"));
dragElement(document.getElementById("nin"));
dragElement(document.getElementById("sam"));
dragElement(document.getElementById("brd"));
dragElement(document.getElementById("mch"));
dragElement(document.getElementById("dnc"));
dragElement(document.getElementById("whm"));
dragElement(document.getElementById("sch"));
dragElement(document.getElementById("ast"));

dragElement(document.getElementById("pld1"));
dragElement(document.getElementById("war1"));
dragElement(document.getElementById("drk1"));
dragElement(document.getElementById("gnb1"));
dragElement(document.getElementById("blm1"));
dragElement(document.getElementById("smn1"));
dragElement(document.getElementById("rdm1"));
dragElement(document.getElementById("blu1"));
dragElement(document.getElementById("drg1"));
dragElement(document.getElementById("mnk1"));
dragElement(document.getElementById("nin1"));
dragElement(document.getElementById("sam1"));
dragElement(document.getElementById("brd1"));
dragElement(document.getElementById("mch1"));
dragElement(document.getElementById("dnc1"));
dragElement(document.getElementById("whm1"));
dragElement(document.getElementById("sch1"));
dragElement(document.getElementById("ast1"));

dragElement(document.getElementById("tank"));
dragElement(document.getElementById("tank1"));
dragElement(document.getElementById("healer"));
dragElement(document.getElementById("healer1"));
dragElement(document.getElementById("melee"));
dragElement(document.getElementById("melee1"));
dragElement(document.getElementById("ranged"));
dragElement(document.getElementById("ranged1"));
dragElement(document.getElementById("caster"));
dragElement(document.getElementById("caster1"));


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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
