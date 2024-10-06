
// All seats find 
const allSeats = document.getElementById("seat-box-main");

const arr = [];
const seatMain = [];

allSeats.addEventListener("click", function(e){
    const mainEv = e.target;

    if(!arr.includes(mainEv.innerText) && arr.length !== 4){
        arr.push(mainEv.innerText);
        mainEv.classList.add("seat-click");

        const seatObj = {seatNumber: mainEv.innerText, seatfare: 550};
        seatMain.push(seatObj);

        // call seat minus function 
        setCountMinus();
        // Seat Fare Update Function 
        fareUpdate(seatMain);
   }else{

        mainEv.classList.remove("seat-click");
        const ind = arr.indexOf(mainEv.innerText);
        
        console.log(seatMain[ind].seatNumber);
        if (ind > -1) { 
            arr.splice(ind, 1); 
            // call seat plus funtion 
            seatCountPlus();
             // Seat Fare Update Function 
            fareUpdate(seatMain);
        } ;
       
   };
    e.stopPropagation();
});



