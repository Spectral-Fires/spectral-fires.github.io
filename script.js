  var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.select').click(function() {
		$(this).clone().appendTo('#catcher').addClass('drag').removeAttr('id').css({
          position: 'absolute',
          left: '25px',
          top: '25px'
          })
	$(function() { $('.drag').draggable() });
        });  

        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.selectr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragr').removeAttr('id').css({
          position: 'absolute',
          left: '25px',
          top: '25px'
          })
	$(function() { $('.dragr').draggable().resizable({aspectRatio: true})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
        });
	  
        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.selectfr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('dragfr').removeAttr('id').css({
          position: 'absolute',
          left: '25px',
          top: '25px'
          })
	$(function() { $('.dragfr').draggable().resizable({aspectRatio: false})});
	$(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });
        });
	    
    });
