var blog = document.getElementById("Blog");
var about = document.getElementById("about");
var support = document.getElementById("support");
var zrush = document.getElementById("zrushSick");
var count = 0



blog.addEventListener("mouseover", function(){
    this.innerText = "ㄆㄊ的部落格"
})
blog.addEventListener("mouseout",function(){
    this.innerText = "葡萄Berry's Blog"
    
})

about.addEventListener("mouseover", function(){
    this.innerText = "沒有作品qwq"

})
about.addEventListener("mouseout",function(){
    this.innerText = "作品集"
    
})

support.addEventListener("mouseover", function(){
    this.innerText = "支持億下"

})
support.addEventListener("mouseout",function(){
    this.innerText = "支持一下"
    
})


//------------------click----------------------//
function click() {
    const btn = document.getElementById("btn")
    music.classList.toggle("invisible")
}

//-------------------------------------------- //
zrush.addEventListener("click", function(){
    count+=1
    if(count%2==1){
        this.src = "shakehandcat-gif.gif"
        this.title = "喵喵~"
    }
    else if(count%2==0){
        this.src = "zrushSick.jpg"
        this.title = "點我啦~"
    }
})

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
