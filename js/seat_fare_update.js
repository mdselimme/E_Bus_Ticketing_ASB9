

function seatNumberUpdate(arr){
        
        const totalTicketPrice = arr.reduce((base, seat)=>{
                base += seat.seatPrice;
                return base;
        },0);
        setValuePrice("ticket_price", totalTicketPrice);
        setValuePrice("net-price", totalTicketPrice);
};



function setValuePrice(selectedId, value){
    const setTextBase = document.getElementById(selectedId);
    setTextBase.innerText = value;
};