export const ActineButtonModal = () => {
    if(document.querySelector('.btn').classList.contains('btn-active')){
        document.querySelector('.btn').classList.remove('btn-active');
        document.querySelector('.all-links').classList.remove('show-all-links');
    }else{
        document.querySelector('.btn').classList.add('btn-active');
        document.querySelector('.all-links').classList.add('show-all-links');
    }
}