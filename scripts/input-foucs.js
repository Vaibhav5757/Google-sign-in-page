function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function(){
    $(".input-box .input-text-box").focus(function(){
        $("fieldset.input-box").removeClass("out-of-focus").addClass("in-focus");
    });
    $(".input-box .input-text-box").blur(function(){
        $("fieldset.input-box").removeClass("in-focus").addClass("out-of-focus");
    });
    $(".next-button").click(function(){
        if(isEmail($(".input-box .input-text-box").val())){
            $(".error").addClass("hidden");
            $(".input-box").removeClass("invalid");
            alert("Success")
        }else{
            $(".error").removeClass("hidden");
            $(".input-box").addClass("invalid");
        }
    });
});