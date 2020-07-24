// iphone section
const iphonePlus = document.getElementById('iphonePlus');
iphonePlus.addEventListener('click', function(){
    var iphoneQuantity = document.getElementById('iphoneItem').value;
    var iphoneQuantityNum = parseInt(iphoneQuantity);
    var currentQuantity = iphoneQuantityNum + 1;
    document.getElementById('iphoneItem').value = currentQuantity;
})