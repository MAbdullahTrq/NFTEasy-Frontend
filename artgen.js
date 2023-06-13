document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.querySelector(".button");
  const artworkImg = document.getElementById("generated-artwork");

  generateButton.addEventListener("click", function () {
    generateArtwork()
      .then(function (generatedArtwork) {
        artworkImg.src = generatedArtwork;
        document.querySelector(".artwork-container").style.display = "block";
      })
      .catch(function (error) {
        console.error("Error generating artwork:", error);
      });
  });

  // Art Generator Logic

  // Generate a random 250x250 artwork
  function generateArtwork() {
    return new Promise(function (resolve, reject) {
      const pixelMan = generatePixelMan();

      // Create a canvas element
      const canvas = document.createElement("canvas");
      canvas.width = 250;
      canvas.height = 250;

      // Get the canvas context
      const context = canvas.getContext("2d");

      // Set the background color
      context.fillStyle = getRandomColor();
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the pixel man on the canvas
      drawPixelMan(context, pixelMan);

      // Get the data URL of the canvas
      const dataURL = canvas.toDataURL("image/png");

      // Resolve with the data URL
      resolve(dataURL);
    });
  }

  // Generate a pixel man figure
  function generatePixelMan() {
    const pixelMan = {
      bodyColor: getRandomColor(),
      headShape: getRandomHeadShape(),
      eyes: getRandomEyes(),
      mouth: getRandomMouth(),
      arms: getRandomArms(),
      legs: getRandomLegs(),
    };

    return pixelMan;
  }

  // Generate a random color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Generate a random head shape
  function getRandomHeadShape() {
    const headShapes = ["square", "circle", "triangle"];
    return headShapes[Math.floor(Math.random() * headShapes.length)];
  }

  // Generate random eyes
  function getRandomEyes() {
    const eyeStyles = ["dots", "lines", "ovals"];
    return eyeStyles[Math.floor(Math.random() * eyeStyles.length)];
  }

  // Generate random mouth
  function getRandomMouth() {
    const mouthStyles = ["smile", "frown", "neutral"];
    return mouthStyles[Math.floor(Math.random() * mouthStyles.length)];
  }

  // Generate random arms
  function getRandomArms() {
    const armStyles = ["straight", "bent", "raised"];
    return armStyles[Math.floor(Math.random() * armStyles.length)];
  }

  // Generate random legs
  function getRandomLegs() {
    const legStyles = ["straight", "bent", "wide"];
    return legStyles[Math.floor(Math.random() * legStyles.length)];
  }

  // Draw the pixel man on the canvas
  function drawPixelMan(context, pixelMan) {
    // Draw the body
    context.fillStyle = pixelMan.bodyColor;
    context.fillRect(80, 80, 90, 120);

    // Draw the head
    context.fillStyle = pixelMan.bodyColor;
    switch (pixelMan.headShape) {
      case "square":
        context.fillRect(95, 30, 60, 60);
        break;
      case "circle":
        context.beginPath();
        context.arc(125, 60, 30, 0, 2 * Math.PI);
        context.fill();
        break;
      case "triangle":
        context.beginPath();
        context.moveTo(95, 90);
        context.lineTo(155, 90);
        context.lineTo(125, 30);
        context.closePath();
        context.fill();
        break;
    }

    // Draw the eyes
    context.fillStyle = "black";
    switch (pixelMan.eyes) {
      case "dots":
        context.fillRect(110, 50, 10, 10);
        context.fillRect(130, 50, 10, 10);
        break;
      case "lines":
        context.fillRect(105, 45, 20, 5);
        context.fillRect(125, 45, 20, 5);
        break;
      case "ovals":
        context.beginPath();
        context.ellipse(115, 55, 5, 10, 0, 0, 2 * Math.PI);
        context.fill();
        context.beginPath();
        context.ellipse(135, 55, 5, 10, 0, 0, 2 * Math.PI);
        context.fill();
        break;
    }

    // Draw the mouth
    context.fillStyle = "red";
    switch (pixelMan.mouth) {
      case "smile":
        context.beginPath();
        context.arc(125, 85, 20, 0.1 * Math.PI, 0.9 * Math.PI);
        context.fill();
        break;
      case "frown":
        context.beginPath();
        context.arc(125, 100, 20, 1.1 * Math.PI, 1.9 * Math.PI);
        context.fill();
        break;
      case "neutral":
        context.fillRect(115, 85, 20, 10);
        break;
    }

    // Draw the arms
    context.fillStyle = pixelMan.bodyColor;
    switch (pixelMan.arms) {
      case "straight":
        context.fillRect(65, 110, 30, 10);
        context.fillRect(155, 110, 30, 10);
        break;
      case "bent":
        context.fillRect(60, 120, 20, 50);
        context.fillRect(160, 120, 20, 50);
        break;
      case "raised":
        context.fillRect(65, 70, 30, 80);
        context.fillRect(155, 70, 30, 80);
        break;
    }

    // Draw the legs
    context.fillStyle = pixelMan.bodyColor;
    switch (pixelMan.legs) {
      case "straight":
        context.fillRect(100, 200, 20, 30);
        context.fillRect(130, 200, 20, 30);
        break;
      case "bent":
        context.fillRect(95, 170, 30, 60);
        context.fillRect(125, 170, 30, 60);
        break;
      case "wide":
        context.fillRect(75, 200, 50, 30);
        context.fillRect(125, 200, 50, 30);
        break;
    }
  }

});
