
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    } 
  }, true)


   /* Porfolio and filter
   */
  const buttonSection = document.querySelectorAll('.buttons-section button');
  const cardSection = document.querySelectorAll('.cards-section .card');
  let small=document.querySelector(".strink");
  
  const filtercards = (e) => {
      document.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      
      cardSection.forEach((card) => {
          card.classList.add('hide');
  
          if (
              card.dataset.name === e.target.dataset.name ||
              e.target.dataset.name === 'all'
          ) {
            // card.style.transition=" width 2s";
              card.classList.remove('hide');
              // card.classList.add('small');
          }
      });
  };
  
  buttonSection.forEach((button) =>
      button.addEventListener('click', filtercards)
  );
  






var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var view = document.getElementById("View");
var view1 = document.getElementById("View1");
var view2 = document.getElementById("View2");
var view3 = document.getElementById("View3");
var view4 = document.getElementById("View4");
var view5 = document.getElementById("View5");
var view6 = document.getElementById("View6");
var view7 = document.getElementById("View7");
var view8 = document.getElementById("View8");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

view.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Photoshop Poster design";
}
view1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Standy design";
}
view2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Poster design";
}
view3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Web design";
}
view4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Web design";
}
view5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Web design";
}
view6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Banner design";
}
view7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Poster design";
}
view8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src ;
  captionText.innerHTML = "Poster design";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


  new PureCounter();

})()


// Resume section

