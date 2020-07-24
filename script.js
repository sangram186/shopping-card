const iphonePlus = document.getElementById('iphonePlus');
iphonePlus.addEventListener('click', function(){
    var prePrice = 1219;
    shoppingPlus('iphoneItem', 'iphonePrice', prePrice);
});

const iphoneMinus = document.getElementById('iphoneMinus');
iphoneMinus.addEventListener('click', function(){
    var prePrice = 1219;
    shoppingMinus('iphoneItem', 'iphonePrice', prePrice);
});

const casePlus = document.getElementById('casePlus');
casePlus.addEventListener('click', function(){
    var prePrice = 59;
    shoppingPlus('caseItem', 'casePrice', prePrice);
})

const caseMinus = document.getElementById('caseMinus');
caseMinus.addEventListener('click', function(){
    var prePrice = 59;
    shoppingMinus('caseItem', 'casePrice', prePrice);
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
