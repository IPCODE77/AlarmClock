console.log('Alaram clock');


var audio = new Audio("audio.mp3");
function sound() {
    audio.play();
}
function pause() {
    audio.pause();
}
function gettime() {
    let time = new Date;
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let session;
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (hour >= 12) {
        session = "PM";
    }
    else {
        session = "AM"
    }

    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour == 0) {
        hour = 12;
    }
    let clock = document.getElementById("time").innerHTML = `${hour}:${minute}:${second} ${session}`;

    let day = time.toDateString();
    let today = document.getElementById("day").innerHTML = day;


}

gettime();
setInterval(gettime, 1000);

let setbutton = document.getElementById("setbtn");
setbutton.addEventListener("click", setalarm);
function setalarm() {
    let currentdate = new Date();

    let inputhour = document.getElementById("inputhour").value;
    let inputminute = document.getElementById("inputminute").value;
    let title = document.getElementById("alarmtitle").value;

    let userdate = new Date(`${currentdate.getFullYear()}/${currentdate.getMonth() + 1}/${currentdate.getDate()} ${inputhour}:${inputminute}:00`)

    let alarm = userdate - currentdate;
    setTimeout(() => {
        console.log('ringing');
        sound()
    }, alarm);
    setTimeout(() => {
        pause();
    }, 3000);
    let alarmtitlealert = document.getElementById("alert1");
    // console.log(alarmtitlealert);
    alarmtitlealert.innerHTML = ` <div class="alert alert-info alert-dismissible fade show" role="alert">
    <strong>Message:</strong> Alarm Set Successfully.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

    setTimeout(() => {
        alarmtitlealert.innerHTML = "";
    }, 2000);

    console.log(alarm);



}

let closebtn = document.getElementById("close");
closebtn.addEventListener("click", getalarm);
function getalarm() {
    console.log("click");

    function g() {

        let currenttime = new Date();

        let hour = document.getElementById("inputhour").value;
        let minute = document.getElementById("inputminute").value;
        let title = document.getElementById("alarmtitle").value;
        // console.log(title);

        let mydate = new Date(`${currenttime.getFullYear()}/${currenttime.getMonth() + 1}/${currenttime.getDate()} ${hour}:${minute}`)
        // console.log(mydate);

        let alarmtime = mydate - currenttime;


        let alerthour = (alarmtime / (1000 * 60 * 60)).toFixed(0);
        let alertsecond = (alarmtime / 1000).toFixed(0);

        let alertminute = (alarmtime / (1000 * 60)).toFixed(0);
        let msgg = document.getElementById("alert2");
        msgg.innerHTML = ` <div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>${title}</strong>Time left to ring  Hour:${alerthour},minute:${alertminute},second:${alertsecond}. 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
        if (alertsecond<=0) {

                msgg.innerHTML = "";
        }
    }
    setInterval(g, 1000);
}

