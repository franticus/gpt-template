$(document).ready(function() {


if($('.headBox .row').hasClass('flex-column')){
    $('.logtip--box').css('justify-content','center');
    $('.headBox h3').css('text-align','center');
}

let myHeightStyle = $('.about-us-img').prop('naturalHeight');
let myWidthStyle = $('.about-us-img').prop('naturalWidth');

if(myHeightStyle == myWidthStyle){
    if(myWidthStyle > 600){
        $('.about-us-img').css({'width':'50%'});
    }
}
if(myHeightStyle > myWidthStyle){
    if(myHeightStyle < 2000 && myHeightStyle > 700){
        $('.about-us-img').css({'width':'25%'});
    }
    if(myHeightStyle < 700 && myHeightStyle > 500){
        $('.about-us-img"').css({'width':'50%'});
    }
}
if(myHeightStyle < myWidthStyle){
    if(myWidthStyle < 600){
        $('.about-us-img').css({'width':'500px'});
    }
}

});
