$(function(){
    function isMobile() {
        if (navigator.userAgent.indexOf('Mobile') != -1) {
            return true;
        } else {
            return false;
        }
    }if(!isMobile()){
        
    }else{
        $('.gnb_btn').on('click', function(){
            $('.gnb, .nav_wrap').toggleClass('open');
            $('.btn_wrap > button, .btn_wrap > button > span').toggleClass('active');
        });
    }
});