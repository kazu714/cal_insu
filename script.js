let parent = document.getElementById("contents");
let count = 1
while (count < 11){
    //問題の定義
    let a = Math.floor(Math.random()*9+1)
    let b = Math.floor(Math.random()*9+1)
    

    //描画処理
    let div = document.createElement("div")
    div.setAttribute("class","flex1")
    parent.insertBefore(div,null)
    let li = document.createElement("li")
    li.setAttribute("class","mondai")

    li.innerHTML = `(${count})　x² + ${a+b}x + ${a*b}` //式

    div.insertBefore(li,null)


    let ans = document.createElement("p")
    ans.setAttribute("class","ans")
    ans.setAttribute("id",`${count}`)

    ans.innerHTML = `(x + ${a})(x + ${b})` //答え

    div.insertBefore(ans,null)
    count += 1
}


let i = 1

//答え表示
let obtn = document.getElementById("contents")
obtn.addEventListener("click", function(){
    if (i<11){
        let an = document.getElementById(`${i}`)
        console.log(i)
        an.style.display = "block"
        i += 1
    }
})

//次の問題へ
let nbtn = document.getElementById("nbtn")
nbtn.addEventListener("click", function(){
    parent.innerHTML = ""
    count = 1
    i = 1
    while (count < 11){
        //問題の定義
        let a = Math.floor(Math.random()*9+1)
        let b = Math.floor(Math.random()*9+1)
        
    
        //描画処理
        let div = document.createElement("div")
        div.setAttribute("class","flex1")
        parent.insertBefore(div,null)
        let li = document.createElement("li")
        li.setAttribute("class","mondai")
    
        li.innerHTML = `(${count})　x² + ${a+b}x + ${a*b}` //式
    
        div.insertBefore(li,null)
    
    
        let ans = document.createElement("p")
        ans.setAttribute("class","ans")
        ans.setAttribute("id",`${count}`)
    
        ans.innerHTML = `(x + ${a})(x + ${b})` //答え
    
        div.insertBefore(ans,null)
        count += 1
    }
})