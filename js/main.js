let navLinks = document.getElementById('nav-links');
let closeBG = document.querySelector('.close_bg');

const toggleMenu = (menuStatus) =>
{
    console.log('toggleMenu called');

    if (!menuStatus)
    {
        scrollToTop();
        disableScroll();
        navLinks.style.right = '0%';
        setTimeout(function () {
            closeBG.style.right = '0%';
        }, 750);
    }
    else
    {
        enableScroll();
        navLinks.style.right = '-200%';
        closeBG.style.right = '-500%';
    }
}

//scroll to top
const scrollToTop = () =>
{
    window.scrollTo(0, 0);
}

//left: 37, up: 38, right: 39, down: 40,
//spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

const preventDefault = (e) =>
{
    e.preventDefault();
}

const preventDefaultForScrollKeys = (e) =>
{
    if (keys[e.keyCode])
    {
        preventDefault(e);
        return false;
    }
}

//modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try
{
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

//disables scrolling
const disableScroll = () =>
{
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

//re-enables scrolling
const enableScroll = () =>
{
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



