$(()=>{
    $.get("data/getfestival.php").then(data=>{
        "use strict";
        var html="";
        for(var item of data){
            html+=`<img src="item.pic
" alt="">`;
        }
        var $img=$(".inner_picture");
        $img.html(html);
    })
})