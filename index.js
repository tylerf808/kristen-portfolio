const aboutMeLink = document.getElementById('about-me-link')
const aboutMeSection = document.getElementById('about-me-section')

aboutMeLink.addEventListener('click',() => {
   aboutMeSection.scrollIntoView({behavior: "smooth"})
})