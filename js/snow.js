
class snow {
    constructor(obj){
        $(obj.el).css({"left":Math.random()*obj.bd.clientWidth+"px"}).animate({
            "left":Math.random()*obj.bd.clientWidth+"px",
            "top":obj.bd.clientHeight+"px"
        },Math.random()*4000+1000);
        this.snowLoop(obj);
    }
    snowLoop(obj){
        setInterval(function(){
            if( obj.el.offsetTop>=obj.bd.clientHeight){
                $(obj.el).css({"left":Math.random()*obj.clientWidth+"px","top":"0px"})
                $(obj.el).animate({
                    "left":Math.random()*obj.bd.clientWidth+"px",
                    "top":obj.bd.clientHeight+"px"
                },Math.random()*2000+2000);
            }
        },Math.random()*4000+2000)
    }
}