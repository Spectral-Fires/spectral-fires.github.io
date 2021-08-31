    var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;
    $(window).on("load", function() {

        $(function() { $('.container') });
        $(function() { $('.drag').draggable({
            scroll: false,
            helper: 'clone'
        }) });
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

        $('#click').click(function() {

            var dynamic_div = $(document.createElement('div')).css({
                position: 'absolute',
                width: '120', 
                height: '120', 
                padding: '0', 
                margin: '0'
            });

            element_pos = element_pos + $('#divContainer');
            
            // APPEND THE NEWLY CREATED DIV TO "divContainer".
            $(dynamic_div).appendTo('#divContainer').draggable().resizable();

            iCnt = iCnt + 1;
        });
    });


