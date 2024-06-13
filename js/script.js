const SelectedTime = "11 June 2025 00:00:00 AM";

document.getElementById("end-date").innerHTML = SelectedTime;

document.querySelectorAll("showTime");

function clock() {
    const end = new Date(SelectedTime); 
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff<0) return;

    //convert into days 
    showTime[0].value = Math.floor(diff / 3600 / 24);
    //convert into hours
    showTime[1].value = Math.floor(diff / 3600 % 24);
    //convert into minutes
    showTime[2].value = Math.floor(diff / 60 % 60);
    //convert into seconds
    showTime[3].value = Math.floor(diff) % 60;
}

setInterval(
    ()=>{
        clock()
    },1000
)
