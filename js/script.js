const icons = document.querySelectorAll('i');

for (let i = 0 ; i < icons.length ; i++ ) {
    icons[i].addEventListener('click' , function() {
        close(icons);
        upDown(this);
    });
};

function upDown(element) {
    if (this.classList.contains('fa-chevron-down')) {
        this.parentNode.nextElementSibling.classList.add('delete');
        this.classList.replace('fa-chevron-down' , 'fa-chevron-up');
    } else {
        this.parentNode.nextElementSibling.remove('delete');
        this.classList.replace('fa-chevron-up' , 'fa-chevron-down');
    };
};

function close(icons) {
    for ( let i = 0 ; i < icons.length ; i++ ) {
        icons[i].parentNode.nextElementSibling.classList.add('delete');
        icons[i].classList.replace('fa-chevron-down' , 'fa-chevron-up');
    };
};