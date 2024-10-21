

const applyCoupon = () =>{
    const findCoupon = document.getElementById("coupon_input");
    const findCouponValue = findCoupon.value;
    const findNetPrice = document.getElementById("net-price");
    const findNetPriceValue = parseInt(findNetPrice.innerText);
    
    if(findCouponValue === "new15"){
       const discountValue = findDiscountValue(findNetPriceValue,15);
        findNetPrice.innerText = discountValue;
       disabledCouponBtn("disabled", true);
    }else if(findCouponValue === "couple20"){
        const discountValue = findDiscountValue(findNetPriceValue,20);
        findNetPrice.innerText = discountValue;
        disabledCouponBtn("disabled", true);
    }
    findCoupon.value = "";
};


const findDiscountValue = (findNetPriceValue,percentage) =>{
    const discountValue = Math.ceil(findNetPriceValue - (findNetPriceValue * percentage)/100);
    return discountValue;
}



const disabledCouponBtn = (attr,value) =>{
    const applyCouponBtn = document.getElementById("coupon_apply_btn");
    applyCouponBtn.classList.add("apply-btn-dis");
    applyCouponBtn.setAttribute(attr, value);
};