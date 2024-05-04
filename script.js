function generateQRCode() {
    var text = document.getElementById("text-input").value;
    $("#qrcode").empty().qrcode({ text: text });
  }
  
  function saveQRCode() {
    var qrCodeElement = document.getElementById("qrcode").querySelector("canvas");
    var image = qrCodeElement.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    link.click();
  }
  
      function generateQRCode() {
    var text = document.getElementById("text-input").value;
    $("#qrcode").empty().qrcode({ text: text });
    
    // Show the save button when QR code is generated
    $(".save-button").show();
  }
  
  function saveQRCode() {
    var qrCodeElement = document.getElementById("qrcode").querySelector("canvas");
  
    // Create a new canvas with white background and padding
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = qrCodeElement.width + 26; // 13 pixels padding on each side
    canvas.height = qrCodeElement.height + 26;
  
    // Set white background
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Draw the QR code on the new canvas with padding
    context.drawImage(qrCodeElement, 13, 13);
  
    // Convert the canvas to a PNG image
    var image = canvas.toDataURL("image/png");
  
    // Create a download link and save the QR code image
    var link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    link.click();
  }