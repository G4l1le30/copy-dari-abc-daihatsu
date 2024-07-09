document.getElementById('slide-left').onclick = function() {
    document.getElementById('product-list').scrollLeft -= 300;
};

document.getElementById('slide-right').onclick = function() {
    document.getElementById('product-list').scrollLeft += 300;
};
