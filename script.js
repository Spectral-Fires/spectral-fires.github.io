    var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        $(function() { $('.container') });
        $(function() { $('.drag').draggable() });
        $(function() { $('.resize').draggable()
            .resizable({
            aspectRatio: true,
            scroll: false
        }); });
        $(function() { $('.fresize').draggable()
            .resizable({
            aspectRatio: false,
            scroll: false
        }); });
        $(function() { $('.rotate').rotatable({wheelRotate:true, snap:true, step: 15, }) });

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
		$(this).clone().appendTo('#catcher').addClass('drag').removeAttr('id').css({
          position: 'absolute',
          left: '25px',
          top: '25px'
          })
	$(function() { $('.drag').draggable().resizable({aspectRatio: true}).rotatable({wheelRotate:true, snap:true, step: 15, })});
        });
	  
        // CREATE MORE DIV, WITH 'ABSOLUTE' POSITIONING.
        $('.selectfr').click(function() {
		$(this).clone().appendTo('#catcher').addClass('drag').removeAttr('id').css({
          position: 'absolute',
          left: '25px',
          top: '25px'
          })
	$(function() { $('.drag').draggable().resizable({aspectRatio: false}).rotatable({wheelRotate:true, snap:true, step: 15, })});
        });
	    
    });
