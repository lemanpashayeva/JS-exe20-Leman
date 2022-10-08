const icons = document.querySelectorAll('.icon');

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click' , function() {
        console.log('icon clicked');
        upDown(this);
    })
}

function upDown(element) {
    if (element.classList.contains('fa-chevron-down')) {
        element.parentNode.nextElementSibling.classList.add('delete');
        element.classList.replace('fa-chevron-down' , 'fa-chevron-up');
    } else {
        element.parentNode.nextElementSibling.classList.remove('delete');
        element.classList.replace('fa-chevron-up' , 'fa-chevron-down');
    }
}