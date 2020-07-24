var phonePrePrice = 1219;
var casePrePrice = 59;
const iphonePlus = document.getElementById('iphonePlus');
iphonePlus.addEventListener('click', function(){
    shoppingPlus('iphoneItem', 'iphonePrice', phonePrePrice);
    subTotalCalc();
    taxCalc();
    totalCalc();
});

const iphoneMinus = document.getElementById('iphoneMinus');
iphoneMinus.addEventListener('click', function(){
    shoppingMinus('iphoneItem', 'iphonePrice', phonePrePrice);
    subTotalCalc();
    taxCalc();
    totalCalc();
});

const casePlus = document.getElementById('casePlus');
casePlus.addEventListener('click', function(){
    shoppingPlus('caseItem', 'casePrice', casePrePrice);
    subTotalCalc();
    taxCalc();
    totalCalc();
})

const caseMinus = document.getElementById('caseMinus');
caseMinus.addEventListener('click', function(){
    shoppingMinus('caseItem', 'casePrice', casePrePrice);
    subTotalCalc();
    taxCalc();
    totalCalc();
})



// Making function
function shoppingPlus(input, price, prePrice){
    var Quantity = document.getElementById(input).value;
    var QuantityNum = parseInt(Quantity);
    var currentQuantity = QuantityNum + 1;
    document.getElementById(input).value = currentQuantity;

    var proPrice = document.getElementById(price).innerText;
    const priceNum = parseInt(proPrice);
    document.getElementById(price).innerText = priceNum + prePrice;
}

function shoppingMinus(input, price, prePrice){
    var Quantity = document.getElementById(input).value;
    var QuantityNum = parseInt(Quantity);
    
    if(QuantityNum >= 1){
        var currentQuantity = QuantityNum - 1;
        document.getElementById(input).value = currentQuantity;

        var proPrice = document.getElementById(price).innerText;
        var priceNum = parseInt(proPrice);
        document.getElementById(price).innerText = priceNum - prePrice;
    }
}

// Main Pricing Functionality
function subTotalCalc(){
    var phonePrice = document.getElementById('iphonePrice').innerText;
    var phonePriceNum = parseInt(phonePrice);
    var casePrice = document.getElementById('casePrice').innerText;
    var casePriceNum = parseInt(casePrice);
    var sum = phonePriceNum + casePriceNum;

    document.getElementById('subTotal').innerText = sum;
    return sum;
}

function taxCalc(){
    var subTotalNum = subTotalCalc();
    var tax = Math.round((subTotalNum / 100) * 3); // If its ok to use 3 percent tax.

    document.getElementById('tax').innerText = tax;
    return tax;
}
taxCalc();

function totalCalc() {
    var subTotalAmount = subTotalCalc();
    var taxAmount = taxCalc();
    var total = subTotalAmount + taxAmount;
    document.getElementById('total').innerText = total;
}
totalCalc();


