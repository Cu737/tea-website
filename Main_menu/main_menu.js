Vue.createApp({
    data() {
        return {
            text: "hello",
            message: "helloo",
            judge_switch:[true,true,true,true,true,true],
            facade_item:[
                {src_img:"../image/tea_kind2.jpg",img_text:"红茶"},
                {src_img:"../image/tea_kind1.jpg",img_text:"绿茶"},
                {src_img:"../image/tea_kind4.jpg",img_text:"花茶"},
                {src_img:"../image/tea_kind5.jpg",img_text:"普洱茶"},
                {src_img:"../image/tea_kind3.jpg",img_text:"白茶"},
                {src_img:"../image/tea_kind6.jpg",img_text:"黄茶"},
            ],
            word_items:[
                {href:"",tea_content:["铁观音","龙井","白茶","碧螺春"]},
                {href:"",tea_content:["铁观音","龙井","白茶","碧螺春"]},
                {href:"",tea_content:["铁观音","龙井","白茶","碧螺春"]},
                {href:"",tea_content:["铁观音","龙井","白茶","碧螺春"]},
                {href:"",tea_content:["铁观音","龙井","白茶","碧螺春"]},
                {href:"",tea_content:["铁观音","龙井","白茶","碧螺春"]}
                // {href:"",tea_content:"铁观音",tea_content1:"龙井",tea_content2:"白茶",tea_content3:"碧螺春"}
            ]
        }
    },
    methods: {
        seenter:function(index){
            this.judge_switch[index]=false;
        },
        leaver:function(index){
            this.judge_switch[index]=true;
        }
        }
}
).mount('#tea_kind_id')