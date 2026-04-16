
// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function Change(){
  let ele = document.getElementById("One");
  ele.innerHTML = "MERN stack";

}
// Write code to get 1st H1 element from a webpage using DOM.........

function Create() {
  let element = document.createElement("h1");
  element.innerText = "Hello Create";
  document.body.appendChild(element);
}

Create();

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second...

  function MyClock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = h + ":" + m + ":" + s;


    setTimeout(() =>{
      MyClock();
    })
    document.getElementById("clock").innerHTML = time;
  }

  MyClock();


// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changebtn(){
  let btn = document.getElementById("hello");
  btn.innerText = "Welcome to Elevation academy";
}



// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

function hide(){
  let second = document.getElementById("hello");
  second.style.display= "none";
}


let n = 5;
let fact = 1;

for (let i = 2; i <= n; i++) {
  fact *= i;
}

console.log(fact);


let n = 5;
let fact = n * (n - 1) * (n - 2) * (n - 3) * (n - 4);

console.log(fact); // 120



function countFrequency(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

console.log(countFrequency([1,2,2,3,3,3]));
