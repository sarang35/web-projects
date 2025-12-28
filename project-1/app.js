const bodyel=document.querySelector("body")


bodyel.addEventListener('mousemove',(e)=>{
    const xPos=e.offsetX;
    const yPos=e.offsetY;
    const spanel=document.createElement("span");
    spanel.style.left=xPos +"px"
    spanel.style.top=yPos +"px"
    const Size= Math.random()*100
    spanel.style.height=Size+"px"
    spanel.style.width=Size+"px"
    bodyel.appendChild(spanel);
    setTimeout(()=>{
        spanel.remove()
    },3000)
})