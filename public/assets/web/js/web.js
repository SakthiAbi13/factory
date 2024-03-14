  $(document).ready(function() {
   
     
    var base_url = $('#base_url').val();
    var token = $('#token').val();



    $(".search_option-submit").click(function(){ 
             
        $("#request_form").submit(); // Submit the form
    });

    $("#byind").change(function(){
      
      var item = $(this).val();
      if(item==""){
        $(".inditem").show();
      }else{
        //$(".inditem").css("display", "none !important");
        $('.inditem').attr('style','display:none !important');
        $("#ind"+item).show();  
      }
      
    });

    $(window).on('popstate', function(event) {
      var path = window.location.pathname;
      //var path = window.location.pathname.split("/")[2];
      console.log(path);
      if(path=='/dashboard' || path=='/dashboard/marketplace'){
        ajaxTabs(base_url+path,token);
      }
     });

    $("#country").change(function(){
      location.href = "/login?country="+$(this).val();
    });

    $(document).on("click",".tab-links",function(e) {
      e.preventDefault();
      var link = $(this).attr('href');
      
      window.history.pushState({path:link},'',link);

      ajaxTabs(link,token);
    
    });

    //////////////////////Ajax Tab load//////////////////
    function ajaxTabs(path,token) {
    
      $.ajax({
        type:'GET',
        url:path,
        data:'_token = '.token,
        success:function(data) {
          $("#page_wrapper").html(data);
          var owl = $(".pagelink_carousel");
          //    page links carousel
          owl.owlCarousel({
            loop:false,
            margin:5,
            nav:true,
            navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
            dots:false,
            autoWidth:true,
            items:5,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                600:{
                    items:5
                },
                1000:{
                    items:5,
                    nav:false,
                }
            }
          });
          if(path==base_url+'/dashboard') {

              $('.ads_carousel').owlCarousel({
                loop:true,
                margin:20,
                nav:false,
                autoplay:true,
                autoplayTimeout:2000,
                dots:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

            $('.ads_carousel-2').owlCarousel({
              loop:false,
              margin:20,
              nav:false,
              dots:true,
              items:3,
              responsive:{
                  0:{
                      items:1,
                      dots:true
                  },
                  480:{
                      items:2
                  },
                  600:{
                      items:2
                  },
                  1000:{
                      items:3
                  }
              }
          })
          }
        }
    });

    }
    //////////////////////Ajax Tab load//////////////////
  });