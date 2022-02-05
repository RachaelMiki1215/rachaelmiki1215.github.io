var mainArea, headerArea, footerArea, sideNavbarArea;

function init() {
    mainArea = Array.from(document.getElementsByTagName('main'))[0];
    headerArea = Array.from(document.getElementsByTagName('header'))[0];
    footerArea = Array.from(document.getElementsByTagName('footer'))[0];
    sideNavbarArea = document.getElementById('sideNavbar');

    changeMainAreaSize();

    window.addEventListener(
        'resize',
        function(e) {
            changeMainAreaSize(e);
        }
    )
}

function changeMainAreaSize() {
    //console.log('hello!');
    mainArea.style.marginTop = headerArea.offsetHeight + 'px';
    mainArea.style.marginBottom = footerArea.offsetHeight + 'px';
    if (sideNavbarArea !== null) {
        mainArea.style.marginLeft = '160px';
        sideNavbarArea.style.marginTop = headerArea.offsetHeight + 'px';
        sideNavbarArea.style.marginBottom = footerArea.offsetHeight + 'px';        
    }
}