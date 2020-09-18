//chromeとbrowserの名前空間対策
if (!("browser" in window)) {
    window.browser = chrome;
}

function initOnLoadCompleted(e) {

    // let results1 = document.querySelector("#search");
    // console.log("results1:");
    // console.log(results1);

    // let inputElem = document.querySelector("input[name='q']");
    // console.log("inputElem:");
    // console.log(inputElem);


    // if (document.readyState !== 'loading') {
    //     document.addEventListener('DOMContentLoaded', afterDOMLoaded);
    // }
    // else {
    //     afterDOMLoaded();
    // }
    console.log(document);
}

// initOnLoadCompleted();


window.addEventListener("load", initOnLoadCompleted, false);

// window.onload = function () {
//     console.log("hello");
// }


// function afterDOMLoaded(e) {
//     console.log('after dom loaded');
// }

// if (document.readyState !== 'complete') {
//     document.addEventListener('load', afterWindowLoaded);
// }
// else {
//     afterWindowLoaded();
// }
// function afterWindowLoaded(e) {
//     console.log('after window loaded');
// }
// document.addEventListener('DOMContentLoaded', afterDOMLoaded);
// document.addEventListener('load', afterWindowLoaded);
