    var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        $(function() { $('.container') });
        $(function() { $('.drag').draggable({
        }) });
        $(function() { $('.resize').draggable()
            .resizable({
            aspectRatio: true,
        }); });
        $(function() { $('.fresize').draggable()
            .resizable({
            aspectRatio: false,
            scroll: false
        }); });
        $(function() { $('.rotate').rotatable({
            wheelRotate:true, 
            snap:true, 
            step: 15, 
        }) });
        });
    });


