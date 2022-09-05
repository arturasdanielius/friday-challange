

function sveiki(){
const date = new Date();
const currentTime = date.getHours();

if (currentTime > 23 && currentTime <= 4) {
    document.getElementById('hi').innerText = "It is Night time, Artūras";
} else if (currentTime > 4 && currentTime <= 12) {
    document.getElementById('hi').innerText = "Good Morning, Artūras";
} else if (currentTime > 12 && currentTime <= 18) {
    document.getElementById('hi').innerText = "Good Afternoon, Artūras";
} else {
    document.getElementById('hi').innerText = "Good Evening, Artūras";
}
}

sveiki();

// // let data = [
// //     [0, 4, "Good night, Artūras"], 
// //     [5, 11, "Good morning, Artūras"],        
// //     [12, 17, "Good afternoon, Artūras"],
// //     [18, 24, "Good evening, Artūras"]
// // ],
// //     hr = new Date().getHours();

// // for(let i = 0; i < data.length; i++){
// //     if(hr >= data[i][0] && hr <= data[i][1]){
// //         console.log(data[i][2]);
// //     }
// // }

// let time = new Date();
// if(time.getHours() < 12)
// document.write("<h3>Good Morning, Artūras</h3>");
// else if(time.getHours() < 18)
// document.write("<h3>>Good Afternoon, Artūras</h3>>");
// else 
// document.write("<h3>>Good Evening, Artūras</h3>>");

// function greeting() {
//     let time = new Date();
//     if (time.getHours() < 12) {
//         document.getElementById('hi').innerText = "Good mornig, Artūras";
//     } else if (time.getHours() < 18) {
//         document.getElementById('hi').innerText = "Good afternoon, Artūras";
//     } else {
//         document.getElementById('hi').innerText = "Good evening, Artūras";
//     }
// }

// greeting();