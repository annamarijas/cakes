

function currentTime(){
    let date = new Date();
    console.log(date);
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = plusZero(hour);
    min = plusZero(min);
    sec = plusZero(sec);
    console.log(hour,min,sec);
    document.getElementById('time').innerHTML = hour + ':' + min + ':' + sec;
    setTimeout(currentTime,1000)
}
currentTime();

function plusZero(number){

    if (number<10) 
    {
        return '0'+number;
    }
    else
    {
       return number;
    }

}