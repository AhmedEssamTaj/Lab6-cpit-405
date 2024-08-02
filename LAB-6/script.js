const likeBtn = document.getElementById("likeBtn");
const disLikeBtn = document.getElementById("disLikeBtn");

const initLikes = 0; 
const initDisLikes = 0;

let likesCount = initLikes;
let disLikeCount = initDisLikes;

likeBtn.innerText = "👍 " + likesCount;
disLikeBtn.innerText = "👎 " + disLikeCount; 

function handleLike(){
    likesCount ++;
    likeBtn.innerText = "👍 " + likesCount;
    disableLikeButton();
    disLikeBtn.innerText = "👎 " + disLikeCount; 
    setCookies("liked");
}
function handleDisLike(){
    disLikeCount ++;
    disLikeBtn.innerText = "👎 " + disLikeCount;  
    disableDisLikeButton();
    likeBtn.innerText = "👍 " + likesCount;
    setCookies("disliked");
}
function disableLikeButton(){
    if(disLikeCount != initDisLikes){
        disLikeCount --;
    }
    likeBtn.disabled = true;
    disLikeBtn.disabled = false;
}
function disableDisLikeButton(){
    if(likesCount != initLikes){
        likesCount --;
    }
    disLikeBtn.disabled = true;
    likeBtn.disabled = false;
}
function setCookies(state){ 
    var expirationTime = new Date();
    expirationTime.setSeconds(expirationTime.getSeconds() + 10); 
    document.cookie = 'voted=' + state + ';expires=' + expirationTime.toUTCString() + '; path:/;'; 
}

window.onload = function(){
    
    if (document.cookie && document.cookie.indexOf('voted') > -1 && document.cookie.indexOf("liked") > -1) {
        disableLikeButton();
    }
    
    if (document.cookie && document.cookie.indexOf('voted') > -1 && document.cookie.indexOf("disliked") > -1) {
        disableDisLikeButton();
    }
}