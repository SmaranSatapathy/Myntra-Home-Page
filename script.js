let currIdx=0
// console.log(document.getElementById("timer").innerHTML)

function goNext(){
    currIdx=(currIdx+1)%document.querySelectorAll('.promo').length
    display(currIdx)
}

function goPrev(){
    currIdx=(currIdx-1+document.querySelectorAll('.promo').length)%document.querySelectorAll('.promo').length
    display(currIdx)
}

function display(idx){
    let promos=document.querySelector('.promos')
    let promoWidth=document.querySelector('.promo').offsetWidth
    let position=-idx*promoWidth
    promos.style.transform=`translateX(${position}px)`
    currIdx=idx
}

// function updateTime(){
//     let x=new Date()
//     hours=x.getHours()
//     mins=x.getMinutes()
//     secs=x.getSeconds()

//    let time= (hours<10?'0':'')+hours+":"+(mins<10?'0':'')+mins+":"+(secs<10?'0':'')+secs
//  document.getElementById('timer').innerHTML="Sale ends in "+time
// }

// updateTime();

// setInterval(() => {
//     updateTime()
// }, 1000);

// TESTING

let hrs=2
let minutes=59
let seconds=59

let x=new Date()
x.setHours(hrs)
x.setMinutes(minutes)
x.setSeconds(seconds)

function reduceTime()
{
    let time=(hrs<10?'0':'')+hrs+" hrs"+":"+(minutes<10?'0':'')+minutes+" mins"+":"+(seconds<10?'0':'')+(seconds)+" secs"
    document.getElementById('timer').innerHTML="Sale ends in "+ time
    seconds--
    if(seconds==-1)
    {
        minutes--
        seconds=59
        if(minutes==-1)
        {
            hours--
            minutes=59
        }
    }
}

setInterval(reduceTime,1000)