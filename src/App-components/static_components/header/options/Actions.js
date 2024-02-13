const setSelect = (selector) => document.querySelector(selector);
export const ActineButtonModal = () => {
    if (document.querySelector('.btn-01').classList.contains('btn-anime-action')) {
        document.querySelector('.btn-01').classList.remove('btn-anime-action');
        setSelect('.all-links').classList.remove('show-all-links');
    } else {
        document.querySelector('.btn-01').classList.add('btn-anime-action');
        setSelect('.all-links').classList.add('show-all-links');
    }
}
export const closeButtonModal = () => {
    setSelect('.all-links').classList.remove('show-all-links');
    setSelect('.btn-01').classList.remove('btn-anime-action');
    // -------------------------------------------------------
    setSelect('.arrow').classList.remove('up');
    setSelect('.arrow').classList.add('down');
    setSelect('.sushi').classList.remove('sushi-show-menu');
    // ---------------------------------------
    setSelect('.arrow-a').classList.add('down-a');
    setSelect('.arrow-a').classList.remove('up-a');
    setSelect('.alcohol').classList.remove('alcohol-show-menu');
    // ----------------------------------------------------------
}
export const OpenSushi = () => {
    if (setSelect('.arrow').classList.contains('down')) {
        setSelect('.arrow').classList.remove('down');
        setSelect('.arrow').classList.add('up');
        setSelect('.sushi').classList.add('sushi-show-menu');
    } else {
        setSelect('.arrow').classList.add('down');
        setSelect('.arrow').classList.remove('up');
        setSelect('.sushi').classList.remove('sushi-show-menu');
    }
}

export const openAlcohol = () => {
    if (setSelect('.arrow-a').classList.contains('down-a')) {
        setSelect('.arrow-a').classList.remove('down-a');
        setSelect('.arrow-a').classList.add('up-a');
        setSelect('.alcohol').classList.add('alcohol-show-menu');
    } else {
        setSelect('.arrow-a').classList.add('down-a');
        setSelect('.arrow-a').classList.remove('up-a');
        setSelect('.alcohol').classList.remove('alcohol-show-menu');
    }
} 