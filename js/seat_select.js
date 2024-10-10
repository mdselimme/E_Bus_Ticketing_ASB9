
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
       seatSelectionDetails(seatArray);
    });
    
};
