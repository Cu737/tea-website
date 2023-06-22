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
Vue.createApp({
    data() {
        return {
            items:[
                {a1:"../Solution1/history.html",src1:"../Solution1/image/shennong1.png",h1:"神农不倦尝百草，因缘际会得遇茶",p1:"唐．陆羽《茶经》：“茶之为饮，发乎神农氏。”，在中国的文化发展史上，往往是把一切与农业、与植物相关的事物起源最终都归结于神农氏。"},
                {a1:"../Solution1/history.html",src1:"../Solution1/image/xiashangzhou1.png",h1:"夏商始待茶以药，东西两周立茶道",p1:"茶最早开始有文字记载，是在商朝，为茶的原始利用期，在商周的时候中国饮茶主要以咀嚼鲜叶、煮成菜羹、熬煮茶水三种使用方法。西周时期，这种饮食茶叶的习惯得到了继承和发展，茶叶的苦中有甜，苦后回甘，令人回味，广泛受到普通人和王公贵族的喜爱，因此周朝就有了最早的人工栽培的茶园。"},
                {a1:"../Solution1/history.html",src1:"../Solution1/image/qinhanweijin1.png",h1:"秦汉茶饼煮可食，魏晋茶入百姓家",p1:"秦人喝茶也没有那些精细的茶道茶礼，也不用那些小杯小盏的精致茶具，大碗，大杯，大口喝茶，这是秦人的粗狂和豪爽。汉代人们对茶叶的药用功能已经有了进一步认识，使茶进入了另一个发展阶段。相应的，茶煮饮的方法也与之前不同：“欲煮茗饮，先炙令色赤，捣末，置瓷器中，以汤浇覆之，用葱姜、橘子芼之”"},
                {a1:"../Solution1/history.html",src1:"../Solution1/image/tangsong1.png",h1:"隋唐繁盛风俗成，两宋琐碎浮华生",p1:"隋唐时，茶叶多加工成饼茶。饮用时，加调味品烹煮汤饮。此外，开始使用专门的烹茶器具， 饮茶的方式也发生了显著变化，由之前的粗放式转为细煎慢品式。到了宋代，茶文化继续发展深化，形成了特有的文化品位。此外，宋代的茶饮活动从贡茶开始，又衍生出“绣茶”“斗茶”“分茶”等娱乐方式。"},
                {a1:"../Solution1/history.html",src1:"../Solution1/image/yuanmingqing1.png",h1:"元朝曲折茶可饮，明清俗雅两分难",p1:" 元朝建立后，蒙古人将自身的族群风俗和饮食习惯带到中原，茶和茶具进入到了返璞归真、删繁就简的境界。同时“泡茶法”开始被贵族和文人阶层所提倡并流行，成为了当时主流的饮茶方式。明清时，茶已出现蒸青、炒青、烘青等品类，茶的饮用已改成“摄泡祛”。晚明到清初，精细的茶文化再次出现，制茶、烹饮虽未回到宋人的紧琐，但茶风趋向纤弱。"}
            ]
        }
    }
}
).mount('#tea_history_id')
Vue.createApp({
    data() {
        return {
            items:[
                {a1:"../commodity/commodity_one.html",src1:"../commodity/commodity_picture/one.jpg",p1:"茶类：绿杨春",p2:"价格：¥300/500g",p3:"点击了解详情"},
                {a1:"../commodity/commodity_one.html",src1:"../commodity/commodity_picture/two.jpg",p1:"茶类：蜜兰香、肉桂香",p2:"价格：¥120/套",p3:"点击了解详情"},
                {a1:"../commodity/commodity_one.html",src1:"../commodity/commodity_picture/three.jpg",p1:"茶类：芝兰香、玉兰香",p2:"价格：¥3500/500g",p3:"点击了解详情"},
                {a1:"../commodity/commodity_one.html",src1:"../commodity/commodity_picture/four.jpg",p1:"茶类：洞庭碧螺春",p2:"价格：¥168/500g",p3:" 点击了解详情"},
                {a1:"../commodity/commodity_one.html",src1:"../commodity/commodity_picture/five.jpg",p1:"茶类：安吉白茶",p2:" 价格：¥500/500g",p3:"点击了解详情"},
                {a1:"../commodity/commodity_one.html",src1:"../commodity/commodity_picture/six.jpg",p1:"茶类：武夷肉桂",p2:" 价格：¥20/20g",p3:"点击了解详情"}
            ]
        }
    }
}
).mount('#tea_buy_id')
