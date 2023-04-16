/** Newsletter field **/

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '370923');


// Cookies
    function showCookieNotification() {
      const cookieNotification = document.querySelector('.cookie-notification');
      cookieNotification.style.display = 'block';
    }

    function hideCookieNotification() {
      const cookieNotification = document.querySelector('.cookie-notification');
      cookieNotification.style.display = 'none';
    }

    function acceptCookie() {
      hideCookieNotification();
      localStorage.setItem('accepted-cookie', true);
    }

    // sprawdzenie, czy użytkownik wcześniej zaakceptował pliki cookie
    const acceptedCookie = localStorage.getItem('accepted-cookie');
    if (!acceptedCookie) {
      showCookieNotification();
    }

    const acceptCookieBtn = document.querySelector('.accept-cookie-btn');
    acceptCookieBtn.addEventListener('click', acceptCookie);

      

// logo in menu as button
      const img = document.querySelector('.logo');
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
  window.location.href = '../index.html';
});


function yesFunction() {
  var nav = document.querySelector('div.navi > ul');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}