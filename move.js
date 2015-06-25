//<html><head><title>MOVE</title></head><body><script>
    
var MK = "http://cafe.naver.com/minecraftpe.cafe?iframe_url=/ArticleList.nhn%3Fsearch.clubid=23683173%26search.menuid=30%26search.boardtype=L";
var MV = "http://cafe.naver.com/ArticleMove.nhn?m=result&clubid=23683173&menuid=30&targetmenuid=147&articleid=";

var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

setTimeout(function(){
    jQuery.noConflict();
    console.log("jQuery loaded");
    
    start();
}, 1000);

function start(){
    var win = window.open(MK);
    win.name = "__CHALK__";
    
    console.log("window open");
    
    setTimeout(function(){
        var articles = jQuery(win.document).contents().find("#cafe_main").contents().find(".m-tcol-c.list-count").map(function(){
            return jQuery(this).text();
        }).get().join(",");
        
        console.log("Articles: " + articles);
        window.open(MV + articles, "__CHALK__");
    }, 5000);
}

//</script></body></html>
