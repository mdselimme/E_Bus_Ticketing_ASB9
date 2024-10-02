
const allSeats = document.getElementById("seat-box-main");

const children = allSeats.children;

const arr = [];

allSeats.addEventListener("click", function(e){
   
    const mainEv = e.target;
   if(!arr.includes(mainEv.innerText) && arr.length !== 4){
    arr.push(mainEv.innerText);
    mainEv.classList.add("seat-click")
   }else{
        mainEv.classList.remove("seat-click");
        const ind = arr.indexOf(mainEv.innerText);
        if (ind > -1) { 
            arr.splice(ind, 1); 
        } 
   };
   
   
    e.stopImmediatePropagation();
});

