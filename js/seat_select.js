
const seatAll = document.getElementsByClassName("seat-number");

const seatArray = [];

for(const seat of seatAll){
    seat.addEventListener("click", function(e){

        
       if(seatArray.length !==4){
        const seatType = e.target.innerText;
        const seatArrRes = seatArray.filter(function(event){return event.seatType === seatType});
       
            e.target.classList.add("seat-click")

            const seatSingle = {seatType: seatType, seatPrice:550};
            seatArray.push(seatSingle);
            console.log(seatArray);

        // console.log(seatArrRes);
        
       }else{
        e.target.classList.remove("seat-click");
        const ind = seatArray.indexOf(e.target.innerText);;
        console.log(ind);
        console.log(ind);
        if (ind > -1) { 
            seatArray.splice(ind, 1); 
            // call seat plus funtion 
            seatCountPlus();
             // Seat Fare Update Function 
            fareUpdate(seatMain);
        } ;
        console.log(seatMain);
       }
    })
}







/*
// All seats find 
const allSeats = document.getElementById("seat-box-main");

const arr = [];
const seatMain = [];

allSeats.addEventListener("click", function(e){
    const mainEv = e.target;

    if(seatMain.length !== 4){
        const seatObj = {seatNumber: mainEv.innerText, seatfare: 550};
        seatMain.push(seatObj);
        // arr.push(mainEv.innerText);
        mainEv.classList.add("seat-click");

        // const seatObj = {seatNumber: mainEv.innerText, seatfare: 550};
        // seatMain.push(seatObj);

        // call seat minus function 
        setCountMinus();
        // Seat Fare Update Function 
        fareUpdate(seatMain);
   }else{

        mainEv.classList.remove("seat-click");
        const ind = seatMain.indexOf(mainEv.innerText);
        
        console.log(ind);
        if (ind > -1) { 
            seatMain.splice(ind, 1); 
            // call seat plus funtion 
            seatCountPlus();
             // Seat Fare Update Function 
            fareUpdate(seatMain);
        } ;
        console.log(seatMain);
       
   };
    e.stopPropagation();
});



*/