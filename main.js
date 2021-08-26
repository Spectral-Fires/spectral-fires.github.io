 <script type="text/javascript">
  $(document).ready(function() {

    $(".component_item").draggable({
      helper: 'clone',
      cursor: "move"
    });

    $("#board").droppable({
      accept: ".component_item",
      drop: function(event, ui) {
        $(this).append($(ui.draggable).clone());
        $("#board .component_item").addClass("new_item");
        $(".new_item").removeClass("ui-draggable component_item");
        $(".new_item").resizable({
          handles: "all",
          autoHide: true
        });
        $(".new_item").draggable({
           stop: function (event, ui) {
          $('#board').on('click', '.new_item', function() {
                                var $this = $(this);
                                var thisitem = $(this).clone();
                                var thisitemDelete = $(this);
                                $( "#copy, #delete").unbind('click');
                                $( "#copy").click(function(e) {
                                    thisitem.appendTo("#board");
                                    $($this).css("border-style","solid");
                                });
                                $( "#delete").click(function(e) {
                                    thisitemDelete.remove();
                                    $($this).css("border-style","none");
                                });
                                $(this).css("border-style","dotted");


                            });
           }

        });
      }
   
    });
  }); //    \\End--Ready
</script>
