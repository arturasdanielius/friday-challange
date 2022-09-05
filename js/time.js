let clock = document.getElementById('clock');

function time() {
  let d = new Date();
  let m = d.getMinutes();
  let h = d.getHours();
  clock.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
}

setInterval(time, 1000);
time();