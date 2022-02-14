function updateProductNumber(productId, isIncreasing, priceId, price ) {

    const productInput = document.getElementById(productId);
    const productNumberText = productInput.value;
    let productNumberValue = parseInt(productNumberText);
    if(isIncreasing == true){
        productNumberValue = productNumberValue + 1;
    }
    else if(isIncreasing == false && productNumberValue > 0){
        productNumberValue = productNumberValue - 1;
    }
    productInput.value = productNumberValue;
    // update total price..!
    const productTotalPrice = document.getElementById(priceId);
    productTotalPrice.innerText = productNumberValue * price;
    // calculate total..!
    calculateTotal()
}

function getInputValue(productId){
    const productInput = document.getElementById(productId);
    const productNumberText = productInput.value;
    const productNumberValue = parseInt(productNumberText);
    productInput.value = productNumberValue;
    return productNumberValue;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone-number') * 1219;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the subTotal..!
    document.getElementById('sub-total').innerText = subTotal;
    // update on the tax..!
    document.getElementById('tax-amount').innerText = tax;
    // update on the total price..!
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase decrease events..!
document.getElementById('phone-plus').addEventListener('click', function (){
    updateProductNumber('phone-number', true, 'phone-total-price', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function (){
    updateProductNumber('phone-number', false, 'phone-total-price', 1219);
})

// handle case increase decrease events..!
document.getElementById('case-plus').addEventListener('click', function (){
    updateProductNumber('case-number', true, 'case-price-total', 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case-number', false, 'case-price-total', 59);
})