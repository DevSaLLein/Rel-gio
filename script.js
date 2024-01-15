let clock = document.querySelector('span');

const validaDate = (hour, min, seg) => {

    hour <= 9 ? hour = `0${hour}` : hour;
    min <= 9 ? min = `0${min}` : min;
    seg <= 9 ? seg = `0${seg}` : seg;

    let clockDate = `${hour}:${min}:${seg}`

    return clockDate;
}


setInterval(() => {

    let dateNow = new Date();
    let hourNow = dateNow.getHours();
    let minutesNow = dateNow.getMinutes();
    let secondsNow = dateNow.getSeconds();

    let clockDate = validaDate(hourNow, minutesNow, secondsNow);

    clock.innerHTML = clockDate;
}, 1000);


let switchButton = document.querySelector('button');

const toggleTheme = (event) => {
    let spanSwitch = document.querySelector('#icon__button');

    if(event.type == 'touchstart') event.previousDefault();

    spanSwitch.classList.toggle('icon__button');
    document.querySelector('body').classList.toggle('activeDarkMode');
}

switchButton.addEventListener('click', toggleTheme);
switchButton.addEventListener('touchstart', toggleTheme);
