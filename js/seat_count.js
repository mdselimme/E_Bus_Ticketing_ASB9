

function seatCount(arr){
    const seatNumber = document.getElementById("seat-number");
    const value = parseFloat(seatNumber.innerText);
    console.log(arr.length);
    if(arr.length <= 4){
        const result = value - 1;
    setSeatNumber(result);
}
    }


function setSeatNumber(val){
    const seatNumber = document.getElementById("seat-number");
    seatNumber.innerText = val;
}