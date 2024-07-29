<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
var $ = jQuery;
//Image One
var ImgOne = "url(https://kitpapa.net/etricks/wp-content/uploads/2023/05/Cardio-Jim-Fahad-Digital.jpg)";
//Image Two
var ImgTwo = "url(https://kitpapa.net/etricks/wp-content/uploads/2023/05/Lifting-Jim-Fahad-Digital.jpg)";
    $(document).ready(function(){
        
    $('#card-one').hover(function(){
        $('#main-parent').css("background-image", ImgOne)
    }, function(){
        $('#main-parent').css("background-image", "")
    });
    
    $('#card-two').hover(function(){
        $('#main-parent').css("background-image", ImgTwo)
    }, function(){
        $('#main-parent').css("background-image", "")
    })
    
    
    })


/****** hedar change background ******/
jQuery(document).ready(function(){
jQuery(window).scroll(function() {
var scroll = jQuery(window).scrollTop();
if (scroll >= 70) {
jQuery("#header").addClass("pa-fixed-header");
}
else{
jQuery("#header").removeClass("pa-fixed-header");
}
});
});
