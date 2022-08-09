const selectMenu = document.querySelectorAll("select")
const currentTime = document.querySelector("h1")
const setAlarmBtn = document.querySelector("button")
content = document.querySelector('.content')

let alarmTime;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? '0' + i : i;
    let options = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", options);
}

for (let i = 59; i > 0; i--) {
    i = i < 10 ? '0' + i : i;
    let options = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", options);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM"
    let options = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", options);
}

setInterval(() => {
    //getting hours, mins, secs
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM"

    if(h >= 12) {
        h = h - 12;
        ampm = "PM"
    }
    //if hour value is 0, set this value to 12
    h = h  == 0 ? h = 12 : h ;
    //adding 0 before hr , min , sec if this value is less than 10
    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;
    s = s < 10 ? "0" + s : s ;

    // console.log(`${h}:${m}:${s} ${ampm}`);

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    console.log(alarmTime);
    if(`${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}` == `${h}:${m} ${ampm}`) {
        console.log(`${h}:${m} ${ampm}`);
    }
}, 1000);

    function setAlarm() {
        //getting hour , min , ampm select tag value
        let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;

        if(time.includes("Hour") || time.includes("Minutes") || time.includes("AM/PM")) {
            return alert('Please, Select a Valid Time to set Alarm!')
        }
        console.log(time);
        alarmTime = time;

        content.classList.add('disable');
        setAlarmBtn.innerText = "Clear Alarm";


    }


setAlarmBtn.addEventListener('click', setAlarm);