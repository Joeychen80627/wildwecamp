 $(document).ready(function () {
    $("#navbar").load("navbar.html");
});
$(document).ready(function () {
    $("#foottab").load("foottab.html");
});
$(document).ready(function () {
    $("#productitems").load("productitem.html")
});
let text = '<div class=col></div>';
function product() {
    let x = array;
    length = x.length; 
    let text = "";
    var i = 0;
    while ( i < length) {
    text += '<div class="col text-center itemcontainer"><figure class="figure"><img src='+x[i].img+' class="img-opacity"><div class="buy-middle"><span class="text-style">加入購物車</span></div><figcaption class="figure-caption"><p>'+x[i].subtitle+'</p><h4>'+x[i].price+'<h4></figcaption></figure></div>';
    i++;}
    return text;
};

