var ARTICLE_ID = prompt("작업을 시작할 메모글의 ID를 입력하세요");

var INTERVAL = 500; // 작업의 실행 간격 (1000 = 1초, 500 = 0.5초)
var STEP = 1;   // 매회 ID 감소량 (2일 경우 1000, 998, 996, 994... 이렇게 진행됩니다)

(function next(id, interval, step, win){
    id -= step;
    
    if (id <= 0) return;
    if(win != null) win.close();

    win = window.open("http://cafe.naver.com/minecraftpe/MemoDelete.nhn?clubid=23683173&menuid=85&page=1&articleid=" + id);
    console.log(id + " : " + new Date());

    setTimeout(function(){
        next(id, interval, step, win);
    }, interval);
})(ARTICLE_ID, INTERVAL, STEP, null);
