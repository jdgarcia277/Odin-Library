//event listener for home card link
let cardLinkHome = document.querySelector('.card-links-home');
if(cardLinkHome !== null){
    cardLinkHome.addEventListener('click', function() {
        window.location.href='index.html';
    })
}
//event listener for catalog card link
let cardLinkCatalog = document.querySelector('.card-links-catalog');
if (cardLinkCatalog !== null){
    cardLinkCatalog.addEventListener('click', function(){
        window.location.href='catalog.html';
    })
}

  