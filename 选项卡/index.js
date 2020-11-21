window.onload = function (ev) {
    // 1. 获取标签
    var allLis = $('header').getElementsByTagName('li');
    var allDom = $('content').getElementsByClassName('dom');

    // 2. 遍历监听
    // for(var i=0; i<allLis.length; i++) {
    //     // var li = allLis[i];
    //     (function (i) {
    //         allLis[i].onmouseover = function (ev1) {
    //             // 1. 清除同级别的选中样式类
    //             for (var j = 0; j < allLis.length; j++) {
    //                 allLis[j].className = '';
    //                 allDom[j].style.display = 'none';
    //             }

    //             // 2. 设置当前的li标签选中样式类
    //             this.className = 'selected';
    //             allDom[i].style.display = 'blocked';
    //         }
    //     })(i)
    // }

    for (var i = 0; i < allLis.length; i++) {
        // var li = allLis[i];
        allLis[i].index = i;
        allLis[i].onmouseover = function (ev1) {
            // 1. 清除同级别的选中样式类
            for (var j = 0; j < allLis.length; j++) {
                allLis[j].className = '';
                allDom[j].style.display = 'none';
            }
            // 2. 设置当前的li标签选中样式类
            this.className = 'selected';
            allDom[this.index].style.display = 'block';
        }
    }
};

function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}