console.log("Script connected");


let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// search bar results
// Your product list
const products = [
  "Bubblegum Body Scrub",
  "Coconut & Body Scrub (combo)",
  "Peppermint body scrub",
  "Tumeric body scrub",
  "Citrus body scrub",
  "Coconut oil",
  "Lavender Body scrub "
];
c

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchForm = searchInput.closest("form");

searchInput.addEventListener("input", function() {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query) {
    const filtered = products.filter(item => item.toLowerCase().includes(query));

    filtered.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;

      li.addEventListener("click", () => {
        alert("You selected: " + item); // optional action
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchResults.classList.remove("show");
      });

      searchResults.appendChild(li);
    });

    searchResults.classList.add("show");
  } else {
    searchResults.classList.remove("show");
  }
});

// Clear search when form is submitted
searchForm.addEventListener("submit", function(e) {
  e.preventDefault();
  searchInput.value = "";
  searchResults.innerHTML = "";
  searchResults.classList.remove("show");
});

