// ARENA CALLER - Parses URL for arena information //

var url;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    url = {};
    while (match = search.exec(query))
       url[decode(match[1])] = decode(match[2]);
})();

// Constructs a list of multi-state fights //

var twostage = [
	"howling-eye", 
	"second-turn-4",
	"thordans-reign",
	"containment-bay-s1t7",
	"burden-of-the-son",
	"soul-of-the-creator",
	"shinryus-domain",
	"jade-stoa",
	"tsukuyomis-pain",
	"hells-kier",
	"wreath-of-snakes",
	"dancing-plague",
	"hades-elegy",
	"cinder-drift",
	"castrum-marinum",
];
var threestage = [
	"deltascape-v4.0",
	"unending-coil-of-bahamut",
	"umbra",
];
var fourstage = [
	"cuff-of-the-son",
	"weapons-refrain",
	"epic-of-alexander",
	"eternity",
];

// Calls the arena //

if (typeof url['s'] == 'undefined') {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + '.jpg';
	} else {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + url['s'] + '.jpg';
	}

const img = document.getElementById("arenaimg");
    	img.src = imgsrc;

// Checks the arena name against the stage arrays to summon a switchlist if needed //

	var a = document.createElement("a");
	var t = document.createTextNode("1");
	var a2 = document.createElement("a");
	var t2 = document.createTextNode("2");
	var a3 = document.createElement("a");
	var t3 = document.createTextNode("3");
	var a4 = document.createElement("a");
	var t4 = document.createTextNode("4");

if (twostage.includes(url['a'])) {
	a.appendChild(t)
	a.setAttribute('name', "1");
	a2.appendChild(t2)
	a2.setAttribute('name', "2");
	document.getElementById("stage-select").appendChild(a);
	document.getElementById("stage-select").appendChild(a2);
} else if (threestage.includes(url['a'])) {
	a.appendChild(t)
	a.setAttribute('name', "1");
	a2.appendChild(t2)
	a2.setAttribute('name', "2");
	a3.appendChild(t3)
	a3.setAttribute('name', "3");
	document.getElementById("stage-select").appendChild(a);
	document.getElementById("stage-select").appendChild(a2);
	document.getElementById("stage-select").appendChild(a3);
} else if (fourstage.includes(url['a'])) {
	a.appendChild(t)
	a.setAttribute('name', "1");
	a2.appendChild(t2)
	a2.setAttribute('name', "2");
	a3.appendChild(t3)
	a3.setAttribute('name', "3");
	a4.appendChild(t4)
	a4.setAttribute('name', "4");
	document.getElementById("stage-select").appendChild(a);
	document.getElementById("stage-select").appendChild(a2);
	document.getElementById("stage-select").appendChild(a3);
	document.getElementById("stage-select").appendChild(a4);
} else {
	$('#stage-select').remove();
}

// Swaps the arena  //

$(document).on("click","a[name='1']", function(one) {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + '1' + '.jpg';
	const img = document.getElementById("arenaimg");
    	img.src = imgsrc;
};
$(document).on("click","a[name='2']", function(two) {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + '2' + '.jpg';
	const img = document.getElementById("arenaimg");
    	img.src = imgsrc;
};
$(document).on("click","a[name='3']", function(three) {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + '3' + '.jpg';
	const img = document.getElementById("arenaimg");
    	img.src = imgsrc;
};
$(document).on("click","a[name='4']", function(four) {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + '4' + '.jpg';
	const img = document.getElementById("arenaimg");
    	img.src = imgsrc;
};
	
// TRANSFORM FUNCTIONS - Calls new objects and assigns them active functions //

$(window).on("load", function() {
	// Drag Only //
	$('.select').click(function() {
		$(this).clone().appendTo('#catcher').addClass('drag').removeClass('select').removeAttr('id').css({
			position: 'absolute',
			top: '34px',
			left: '34px'
	  })
	$(function() { $('.drag').draggable({containment: 'body'})});
	});
	
	// Full Motion / Fixed Aspect Ratio //
	$('.selectr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragr').removeClass('selectr').removeAttr('id').css({
	  		position: 'absolute',
			width: '80%',
			height: '80%',
			top: '0px',
			left: '0px'
	  })
	$(function() { $('.dragr').draggable({containment: 'body'}).resizable({aspectRatio: true})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
	});
	
	// Full Motion / Free Ratio //
	$('.selectfr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragfr').removeClass('selectfr').removeAttr('id').css({
		  	position: 'absolute',
			width: '80%',
			height: '80%',
			top: '0px',
			left: '0px'
	  })
	$(function() { $('.dragfr').draggable({containment: 'body'}).resizable({aspectRatio: false})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
	});
	})

// Clear all active transforms //

      $(document).on("click","a[name='reset']", function (e) {
      $('.drag').remove();
      $('.dragr').remove();
      $('.dragfr').remove();
      });
