const scrollToElem = (elemId: string):void => {
    const elem = document.getElementById(elemId);
    if(elem){
        elem.scrollIntoView();
    }
};

export {
    scrollToElem
}