  var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.select').click(function() {
		$(this).clone().appendTo('#catcher').addClass('drag').removeClass('select').removeAttr('id').css({
          position: 'absolute',
          left: '30px',
          top: '30px'
          })
	$(function() { $('.drag').draggable({containment: '#container'}).resizable({aspectRatio: true})});
        });  

        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.selectr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragr').removeClass('selectr').removeAttr('id').css({
          position: 'absolute',
          left: '5px',
          top: '5px'
          })
	$(function() { $('.dragr').draggable({containment: '#container'}).resizable({aspectRatio: true})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
        });
	  
        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.selectfr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragfr').removeClass('selectfr').removeAttr('id').css({
          position: 'absolute',
          left: '5px',
          top: '5px'
          })
	$(function() { $('.dragfr').draggable({containment: '#container'}).resizable({aspectRatio: false})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
        });
	    
    });
