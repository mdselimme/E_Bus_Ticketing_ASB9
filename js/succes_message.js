const fullDiv = document.getElementById("main-full-div");
const successMessageDiv = document.getElementById("success-message");

const goToNextBtn = (e) =>{
    console.log(e);
    fullDiv.classList.add("hidden");
    successMessageDiv.classList.remove("hidden");
};

const continueBuying = () =>{
    successMessageDiv.classList.add("hidden");
    fullDiv.classList.remove("hidden");
};