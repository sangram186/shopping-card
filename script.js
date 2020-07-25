var phonePrePrice = 1219;
var casePrePrice = 59;

const removeItem1 = document.getElementById('removeItem1');
removeItem1.addEventListener('click', function(){
    removeItem('iphoneItem', 'iphonePrice');
});

const removeItem2 = document.getElementById('removeItem2');
removeItem2.addEventListener('click', function(){
    removeItem('caseItem', 'casePrice');
});

function removeItem(quantity, price){
    document.getElementById(quantity).value = 0;
    document.getElementById(price).innerText = 0;
    subTotalCalc()
    taxCalc();
    totalCalc();
}


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
    
    if(QuantityNum > 1){
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

    document.getElementById('subTotal').innerText = formatNumber(sum);
    return sum;
}

function taxCalc(){
    var subTotalNum = subTotalCalc();
    var tax = Math.round((subTotalNum / 100) * 3); // If its ok to use 3 percent tax.

    document.getElementById('tax').innerText = formatNumber(tax);
    return tax;
}
taxCalc();

function totalCalc() {
    var subTotalAmount = subTotalCalc();
    var taxAmount = taxCalc();
    var total = subTotalAmount + taxAmount;
    document.getElementById('total').innerText = formatNumber(total);
}
totalCalc();

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const input1 = document.getElementById('iphoneItem');
const price1 = document.getElementById('iphonePrice');

const input2 = document.getElementById('caseItem');
const price2 = document.getElementById('casePrice');

input1.addEventListener('input', updateValue);

function updateValue(e){
    price1.textContent = e.target.value * phonePrePrice;
    subTotalCalc()
    taxCalc();
    totalCalc();
}
input2.addEventListener('input', updateValue);

function updateValue(e){
    price2.textContent = e.target.value * casePrePrice;
    subTotalCalc()
    taxCalc();
    totalCalc();
}
