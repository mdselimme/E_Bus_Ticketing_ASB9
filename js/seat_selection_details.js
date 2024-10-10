
const selectSeatParent = document.getElementById("seat-selection-details");

function seatSelectionDetails(seatArr){
    if(seatArr.length > 0){
        seatArr.forEach(function(seatDet){
            selectSeatParent.innerHTML = ` <div class="flex justify-between items-center py-4">
                      <p class="text-center text-base font-inter text-[#03071299] font-medium">${seatDet.seatType}</p>
                      <p class="text-center text-base font-inter text-[#03071299] font-medium">Economy</p>
                      <p class="text-center text-base font-inter text-[#03071299] font-medium">${seatDet.seatPrice}</p>
                    </div>`
        })
    }else{
        selectSeatParent.innerHTML = `<h1 class="text-center text-xl font-bold text-[#030712]">Please Select Your Seat</h1>`;
    }
};