// Searches for and calls arena images //

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

if urlParams = 'undefined' {
	return ""
}

var imgsrc = '/images/' + urlParams["t"] + '/' + urlParams["a"] + urlParams["s"] + '.jpg';

alert(imgsrc);

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
