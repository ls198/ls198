/* wait till website is loaded */
document.addEventListener('DOMContentLoaded', websiteLoaded);

function websiteLoaded() {
  console.log('Website loaded');

  /* Select the menu */
  const menu = document.querySelector('#menu');

  /* add click function to the menu */
  menu.onclick = function () {
    console.log('menu clicked');

    /* toggle class on our navbar */
    document.querySelector('.nav-bar').classList.toggle('mobile-active');
    document.querySelector('body').classList.toggle('mobile-active');
  };
};

const change = document.querySelector('#change');

change.mouseover = function() {
  console.log('mouseover');
};
