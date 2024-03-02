let intervalId;
function backCol(){
    intervalId=setInterval(colChange,1000)
}

function colChange(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
}
document.write(backCol())
// SORU- 7 adet renk belirle ve bu 7 renk 0.5 sn de değiştir

// let intervalId;
// function bgColor(){
//     intervalId=setInterval(changeCol,500)
// }

// function changeCol(){
//     let renk1=Math.floor(Math.random())
//     document.body.style.backgroundColor=renk1
// }