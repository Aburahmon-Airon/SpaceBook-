

const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

links.forEach(link => {

    link.addEventListener('click', () => {

        const pageName = link.dataset.page;

        pages.forEach(page => {
            page.classList.remove('active-page');
        });

        links.forEach(item => {
            item.classList.remove('active');
        });

        document.getElementById(pageName).classList.add('active-page');

        link.classList.add('active');

    });

});