    var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        $(function() { $('.container') });
        $(function() { $('.drag').draggable({scroll: false}) });
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
        $('#tank').click(function() {
		$(this).clone().appendTo('body').addClass('drag').css({
          position: 'relative',
          left: '5px',
          top: '5px'
          })
	$(function() { $('.drag').draggable({scroll: false}) });
        });
    });
