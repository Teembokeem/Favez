export function selectImage() {
  return `
      var originalPostMessage = window.postMessage;
      var patchedPostMessage = function(message, targetOrigin, transfer) { 
        originalPostMessage(message, targetOrigin, transfer);
      };

      patchedPostMessage.toString = function() { 
        return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
      };

      window.postMessage = patchedPostMessage;
      var imageContainer = document.querySelector('div.container');
      imageContainer.onclick = function(e) {
        window.postMessage(e.target.getAttribute('src'))
      }
    `;
}
