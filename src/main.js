import './style.css'
// Supports weights 100-900
import '@fontsource-variable/roboto';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './oppor'
import './heroAnimation'
import './mobileMenu'
import './bookForm'

document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 20
        });
    });
});

