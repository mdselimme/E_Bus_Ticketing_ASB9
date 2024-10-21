

const applyCoupon = () =>{
    const findCouponValue = document.getElementById("coupon_input").value;
    const findNetPrice = document.getElementById("net-price");
    const findNetPriceValue = parseInt(findNetPrice.innerText);
    if(findCouponValue === "new15"){
        const discountValue = Math.ceil(findNetPriceValue - (findNetPriceValue * 15)/100);
        findNetPrice.innerText = discountValue;
    }
};