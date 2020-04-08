/*
<section class="card">
          <header class="card__header">
            <div class="header__number">
              <span>1</span>
            </div>
            <h2 class="header__title">
              <span class="title__date">2019-03-09</span>
              <span class="title__sub">副标题</span>
            </h2>
          </header>
          <article class="card__article">
            <p>今天是个好日子</p>
            <p>完成了时间线，感觉还可以，部分优化与适配留到之后处理。</p>
          </article>
        </section>

*/

var list = [
    { date: '2013-09-01', title: '编程启蒙', contents: ['内江师范学院','因受电视剧影响，痴迷电脑程序，而选择了软件工程专业。'] },
    { date: '2014-10-09', title: '接触Java', contents: ['学习Java程序设计、Java web开发。'] },
    { date: '2015-09-04', title: '搭建博客', contents: ['在CSDN上建立了自己的第一个博客。'] },
    { date: '2019-07-01', title: '搭建Hexo博客', contents: ['由于CSDN博客的商业化越来越严重，同时自己日常也喜欢在github上保存自己的学习笔记，于是转而使用hexo搭建博客。'] }
];

var cardsContent = '';
// 遍历list
for (var i = 0; i < list.length; i++) {
    var item = list[i];
    cardsContent = cardsContent + '<section class="card">';
    cardsContent = cardsContent + '<header class="card__header">';
    cardsContent = cardsContent + '<div class="header__number"><span>' + (i + 1) + '</span></div>';
    cardsContent = cardsContent + '<h2 class="header__title"><span class="title__date">' + item.date + '</span><span class="title__sub">' + item.title + '</span></h2>';
    cardsContent = cardsContent + '</header>';
    cardsContent = cardsContent + '<article class="card__article">';
    var contents = item.contents;
    if (contents && contents.length > 0) {
        for (var j = 0; j < contents.length; j++) {
            var cont = contents[j];
            cardsContent = cardsContent + '<p>' + cont + '</p>';
        }
    }
    cardsContent = cardsContent + '</article>';
    cardsContent = cardsContent + '</section>';
}


var cardsId = 'mytimelineCards';
var cardsBody = document.getElementById(cardsId);
cardsBody.innerHTML = cardsContent;