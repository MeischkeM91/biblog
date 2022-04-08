// When add-btn div is clicked make form appear
const newbook = document.querySelector('.new-book');

const displayForm = () => {
    if(newbook.style.display == 'block'){
        newbook.style.display = 'none';
    }
    else{
        newbook.style.display = 'block';
    }
};