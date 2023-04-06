var blog = document.getElementById("Blog");
// var support = document.getElementById("support");
// var about = document.getElementById("about");
// var artical = document.getElementById("artical");
var zrush = document.getElementById("zrushSick");
var count = 0;

blog.addEventListener("mouseover", function(){
    this.innerText = "ㄆㄊ的部落格"
})
blog.addEventListener("mouseout",function(){
    this.innerText = "Berry Blog"
})

// support.addEventListener("mouseover", function(){
//     this.innerText = "支持億下"
// })
// support.addEventListener("mouseout",function(){
//     this.innerText = "支持一下"
// })

// about.addEventListener("mouseover", function(){
//     this.innerText = "還沒做"
// })
// about.addEventListener("mouseout",function(){
//     this.innerText = "作品集"
// })

// artical.addEventListener("mouseover", function(){
//     this.innerText = "沒有"
// })
// artical.addEventListener("mouseout",function(){
//     this.innerText = "文章"
// })
//-----------------click----------------------//
function toggle_info() {
    document.getElementById("profile-info").classList.toggle("invisible");
}
function load() {
    document.getElementById("loading").classList.toggle("invisible")
}

