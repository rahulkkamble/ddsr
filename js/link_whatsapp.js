document.addEventListener('DOMContentLoaded', function () {
    // Create a container for the WhatsApp logo
    const whatsappLogoContainer = document.createElement('div');
    whatsappLogoContainer.id = 'whatsapp-logo';

    // Create a link element
    const whatsappLink = document.createElement('a');
    const phoneNumber = '123123123';
    whatsappLink.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    whatsappLink.target = '_blank';

    // Create an image element for the WhatsApp logo
    const whatsappImage = document.createElement('img');
    whatsappImage.src = 'https://img.icons8.com/color/48/whatsapp--v1.png';
    whatsappImage.alt = 'WhatsApp Logo';

    // Append the image to the link
    whatsappLink.appendChild(whatsappImage);

    // Append the link to the container
    whatsappLogoContainer.appendChild(whatsappLink);

    // Append the container to the body
    document.body.appendChild(whatsappLogoContainer);

    // Add CSS styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
    #whatsapp-logo {
        position: fixed;
        bottom: -100px; /* Start hidden below the viewport */
        right: 20px;
        z-index: 1000;
        transition: bottom 0.5s ease; /* Transition effect */
      }
  
      #whatsapp-logo img {
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
  
      #whatsapp-logo.visible {
        bottom: 20px; /* Visible position */
      }
    `;
    document.head.appendChild(style);
});

// Function to check scroll direction
  let lastScrollTop = 0;
  function handleScroll() {
    const whatsappLogo = document.getElementById('whatsapp-logo');
    const currentScroll = window.scrollY || window.pageYOffset;
    if (whatsappLogo && currentScroll > lastScrollTop) {
      // Scrolling down
      whatsappLogo.classList.remove('visible');
    } else if(whatsappLogo) {
      // Scrolling up
      whatsappLogo.classList.add('visible');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }

// Initial check in case the page is already scrolled
handleScroll();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add the script to handle the click event (optional, already handled by the link target)
document.addEventListener('DOMContentLoaded', function () {
    const whatsappLogo = document.getElementById('whatsapp-logo');
    whatsappLogo.addEventListener('click', function () {
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
    });
});
