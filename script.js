// Searches for and calls arena images //

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

if (typeof url['s'] == 'undefined') {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + '.jpg';
	} else {
	var imgsrc = '/' + url['t'] + '/' + url['e'] + '/' + url['a'] + url['s'] + '.jpg';
	}

const img = document.getElementById("arenaimg");
    	img.src = imgsrc;

// Calls new objects and assigns them active functions //

$(window).on("load", function() {
	// Drag Only //
	$('.select').click(function() {
		$(this).clone().appendTo('#catcher').addClass('drag').removeClass('select').removeAttr('id').css({
	  position: 'absolute',
		width: '80%',
		height: '80%'
	  })
	$(function() { $('.drag').draggable({containment: 'body'})});
	});
	
	// Full Motion / Fixed Aspect Ratio //
	$('.selectr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragr').removeClass('selectr').removeAttr('id').css({
	  	position: 'absolute',
			width: '80%',
			height: '80%'
	  })
	$(function() { $('.dragr').draggable({containment: 'body'}).resizable({aspectRatio: true})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
	});
	
	// Full Motion / Free Ratio //
	$('.selectfr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragfr').removeClass('selectfr').removeAttr('id').css({
		  position: 'absolute',
			width: '80%',
			height: '80%'
	  })
	$(function() { $('.dragfr').draggable({containment: 'body'}).resizable({aspectRatio: false})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
	});
	})

      $(document).on("click","a[name='reset']", function (e) {
      $('.drag').remove();
      $('.dragr').remove();
      $('.dragfr').remove();
      });
