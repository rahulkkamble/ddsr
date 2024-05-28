$(".tabs__button").on("click", function () {
    document.querySelectorAll("[data-anim-child^='img-right']").forEach(x => x.classList.remove("is-in-view"));
    setTimeout(() => {
        document.querySelectorAll("[data-anim-child^='img-right']").forEach(x => x.classList.add("is-in-view"));
    }, 10);

});

// active toggle for project map section
$(document).ready(function () {
    $('.project').click(function () {
        $('.project').removeClass('active');
        $(this).addClass('active');
    });
});

// selected location should be displayed on map
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');
    const mapIframe = document.querySelector('.gmap_iframe');
    projects.forEach(project => {
        project.addEventListener('click', function () {
            const city = this.getAttribute('data-city');
            const mapQuery = `https://maps.google.com/maps?width=600&height=500&hl=en&q=${encodeURIComponent(city)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
            mapIframe.src = mapQuery;
            console.log(city)
        });
    });
});