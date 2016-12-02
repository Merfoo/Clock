var show_colon = true;

function init(){
    var $hours_a = document.getElementById("hours_a");
    var $hours_b = document.getElementById("hours_b");
    var $mins_a = document.getElementById("mins_a");
    var $mins_b = document.getElementById("mins_b");
    var $colon = document.getElementById("colon");
    setInterval(() => update_clock($hours_a, $hours_b, $mins_a, $mins_b, $colon), 1000); // Update clock every second
}

function update_clock($hours_a, $hours_b, $mins_a, $mins_b, $colon) {
    var date = new Date();
    var mins = date.getMinutes();
    var hours = date.getHours() % 12;
    hours = hours ? hours : 12;

    var hours_str = hours < 10 ? "0" + hours : hours.toString();
    var mins_str = mins < 10 ? "0" + mins : mins.toString();

    $hours_a.innerHTML = hours_str[0];
    $hours_b.innerHTML = hours_str[1];
    $mins_a.innerHTML = mins_str[0];
    $mins_b.innerHTML = mins_str[1];
    $colon.innerHTML = show_colon ? ":" : " ";

    show_colon = !show_colon;
}

window.onload = init;