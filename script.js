const testimonials = [
  {
    src: "./images/image-tanya.jpg",
    alt: "Tanya",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
          excited about the future. ”`,
    name: "Tanya Sinclair",
    jobTitle: "UX Engineer"
  },
  {
    src: "./images/image-john.jpg",
    alt: "Jhon",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
          The depth the instructors go into is incredible. I now feel so confident about 
          starting up as a professional developer. ”`,
    name:"John Tarkpor",
    jobTitle: "Junior Front-end Developer",
  }
]
let index = 0;

const nextBtn = document.querySelector(".btn.next");
const previousBtn = document.querySelector(".btn.previous");
const testimonialPic = document.querySelector(".testimonial_pic");
const testimonialText = document.querySelector(".testimonialText p");
const name = document.querySelector(".name");
const jobTitle = document.querySelector(".jobTitle");

function showNext() {
  index += 1;
  if (index > testimonials.length - 1) {
    index = 0;
  }
  updateContent(index);
}

function showPrevious() {
  index -= 1;
  if (index < 0) {
    index = testimonials.length - 1;
  }
  updateContent(index);
}

function updateContent(index) {
  testimonialPic.src = testimonials[index].src;
  testimonialPic.alt = testimonials[index].alt;
  testimonialText.textContent = testimonials[index].text;
  name.textContent = testimonials[index].name;
  jobTitle.textContent = testimonials[index].jobTitle;
}

nextBtn.addEventListener("click", showNext);
previousBtn.addEventListener("click", showPrevious);
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    showNext();
  } else if (e.key === "ArrowLeft"){
    showPrevious();
  }
})