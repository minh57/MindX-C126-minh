// bài tập 1
const hello = document.getElementById("hello")

   
hello.addEventListener("click",function(){
    const hi = document.getElementById("hi")
    const arr = ["red","blue","green","yellow"]
    let x = Math.floor(Math.random()*arr.length)
    const color = arr[x]
    hi.style.backgroundColor = color
})

// bài tập 2
const btn = document.getElementById("btn")
btn.onclick = function(){
    let x = Number(btn.textContent)
    btn.innerHTML = x+1
}