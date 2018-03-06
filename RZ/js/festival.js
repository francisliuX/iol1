$(()=>{
    $.get("data/getfestival.php").then(data=>{
        "use strict";
        var html="";
        console.log(1)
        // for(var item of data){
        //     console.log(data.length)
        //     console.log(item.pic)
        //     html+=`<a href="" target="_blank" class="inner_picture">
        //                         <img src="${item.pic}" alt="">
        //                     </a>`;
        // }
        for(var i=0;i<data.length;i++){
            // console.log(data)
            console.log(data[0])
            // console.log(data[i].pic)
            html+=` <li class="inner_item">
                        <a href="" target="_blank" class="inner_picture">
                                <img src="${data[i].pic}" alt="">
                            </a>
                     </li>`;
        }
        console.log(2)
        var $img=$(".inner_list");
        console.log(3);
        $img.html(html);
    })
})