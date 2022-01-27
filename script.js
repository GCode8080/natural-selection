let index = 0;
let count = 2;
let output = document.getElementById("output");


function increment() {
    child();
    output.value = count;
}








function child() {
    count = count + Math.floor(Math.random() * 5);
    console.log(count);
}
