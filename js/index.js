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

const structuralData = 
`<div class="roomCard__content mt-30">
<div class="d-flex justify-between items-center">
    <h3 class="roomCard__title lh-11 text-40 md:text-24">DDSR Mumbai Ajinkanys
    </h3>
    <img src="https://ddsrgroup.com/storage/laravel-grapesjs/media/qr_ajinkyans.PNG" alt="" class="qr-code-box pt-10 pt-md-0">
</div>
<div class="d-flex x-gap-30 pt-30">
    <div class="d-flex items-cen text-accent-1">
        <i class="icon-size text-20 mt-1 mr-10"></i>
			MAHARERA NO: P52000055103
	</div>
</div>
<div class="d-flex x-gap-30 pt-30">
    <div class="d-flex items-cen text-accent-1">
        <i class="icon-size text-20 mt-1 mr-10"></i>
						G+20 storey tower
	</div>
</div>
<div class="d-flex x-gap-30 pt-30">
    <div class="d-flex items-cen text-accent-1">
        <i class="icon-size text-20 mt-1 mr-10"></i>
						Sector 19, Kharghar, Navi Mumbai
	</div>
</div>
<div class="d-flex x-gap-30 pt-30">
    <div class="d-flex items-cen text-accent-1">
        <i class="icon-size text-20 mt-1 mr-10"></i>
						Architect: Satish Ahuja | R. C. C. Consultant: S. R. Consultants
	</div>
</div>
</div>
<div class="d-none redirecter">www.ggg.com</div>`;

const helpBlockData = `<p class="text-danger">To change qr code - 
<strong>Right click -> Image Properties -></strong> and change <strong>URL</strong> of selected project, 
You can <strong>UPLOAD</strong> QR codes and also <strong>GET</strong> QR image link from <a href="https://www.ddsrgroup.com/admin/editpage/68" target="popup" onclick="window.open('https://www.ddsrgroup.com/admin/editpage/68','QR Codes','width=800,height=600')"><strong>HERE</strong></a></p>`;

// const selectionElement = document.querySelector('.form-control.selection-element');
const selectionElement = document.querySelector('#type');

const allTypes = ['similar_projects', 'upcoming_projects', 'completed_projects', 'ongoing_projects', 'near_possession_projects'];
// const helpBlock = document.querySelector('.ckeditbox .help-block');
const helpBlock = document.querySelector('#content').parentNode.querySelector('span.help-block');

selectionElement.addEventListener('change', () => {
    const selectedOption = selectionElement.value;
    allTypes.forEach(type => {
        if (type === selectedOption) {
            changeCKEditorWith(selectedOption);
        }
    });
});

function changeCKEditorWith(selectedOption) {
    console.log('successfully extracted selected value', selectedOption);
    // Ensure the CKEditor instance is ready before setting data
    if (CKEDITOR.instances.content) {
        CKEDITOR.instances.content.setData(structuralData);
        helpBlock.innerHTML=helpBlockData;
    } else {
        // Initialize CKEditor and set data when it's ready
        CKEDITOR.replace('content', {
            on: {
                instanceReady: function() {
                    this.setData(structuralData);
                    helpBlock.innerHTML=helpBlockData;
                }
            }
        });
    }
}

// Initialize CKEditor if not already initialized
if (!CKEDITOR.instances.content) {
    CKEDITOR.replace('content');
}



