
const seatAll = document.getElementsByClassName("seat-number");

const seatArray = [];

for(const seat of seatAll){
    seat.addEventListener("click", function(e){
        
       if(seatArray.length !== 4){
        
        if(seatArray.length === 0){
                const seatType = e.target.innerText;
                const seatSingle = {seatType: seatType, seatPrice:550};
                e.target.classList.add("seat-click");
                seatArray.push(seatSingle);
                setCountMinus();
        }
        
        else{
            const seatArrRes = seatArray.filter(function(event){return event.seatType === e.target.innerText});

        if(seatArrRes.length>0){
            const ind = seatArray.findIndex((x)=>x.seatType === e.target.innerText);

        if(ind> -1){
            e.target.classList.remove("seat-click");
            seatArray.splice(ind, 1);
            seatCountPlus();
           };

        }
        else{
            const seatType = e.target.innerText;
            const seatSingle = {seatType: seatType, seatPrice:550};
            
            e.target.classList.add("seat-click");
            seatArray.push(seatSingle);
            setCountMinus();
        }
    }; 

    }
    else{
        const ind = seatArray.findIndex((x)=>x.seatType === e.target.innerText);
        if(ind> -1){
            e.target.classList.remove("seat-click");
            seatArray.splice(ind, 1);
            seatCountPlus();
           }
       };
       seatNumberUpdate(seatArray);
    });
};







/*

else{
        
       
        // if(seatArrRes[0].seatType === e.target.innerText){
        //     e.target.classList.remove("seat-click");
        //     console.log(e.target.innerText);
        //     const ind = seatArray.findIndex((x)=>x.seatType === e.target.innerText);
        //     delete seatArray[ind];
        // }
        
        // e.target.classList.remove("seat-click");
        // const ind = seatArray.indexOf(e.target.innerText == seatType);;
        // console.log(ind);
        // console.log(ind);
        // if (ind > -1) { 
        //     seatArray.splice(ind, 1); 
        //     // call seat plus funtion 
        //     seatCountPlus();
        //      // Seat Fare Update Function 
        //     // fareUpdate(seatMain);
        // } ;
        // console.log(seatArray);
       }


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