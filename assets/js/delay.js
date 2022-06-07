const itemDelay = document.querySelectorAll("[data-delay]");
var temp =23.10 ;
var tempConv = temp * 60000;

function hide() {
    itemDelay.forEach(item => {
        item.style.display = "block";
    });
}

setTimeout(() => {
    hide();
}, tempConv)
