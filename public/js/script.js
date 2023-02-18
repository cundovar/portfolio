let link = document.getElementById('link')
let burger = document.getElementById('burger1')
// let menu = document.querySelector('.menu')

link.addEventListener('click', function(e) {
   e.preventDefault()
burger.classList.toggle('opene')
// menu.classList.toggle('responsive')
})

var openBtn = document.getElementById("link");
var clo = document.querySelector(".clo");
openBtn.addEventListener('click', function(e) {
    e.preventDefault()
 clo.classList.toggle('activee')

 })





// ************ carousel 

// const imageGrid = document.querySelector(".image-grid");
// const links = imageGrid.querySelectorAll("a");
// const imgs = imageGrid.querySelectorAll("img");
// const lightboxModal = document.getElementById("lightbox-modal");
// const bsModal = new bootstrap.Modal(lightboxModal);
// const modalBody = document.querySelector(".modal-body .container-fluid");

// for (const link of links) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const currentImg = link.querySelector("img");
//     const lightboxCarousel = document.getElementById("lightboxCarousel");
//     if (lightboxCarousel) {
//       const parentCol = link.parentElement.parentElement;
//       const index = [...parentCol.parentElement.children].indexOf(parentCol);
//       const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
//       bsCarousel.to(index);
//     } else {
//       createCarousel(currentImg);
//     }
//     bsModal.show();
//   });
// }

// function createCarousel(img) {
//   const markup = `
//     <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
//       <div class="carousel-inner">
//         ${createSlides(img)}
//       </div> 
//       <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
//        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//        <span class="visually-hidden">Previous</span>
//       </button>
//       <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//     `;

//   modalBody.innerHTML = markup;
// }

// function createSlides(img) {
//   let markup = "";
//   const currentImgSrc = img.getAttribute("src");

//   for (const img of imgs) {
//     const imgSrc = img.getAttribute("src");
//     const imgAlt = img.getAttribute("alt");
//     const imgCaption = img.getAttribute("data-caption");

//     markup += `
//     <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
//       <img src=${imgSrc} alt=${imgAlt}>
//       ${imgCaption ? createCaption(imgCaption) : ""}
//     </div>
//     `;
//   }

//   return markup;
// }qs

// function createCaption(caption) {
//   return `<div class="carousel-caption">
//      <p class="m-0">${caption}</p>
//     </div>`;
// }
 


//*****************noir */

const submitt = document.querySelector('.submitt')
const result = document.querySelector('#numberSelected');
const hidenn = document.querySelector('#container1');

window.onload = () => {
    let touches = document.querySelectorAll(".num")
    for (let touche of touches) {
        touche.addEventListener("click", iclick);
    }
}

function iclick() {
    touche = this.innerText;

    result.textContent = touche;
    
}
if(submitt){
submitt.addEventListener('click', clik);
}


function clik() {
    if (hidenn.style.display === "none") {
        hidenn.style.display = "flex";
    } else if (result.textContent = touche) {

        hidenn.style.display = "flex";
        

    } else {
        hidenn.style.display = "none";
    }

}

// /**********scroll */
//div qui bougent
const ratio =.5;
 const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  const handleIntersect=function(entries,observer){
    entries.forEach(function(entry) {
      if(entry.intersectionRatio>ratio){
        // console.log('visible')
        entry.target.classList.add("scrolly-visible")
        entry.target.classList.add("scrolly2-visible")
        entry.target.classList.add("scrolly3-visible")
        observer.unobserve(entry.target)
      }else{
        // console.log('invisible')
      }
      
    });
    // console.log('handleIntersect')

  };
  const observer = new IntersectionObserver(handleIntersect, options);
   document.querySelectorAll('.scrolly').forEach(function(r){
 observer.observe(r)
   }) ;
   document.querySelectorAll('.scrolly2').forEach(function(r){
 observer.observe(r)
   }) ;
   document.querySelectorAll('.scrolly3').forEach(function(r){
 observer.observe(r)
   }) ;
//    div qui apparaissent
const ration2 = .9;
const option = {
    root :null,
    rootMargin : '0px',
    threshold :ration2
}
const changement=function(entriess,observer){
    entriess.forEach(function(entrys){


        if( entrys.intersectionRatio>ration2){
            console.log('fff')
            entrys.target.classList.add("apear-visible")
            observer.unobserve(entrys.target)
    }
       
    })
}
    const observers= new IntersectionObserver(changement,option);
    document.querySelectorAll(".apear").forEach(function(r){
        observers.observe(r)
    })



//************** */ typing text********************
var i = 0;
var ab = 0;

var txt = 'Bienvenue sur ma page de présentation'; 
var txt1='Bonjour je m\'appelle Facundo';
// var teext = 'animateur périscolaire à la mairis de Chelles. Cala à été très dynamique et il fallait avaoir un bon esprit d\'equipe et de la patience. Tout cela avec de la bonne humeur bien-sûr !';
// var teeeext = ' Formation intensive de 6 mois pour approfondir mes connaissances du mon web, j\'ai beaucoups transpiré, mais cela vous vous en douté.';
// var teexto = ' Responsable d’une Responsable d\'une equipe de 3 personnes, mes tâches quotidiennes firent : conditionnement des produits ( palettes de produits à destination des clients), renfort occasionnel après des chocolatiers ( moulage, démoulage,préparation de praliné...) ';

var speed = 50; /* The speed/duration of the effect in milliseconds */
var speed2 = 100;
window.addEventListener('load',typeWriter1)
function typeWriter1() {
    if (ab < txt1.length) {
      document.getElementById("text").innerHTML += txt1.charAt(ab);
      ab++;
      setTimeout(typeWriter1, speed2);
    }
   
  }


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
// animateur periscolaire

// function typeWritery() {
//   if (i < teext.length) {
//     document.getElementById("animateur").innerHTML += teext.charAt(i);
//     i++;
//     setTimeout(typeWritery, speed);
//   }
// }
// doranco


// function typeWriteryy() {
//   if (i < teeeext.length) {
//     document.getElementById("doranco").innerHTML += teeeext.charAt(i);
//     i++;
//     setTimeout(typeWriteryy, speed);
//   }
// }
// preparateur de commande

