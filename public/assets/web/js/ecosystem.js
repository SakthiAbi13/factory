
    $('.filebrowse').change(function () {
        var filePath = ($(this).val().replace(/C:\\fakepath\\/i, ""));
        $('.file_name-display').html(filePath);
    });


    $('.filebrowse').change(function () {
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                // $('#uploadButton').attr('disabled', false);
                break;
            default:
                // alert('This is not an allowed file type.');
                toastr.error('This is not an allowed file type');
                this.value = '';
                $('.file_name-display').html("No Choosen Image");
        }
    });




// People Can Search And Find Your Ecosystem
$(".addFilterBtn").click(function () {
    let $txt = $("#addFilterTxt");
    let filter = $txt.val();
    $txt.val('');
    $(`
  <div class = "added_chip chip badge rounded-pill bg-primary d-flex" tabindex = "-1">
    <span>
      ${filter}
    </span>
    <div title="Remove chip" aria-label="Remove chip" type = "button" onclick = "$(this).parent().remove()">
    <i class="fal fa-times"></i>
    </div>
  </div>`).appendTo("#filterChipsContainer");;
});


// Who Can Join This Ecosystem?
$(".addFilterBtn2").click(function () {
    let $txt = $("#addFilterTxt2");
    let filter = $txt.val();
    $txt.val('');
    $(`
  <div class = "added_chip chip badge rounded-pill bg-primary d-flex" tabindex = "-1">
    <span>
      ${filter}
    </span>
    <div title="Remove chip" aria-label="Remove chip" type = "button" onclick = "$(this).parent().remove()">
    <i class="fal fa-times"></i>
    </div>
  </div>`).appendTo("#filterChipsContainer2");;
});

// alert close 

$(".alert_close").click(function(){
   
    $(".alert_parent").remove();
});