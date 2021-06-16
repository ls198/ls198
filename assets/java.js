/* wait till website is loaded */
document.addEventListener('DOMContentLoaded', websiteLoaded);
document.addEventListener('DOMContentLoaded', newQuote);

function newQuote()
  {
    let quotes = [
      '"Hello World!"',
      '"Das Schlimmste ist, wenn das Bier alle ist"',
      '"Säufste, stirbste, säufste nich, stirbste och, also säufste!"',
      '"Eat. Shit. Die."',
      '"Kein Bier vor Vier"',
      '"Die drei Technologien einer Webseite: HTML, CSS, JavaScript"',
      '"Liebe, Glaube, Leidenschaft!"',
      '"Alle Blumen blühen, nur das Fürther Kleeblatt nicht"',
      '"Come on you Gunners!"',
      '"What do we think of Tottenham?"',
      '"Up, Up, Down, Down, Left, Right, Left, Right, B, A"',
      '"Wer mit einem Känguru befreundet ist, hat wahrscheinlich auch eine Giraffe als Nachbarn. Oder wars ein Pinguin? Äh, Moment... Wie ging des nochmal? Ach verdammt. Ich kann mir diese Sprüche immer so schlecht merken." - Oscar Wilde'
    ];

    let pick = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[pick];
    console.log('Hallo');
};

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
