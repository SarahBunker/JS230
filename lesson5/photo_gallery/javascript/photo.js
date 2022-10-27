// $(function () {
//   let $mainImage = $('figure img');
//   let $thumbnails = $('li img');
//
//   function displayActiveImage() {
//     let $activeImage = $(".active img");
//
//     $mainImage.attr('src', $activeImage.attr('src'));
//   }
//
//   function removeActiveClass() {
//     let $activeImage = $(".active img");
//     $activeImage.removeClass('active');
//   }
//
//   displayActiveImage();
//
//   $thumbnails.forEach( $thumbnail => {
//     $thumbnail.click( event => {
//       removeActiveClass();
//       thumbnail = event.currentTarget;
//       thumbnail.classList.add('active');
//       displayActiveImage();
//     })
//   })
// });


document.addEventListener('DOMContentLoaded', event => {
  let mainImage = document.querySelector('figure img');
  let thumbnailLinks = document.querySelectorAll('li');

  function displayActiveImage() {
    let activeImage = document.querySelector('.active img');
    mainImage.setAttribute('src', activeImage.getAttribute('src'));
  }

  function findActiveImage() {
    return document.querySelector('.active img');
  }

  function deactivateImage() {
    let currentActive = findActiveImage();
    // debugger;
    currentActive.parentElement.classList.remove('active');
  }

  displayActiveImage();

  thumbnailLinks.forEach(link => {
    link.addEventListener( "click", event => {
      let thumbnail = event.currentTarget.querySelector('img');
      if (thumbnail === findActiveImage()) return;
      // debugger;
      deactivateImage();
      thumbnail.parentElement.classList.add('active');
      displayActiveImage();
    })
  })
});
