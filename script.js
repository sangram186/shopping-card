const iphonePlus = document.getElementById('iphonePlus');
iphonePlus.addEventListener('click', function(){
    var prePrice = 1219;
    shoppingPlus('iphoneItem', 'iphonePrice', prePrice);
    subTotalPrice();
    taxCalc();
});

const iphoneMinus = document.getElementById('iphoneMinus');
iphoneMinus.addEventListener('click', function(){
    var prePrice = 1219;
    shoppingMinus('iphoneItem', 'iphonePrice', prePrice);
    subTotalPrice();
    taxCalc();
});

const casePlus = document.getElementById('casePlus');
casePlus.addEventListener('click', function(){
    var prePrice = 59;
    shoppingPlus('caseItem', 'casePrice', prePrice);
    subTotalPrice()
    taxCalc();
})

const caseMinus = document.getElementById('caseMinus');
caseMinus.addEventListener('click', function(){
    var prePrice = 59;
    shoppingMinus('caseItem', 'casePrice', prePrice);
    subTotalPrice()
    taxCalc();
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

// Main Pricing Function
function subTotalPrice(){
    var phonePrice = document.getElementById('iphonePrice').innerText;
    var phonePriceNum = parseInt(phonePrice);
    var casePrice = document.getElementById('casePrice').innerText;
    var casePriceNum = parseInt(casePrice);
    var sum = phonePriceNum + casePriceNum;

    document.getElementById('subTotal').innerText = sum;
}

function taxCalc(){
    var subTotal = document.getElementById('subTotal').innerText;
    var subTotalNum = parseInt(subTotal);
    var tax = Math.round((subTotalNum / 100) * 3); // If its ok to use 3 p

    document.getElementById('tax').innerText = tax;
}
taxCalc();