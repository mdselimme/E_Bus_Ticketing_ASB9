
const selectSeatParent = document.getElementById("seat-selection-details");
selectSeatParent.innerHTML = `<h1 class="text-center text-xl font-bold text-[#030712]">Please Select Your Seat</h1>`
function seatSelectionDetails(seatArr){ 
       
        if(seatArr.length ===0){
                selectSeatParent.innerHTML = `<h1 class="text-center text-xl font-bold text-[#030712]">Please Select Your Seat</h1>`
        }
        else{
                selectSeatParent.textContent = "";
        
                seatArr.forEach(function(seatDet){
                       
                        const divCh = document.createElement("div");
                        divCh.innerHTML = `
                        <div class="flex justify-between items-center py-4">
                      <p class="text-center text-base font-inter text-[#03071299] font-medium">${seatDet.seatType}</p>
                      <p class="text-center text-base font-inter text-[#03071299] font-medium">Economy</p>
                      <p class="text-center text-base font-inter text-[#03071299] font-medium">${seatDet.seatPrice}</p>
                    </div>
                        `
                        selectSeatParent.appendChild(divCh);
                     });
        
        }
        const num = document.getElementById("selected-seat-length");
        num.innerText = seatArr.length;
   
};