const itemDelay = document.querySelectorAll("[data-delay]");
var temp =25.50 ;
var tempConv = temp * 60000;

function hide() {
    itemDelay.forEach(item => {
        item.style.display = "block";
    });
}

setTimeout(() => {
    hide();
}, tempConv)
