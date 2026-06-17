console.log("JS Loaded!");
console.log(document.querySelectorAll(".hidden"));

// ======================
// Smooth Scroll Navigation
// ======================

document.querySelectorAll('nav a').forEach(anchor =>
{
   anchor.addEventListener('click', function(e)
   {
      e.preventDefault();
      const target = document.querySelector(this
         .getAttribute('href'));
      if (target)
      {
         target.scrollIntoView(
         {
            behavior: 'smooth'
         });
      }
   });
});

// ======================
// Active Navigation Link
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll",
   () =>
   {
      let current = "";
      sections.forEach(section =>
      {
         const sectionTop = section.offsetTop - 150;
         if (window.scrollY >= sectionTop)
         {
            current = section.getAttribute("id");
         }
      });
      navLinks.forEach(link =>
      {
         link.classList.remove("active");
         if (link.getAttribute("href") === `#${current}`)
         {
            link.classList.add("active");
         }
      });
   });

// ======================
// Scroll Reveal Animation
// ======================

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) =>
{
   entries.forEach((entry) =>
   {
      if (entry.isIntersecting)
      {
         entry.target.classList.add("show");
      }
   });
},
{
   threshold: 0.15
});
hiddenElements.forEach((el) =>
{
   observer.observe(el);
});

const apiKey = "7b75a60dc30c48002d981e4be432360f";
const city = "Meerut";

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${meerut}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();

        document.getElementById("city").textContent =
            data.name;

        document.getElementById("temp").textContent =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById("condition").textContent =
            data.weather[0].description;

    } catch (error) {
        document.getElementById("condition").textContent =
            "Unable to load weather";
    }
}

getWeather();

// ======================
// Dynamic Footer Year
// ======================

const yearElement = document.getElementById("year");
if (yearElement)
{
   yearElement.textContent = new Date().getFullYear();
}