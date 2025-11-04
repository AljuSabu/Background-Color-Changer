const btn = document.querySelector("#btn")

let randomColor =()=>{
    let val = "123456789ABCDEF"
    let hash = "#"
    for(i=0;i<6;i++){
    hash = hash + val[Math.floor(Math.random()*val.length)]
}
return hash
}

btn.addEventListener("click",()=>{
    document.body.style.backgroundColor = randomColor()
    btn.innerHTML = randomColor()
    
})