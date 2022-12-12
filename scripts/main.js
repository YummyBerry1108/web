var blog = document.getElementById("Blog");
var support = document.getElementById("support");
var zrush = document.getElementById("zrushSick");
var count = 0
blog.addEventListener("mouseover", function(){
    this.innerText = "ㄆㄊ的部落格"
    this.style.animationPlayState = "paused";
    document.getElementById("Berry").style.animationPlayState = "paused";
})
blog.addEventListener("mouseout",function(){
    this.innerText = "葡萄Berry's Blog"
    this.style.animationPlayState = "running";
    document.getElementById("Berry").style.animationPlayState = "running";
})

support.addEventListener("mouseover", function(){
    this.innerText = "支持億下"

})
support.addEventListener("mouseout",function(){
    this.innerText = "支持一下"
    
})

zrush.addEventListener("click", function(){
    count+=1
    if(count%2==1){
        this.src = "./image/shakehandcat-gif.gif"
        this.title = "ouo"
    }
    else if(count%2==0){
        this.src = "./image/zrushSick.jpg"
        this.title = "點看看"
    }
})
//-----------------click----------------------//
function toggle_info() {
    document.getElementById("profile-info").classList.toggle("invisible");
}
function load() {
    document.getElementById("loading").classList.toggle("invisible")
}
//------------------Bubble------------------// 
const wrapper = document.getElementById("bubble-wrapper")
const animateBubble = x => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    wrapper.appendChild(bubble);
    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX)
