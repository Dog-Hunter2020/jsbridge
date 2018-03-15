


//游戏逻辑
//获取游戏名称
function getGameName(gameId) {
    if(gameId){
        registerHandler("getName",2003,function (name) {
            document.getElementById("demo").innerHTML=name;
        });

    }
}
getGameName(2003);