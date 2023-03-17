//header
let icon = document.querySelector("#icon");
let list = document.querySelector("#list");

icon.addEventListener('click', () => {
    list.style.display = 'block';
    window.onscroll = function () { headerList() };
    function headerList() {
        if (document.body.scrollTop > 10 ) {
            list.style.display = "none";
        }
        else {
            list.style.display = "block";
        }
        window.onclick = function () { 
            list.style.display = "none";
        };
    }
});
icon.addEventListener('click', () => {
    list.classList.toggle('show-item');
});

let mybutton = document.querySelector(".arrow_up");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener('click',function topFunction() {
    document.body.scrollTop = 0;
});
