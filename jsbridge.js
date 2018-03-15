
//发送网络协议
function registerHandler(method,data,callback) {
    if(method === "getName" && data == 2003){
        callback("咕咚大作战");
    }
    let callBackid = callback;
    //通过url发送请求 jsbridge://cmgame/method?paras:callbackId
    let url = "jsbridge://cmgame/"+method+"?"+data+":"+callBackid;
    document.location = url;
}