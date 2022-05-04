var mainArea, headerArea, footerArea, sideNavbarArea;

var mediaQuery;
var isPrinting;

function init() {
    mainArea = Array.from(document.getElementsByTagName('main'))[0];
    headerArea = Array.from(document.getElementsByTagName('header'))[0];
    headerBackdrop = document.getElementById('headerBackdrop');
    footerArea = Array.from(document.getElementsByTagName('footer'))[0];
    sideNavbarArea = document.getElementById('subNavbar');
    mainSideHrArea = document.getElementById('mainSubNavbarHr');

    mediaQuery = window.matchMedia('print');

    mediaQuery.addEventListener(
        'change',
        (mql) => {
            if (mql.matches) {
                isPrinting = true;
            }
            else {
                isPrinting = false;
            }
        }
    )

    changeMainAreaSize();

    window.addEventListener(
        'resize',
        function(e) {
            if (isPrinting) {
                /*console.log("printing!!");*/
                mainArea.style.margin = '0';
            }
            else {
                changeMainAreaSize(e);
            }
        }
    );

    window.addEventListener(
        'beforeprint',
        function(e) {
            mainArea.style.margin = 0;
        }
    );

    window.addEventListener(
        'afterprint',
        function(e) {
            if (isPrinting) {
                mainArea.style.margin = 0;
            }
            else {
                changeMainAreaSize(e);
            }
        }
    );

}

function changeMainAreaSize() {

    let sideNavbarAreaHeight = (sideNavbarArea === null) ? 0 : sideNavbarArea.offsetHeight;
    let mainSideHrAreaHeight = (mainSideHrArea === null) ? 0 : mainSideHrArea.offsetHeight;

    if (window.innerWidth <= 600) {
        if(sideNavbarArea !== null){
            mainSideHrArea.style.marginTop = headerArea.offsetHeight + 'px';
            sideNavbarArea.style.marginTop = headerArea.offsetHeight + mainSideHrAreaHeight + 'px';
        }
        mainArea.style.marginTop = headerArea.offsetHeight + mainSideHrAreaHeight + sideNavbarAreaHeight + 'px';
        mainArea.style.marginLeft = '10px';
    }
    else {
        mainArea.style.marginTop = headerArea.offsetHeight + 'px';

        if(sideNavbarArea !== null){
            sideNavbarArea.style.marginTop = headerArea.offsetHeight + 'px';
            mainArea.style.marginLeft = sideNavbarArea.offsetWidth + 10 + 'px';
        }
        else {
            mainArea.style.marginLeft = '10px';
        }
    }
    headerBackdrop.style.height = parseInt(mainArea.style.marginTop, 10) + 50 + 'px';

    mainArea.style.marginBottom = footerArea.offsetHeight + 'px';
    mainArea.style.marginRight = '10px';
}