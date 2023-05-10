Vue.createApp({
    data() {
        return {
            text: "hello",
            message: "helloo",
            judge_switch:true,
            facade_item:[
                {src_img:"../image/tea_kind2.jpg",img_text:"红茶"},
                {src_img:"../image/tea_kind1.jpg",img_text:"绿茶"},
                {src_img:"../image/tea_kind4.jpg",img_text:"花茶"},
                {src_img:"../image/tea_kind5.jpg",img_text:"普洱茶"},
                {src_img:"../image/tea_kind3.jpg",img_text:"白茶"},
                {src_img:"../image/tea_kind6.jpg",img_text:"黄茶"},
            ],
            word_itme:[
                {href:"",content:"铁观音",content:"龙井",content:"白茶",content:"碧螺春",}
            ]
        }
    },
    methods: {
        seenter:function(){
            
        }
}
}).mount('#tea_kind_id')