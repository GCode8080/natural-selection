//-------------------------Variables---------------------------------
let count = 2;
let index = 0;
let stopIndex = 0;

//-------------------------stuff---------------------------------
document.getElementById("output").value = " ";

//-------------------------Functions---------------------------------
function increment() {//put it all together

    child();//make child

    naturalKill();//kill

    if(index >= 1) {
        count = count - Math.floor(Math.random() * 4);
    }


    if (count <= 1) {//if the population is >NOT< enough to populate earth set text to sad message
        document.getElementById("output").value = "all of the creatures died :(, reload the page";
        stopIndex++;
    }
    

    if (count >= 2 && !stopIndex >= 1) {//if the population >IS< enough to populate earth set text to the amount
        document.getElementById("output").value = count + " creatures";
    }
    

}

//make 0 to 4 creatures
function child() {
    count = count + Math.floor(Math.random() * 5);
}

//kill 0 to 2 creatures
function naturalKill() {
    count = count - Math.floor(Math.random() * 2);
}

//increment 20 times
function bigStep() {
    for(let i = 0; i < 20; i++) {
        increment();
    }
}

function predator() {
    index++;
}