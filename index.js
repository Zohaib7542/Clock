setInterval(() => { //set interval means do that work again and again
    d = new Date();
    // functions
    htime = d.getHours(); 
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2; 
    /* 12 hour -> 360 min
    1 hour -> 360/12 = 30'
    for hour hand = 30h + m/2 */
    mrotation = 6*mtime;                  
    /* 60 min = 360'  ,   '->degree
    1 min = 6'
    m min = 6m */
    srotation =6*stime;                  
    /* 60 sec =  360'
    1 sec = 6'
    s sec = 6s' */
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
