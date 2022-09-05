function currentDate() {
    let months = ['Sausio', 'Vazario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'];
    let days = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'];
    let currentDate = new Date();
    let Dayw = days[currentDate.getDay()];
    let Day = currentDate.getDate();
    let Month = months[currentDate.getMonth()];
    let Year = currentDate.getFullYear();
    document.getElementById("day").innerText = Dayw +" , " + Month+ " " + Day + " , " + Year;
  }
  
  currentDate();
 