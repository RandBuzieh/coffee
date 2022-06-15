const cohorts = "interestCohort";
const documentProto = Document.prototype;
const flocSupported = cohorts in documentProto;

if (!flocSupported) {
  return;
}

const descriptor = Object.getOwnPropertyDescriptor(documentProto, cohorts);
const writable = descriptor && descriptor.writable;
if (writable) {
  const proxy = new Proxy(documentProto[cohorts], { apply: () => Promise.reject() });
  const config = {
    writable: false,
    value: proxy,
    configurable: false,
    enumerable: false,
  };
  Object.defineProperty(documentProto, cohorts, config);
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
  slideIndex++;
  if (slideIndex > slides.length){
      slideIndex = 1
    }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function done()
{
  alert("Thank you , We reseved your order ");
  location.reload();
  
}
