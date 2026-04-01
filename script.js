const songData = [
    {
        category: "一字",
        songs: ["听", "谁", "爱", "你", "核", "bliss"]
    },
    {
        category: "二字",
        songs: ["晚风", "勇气", "渡口", "赤伶", "宁夏", "心事", "云河", "棋子", "偿还", "海韵", "十年", "深夜", "是否", "哭砂", "遇见", "雪人", "听海", "味道", "泪海", "传奇", "飘摇", "大鱼", "小小", "年轮", "画你", "暗香", "画心", "如愿", "笑纳", "可能", "舍得", "天际", "闪鸟", "冰雨", "暖暖", "秋风", "太多", "伤痕", "矜持", "流年", "人间", "心动", "约定", "退后", "怎样", "短发", "红豆", "好听"]
    },
    {
        category: "三字",
        songs: ["忘不了", "王招君", "别亦难", "橄榄树", "几多愁", "我要你", "壁上观", "原乡人", "下一秒", "勇气颂", "女人花", "水星记", "甜蜜蜜", "胆小鬼", "水中花", "小美满", "再回首", "追光者", "从前慢", "萱草花", "了不情", "红颜旧", "童话镇"]
    },
    {
        category: "四字",
        songs: ["扬州姑娘", "路过人间", "词不达意", "快乐星期", "满是梦想", "哆啦A梦", "匆匆那年", "滚滚红尘", "你的眼睛", "时间煮雨", "小村之恋", "张三的歌", "后会无期", "千言万语", "独上西楼", "故乡的云", "逃之不情", "又见炊烟", "小城故事", "美丽心情", "在水一方", "你怎么说", "相见恨晚", "爱的代价", "茶花开了", "错过时空", "夜夜夜夜", "漠河舞厅", "金玉良缘", "梦里水乡", "最后一页", "因为爱情", "好久不见", "亲密爱人", "心如刀割", "东北民谣", "快乐女孩", "海角天涯", "我不想说", "知否知否", "你怎么说", "爱的箴言", "扬州小调", "掌声响起"]
    },
    {
        category: "五字",
        songs: ["惜别的海岸", "给我一个吻", "但愿人长久", "我只在乎你", "外面的世界", "至少还有你", "光阴的故事", "再回首时", "雨中唱情歌", "可惜不是你", "闪亮的日子", "贝加尔湖畔", "但愿人长久", "梨花又开放", "突然好想你", "亲爱的小孩", "月半小夜曲", "难得有情人", "城里的月光", "盛夏的果实", "没那么简单", "我会好好的", "绿岛小夜曲", "你是我的家", "我不曾忘记", "亲爱的你啊", "今夜茉莉开"]
    },
    {
        category: "六字",
        songs: ["当爱已成往事", "雪落下的声音", "爱一个好难", "阿拉斯加海湾", "现代爱情故事", "被遗忘的时光", "世界赠予我的", "往事只能回味", "恰似你的温柔", "忽然苍老了心", "乌兰巴托的夜", "小雨中的回忆", "风含情水含笑", "永不失联的爱"]
    },
    {
        category: "七字",
        songs: ["春风吻上我的脸", "月亮代表我的心", "漂洋过海来看你", "明天我要嫁给你", "为你我受冷风吹", "爱要怎么说出口", "野百合也有春天", "让我欢喜让我忧", "那拉提的养蜂女", "这世界那么多人", "原来你也在这里", "烟花三月下扬州"]
    },
    {
        category: "八字",
        songs: ["路边的野花不要采", "你一定要是个孩子", "有多少爱可以重来", "其实你不懂我的心", "明天你是否依然爱我", "我等到花儿也谢了"]
    },
    {
        category: "老上海风",
        songs: ["三年", "夜来香", "夜上海", "四季歌", "月圆花好", "凤凰于飞", "香格里拉", "天涯歌女", "明月千里寄相思", "玫瑰玫瑰我爱你"]
    },
    {
        category: "粤语",
        songs: ["飘雪", "朋友", "晚星", "珍重", "随缘", "祝福", "如风", "最爱", "暧昧", "念亲恩", "慕容雪", "上海滩", "爱在深秋", "笑看风云", "一生所爱", "似水流年", "千千阙歌", "寂寞的风", "城市足印", "秋去秋来", "一生何求", "夕阳醉了", "风的季节", "顺流逆流", "嘉宾望岗", "执迷不悔", "逝去的诺言", "偏偏喜欢你", "真的爱着你", "漫步人生路", "今宵多珍重", "似是故人来", "只有情永在", "人生何处不相逢", "容易受伤的女人", "万水千山总是情", "只想一生跟你走"]
    }
];

const songSections = document.getElementById('songSections');
const searchInput = document.getElementById('searchInput');

// Function to render categories and songs
function renderSongs(filter = '') {
    songSections.innerHTML = '';
    
    songData.forEach(group => {
        const filteredSongs = group.songs.filter(song => 
            song.toLowerCase().includes(filter.toLowerCase())
        );
        
        if (filteredSongs.length > 0) {
            const section = document.createElement('div');
            section.className = 'category-group';
            
            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = group.category;
            
            const list = document.createElement('ul');
            list.className = 'song-list';
            
            filteredSongs.forEach(song => {
                const item = document.createElement('li');
                item.className = 'song-item';
                
                // Highlight matching text if search input is not empty
                if (filter) {
                    const regex = new RegExp(`(${filter})`, 'gi');
                    item.innerHTML = song.replace(regex, `<span style="color: var(--gold-light); font-weight: bold;">$1</span>`);
                } else {
                    item.textContent = song;
                }
                
                list.appendChild(item);
            });
            
            section.appendChild(title);
            section.appendChild(list);
            songSections.appendChild(section);
        }
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    renderSongs(e.target.value);
});

// Initial render
renderSongs();
