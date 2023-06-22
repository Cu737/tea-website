Vue.createApp({
    data() {
        return {
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
                {href:["../classify/dajiling.html","../classify/xiaozhong.html","../classify/xilan.html","../classify/Qihong.html"],tea_content:["大吉岭茶","小种红茶","锡兰高地红茶","祁门红茶"]},
                {href:["../classify/Biluochun.html","../classify/Longjing.html","../classify/Mengding.html","../classify/Tieguanyin.html"],tea_content:["碧螺春","龙井","蒙顶甘露","铁观音"]},
                {href:["../classify/Baimudan.html","../classify/jinzhanhua.html","../classify/Meigui.html","../classify/Muolihua.html"],tea_content:["白牡丹茶","金盏花茶","玫瑰花茶","茉莉花茶"]},
                {href:["../classify/Jinya.html","../classify/San.html","../classify/Tuo.html","../classify/Zhuan.html"],tea_content:["紧压茶","普洱散茶","普洱沱茶","普洱茶砖"]},
                {href:["../classify/Baihaoyinzhen.html","../classify/Gongmei.html","../classify/Shoumei.html","../classify/Wuwangwo.html"],tea_content:["白毫银针","贡眉","寿眉","福鼎白茶"]},
                {href:["../classify/beigangmaojian.html","../classify/huoshanhuangya.html","../classify/Yaan.html","../classify/Yuanan.html"],tea_content:["北港毛尖","霍山黄芽","雅安黄茶","远安黄茶"]}
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