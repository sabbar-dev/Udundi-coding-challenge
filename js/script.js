if(screen.width > 767){

    var detailsButton = document.getElementById("details-btn");
    var modalOverlay = document.querySelector(".modalOverlay");
    var closeButton = document.querySelector(".close-btn");
    var modal = document.querySelector(".messageWrapper");

    TweenMax.set([modalOverlay, modal], { autoAlpha: 0 });

    detailsButton.addEventListener("click", function() {
    var newRect = getPosition(modal, detailsButton);

    TweenMax.set(modal, {
        x: newRect.left,
        y: newRect.top,
        width: newRect.width,
        height: newRect.height
    });

    var tl = new TimelineMax();



    tl.to(modalOverlay, 0.5, { autoAlpha: 1 })
    // .fromTo("modal",0.6, {'border-radius':'60%'}, {'border-radius':'0'})
    .to(modal, 0.3, {
        x: 0,
        y: 0,
        width: 580,
        height: 702,
        autoAlpha: 1,
        // duration:1,
        'border-radius':'0'
    })
    .from('.message',{
        x:-100,
        opacity:0,
    })
    .to('.main-title',{
        opacity:0,
    },"-=1")

    });

    modalOverlay.addEventListener("click", function() {
    var newRect = getPosition(modal, detailsButton);
    var tl = new TimelineMax();

    tl.to(modal, 0.5, {
        autoAlpha: 0,
        x: newRect.left,
        y: newRect.top,
        height: newRect.height,
        width: newRect.width
    })
    .to(".modalOverlay", 0.5, { autoAlpha: 0 })
    .to('.main-title',{
            opacity:1,
        },"-=1.4")
    });

    closeButton.addEventListener("click", function() {
        var newRect = getPosition(modal, detailsButton);
        var tl = new TimelineMax();
    
        tl.to(modal, 0.5, {
        autoAlpha: 0,
        x: newRect.left,
        y: newRect.top,
        height: newRect.height,
        width: newRect.width
        })
        .to(".modalOverlay", 0.5, { autoAlpha: 0 })
        .to('.main-title',{
            opacity:1,
        },"-=1.4")
    });



    function getPosition(elem, target) {
    var targetRect = target.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();

    TweenLite.set(elem, {
        x: 0,
        y: 0,
        width: targetRect.width,
        height: targetRect.height
    });
    var newRect = elem.getBoundingClientRect();
    TweenLite.set(elem, { width: elemRect.width, height: elemRect.height });
    return {
        left: targetRect.left - newRect.left,
        top: targetRect.top - newRect.top,
        width: newRect.width,
        height: newRect.height
    };
    }
} else {
    // alert("hello");
    // var abc = document.getElementById("details-btn");
    // alert(abc);
    // abc.addEventListener('click',mobileModal);
    // function mobileModal(){
    //     alert("Hello");
    // };



    const detailsbtn = document.querySelector('#details-btn');

    detailsbtn.addEventListener('click',myFun);
    
    function myFun(){
        alert('welcome');
    }





}   

    