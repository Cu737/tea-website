Vue.createApp({
    data() {
        return {
            text: "hello",
            message: "helloo",
            facade_item:[
                {src_img:"../image/tea_kind2.jpg",img_text:"红茶"},
                {src_img:"../image/tea_kind1.jpg",img_text:"绿茶"},
                {src_img:"../image/tea_kind4.jpg",img_text:"花茶"},
                {src_img:"../image/tea_kind5.jpg",img_text:"普洱茶"},
                {src_img:"../image/tea_kind3.jpg",img_text:"白茶"},
                {src_img:"../image/tea_kind6.jpg",img_text:"黄茶"},
            ]
        }
    }
}).mount('#tea_kind_id')