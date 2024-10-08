
// Seat Value Find from html 
function seatValue(){
    const seatNumber = document.getElementById("seat-number");
    const value = parseFloat(seatNumber.innerText);
    return value;
}

// Seat Number Plus Function 
function seatCountPlus(){
    const value = seatValue();
    const result = value + 1;
    setSeatNumber(result);
    console.log("click");
};

// Seat Number Minus Function 
function setCountMinus(){
    const value = seatValue();
    const result = value - 1;
    setSeatNumber(result);
}


// Set Seat Number Value in Html 
function setSeatNumber(val){
    const seatNumber = document.getElementById("seat-number");
    seatNumber.innerText = val;
}