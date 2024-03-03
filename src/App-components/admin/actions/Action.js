
export const closeConsole = () =>{
    window.localStorage.clear();
    window.location.replace('/')
}
export const addProducts = () => {
    document.querySelector('.add-products-form').classList.remove('close-products-form');
    document.querySelector('.add-discount').classList.add('close-discount');
    document.querySelector('.add-category').classList.add('close-category');
}
export const addDiscounts = () => {
    document.querySelector('.add-products-form').classList.add('close-products-form');
    document.querySelector('.add-discount').classList.remove('close-discount');
    document.querySelector('.add-category').classList.add('close-category');
}
export const addCategory = () => {
    document.querySelector('.add-products-form').classList.add('close-products-form');
    document.querySelector('.add-discount').classList.add('close-discount');
    document.querySelector('.add-category').classList.remove('close-category');
}