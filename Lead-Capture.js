// Load the Aurora Lead Capture SDK
(function() {
    var script = document.createElement('script');
    script.id = 'auroraLCAI';
    script.src = 'https://leads.aurorasolar.com/lead-capture-sdk-v1.js';
    script.type = 'text/javascript';
    script.setAttribute('data-org-id', '690f6461-5ab1-452f-9048-c69854aea4dc'); // replace 'your-organization-id' with your actual organization id
    document.head.appendChild(script);
  })();
  
  // Define the custom element
  class LcaiWidget extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<div id="lcaiWidget"></div>';
      this.className = 'lcaiCta';
    }
  }
  // Define the custom element
  customElements.define('lcai-widget', LcaiWidget);
  
  // Attach Aurora Lead Capture function to all elements with the class 'lcaiCta'
  window.addEventListener('load', function() {
    if (window.AuroraLeadCapture) {
      window.AuroraLeadCapture.setupCtas('.lcaiCta');
    }
  });
  