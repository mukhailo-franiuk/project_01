
export const openLeftMenu = () => {
    document.querySelector('.left-menu').style.display = 'block';
    setTimeout(()=>{
        document.querySelector('.block-menu').classList.add('open-left-menu');
    },100)
}

export const closeLeftMenu = () => {
    document.querySelector('.block-menu').classList.remove('open-left-menu');
    setTimeout(()=>{
        document.querySelector('.left-menu').style.display = 'none';
    },300)
}
export const closeAll = () => {
    document.querySelector('.left-menu').style.display = 'none';
    document.querySelector('.block-menu').classList.remove('open-left-menu');
}