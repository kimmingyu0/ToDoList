const clock=document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
 
    clock.innerText=(`${hours}:${minutes}:${seconds}`)
    
    //date.getHours() -> 자료형 num
    //.padStrat(Maxlength,"추가할 문자") -> string형 길이정하고
    //앞에 추가할 문자 지정
    
}
getClock();

setInterval(getClock,1000)