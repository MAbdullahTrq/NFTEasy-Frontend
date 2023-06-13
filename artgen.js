document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector(".button");
    const artworkImg = document.getElementById("generated-artwork");
  
    generateButton.addEventListener("click", function() {
      generateArtwork()
        .then(function(generatedArtwork) {
          artworkImg.src = generatedArtwork;
          document.querySelector(".artwork-container").style.display = "block";
        })
        .catch(function(error) {
          console.error("Error generating artwork:", error);
        });
    });
  
    // function generateArtwork() {
    //   return new Promise(function(resolve, reject) {
    //     const canvas = document.createElement("canvas");
    //     const context = canvas.getContext("2d");
  
    //     // Set canvas dimensions
    //     canvas.width = 250;
    //     canvas.height = 250;
  
    //     // Generate random artwork
    //     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    //     context.fillStyle = randomColor;
    //     context.fillRect(0, 0, canvas.width, canvas.height);
  
    //     // Convert canvas to data URL
    //     const dataURL = canvas.toDataURL("image/png");
  
    //     resolve(dataURL);
    //   });
    // }

    // Art Generator Logic

// Generate a random 250x250 artwork
function generateArtwork() {
  // Generate a pixel man figure
  const pixelMan = generatePixelMan();

  // Create the artwork container
  const artworkContainer = document.createElement('div');
  artworkContainer.classList.add('artwork');

  // Set the background color of the artwork container
  artworkContainer.style.backgroundColor = getRandomColor();

  // Create the pixel man element
  const pixelManElement = createPixelManElement(pixelMan);

  // Append the pixel man element to the artwork container
  artworkContainer.appendChild(pixelManElement);

  // Append the artwork container to the document body
  document.body.appendChild(artworkContainer);
}

// Generate a random color
function getRandomColor() {
  // Generate a random RGB value
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return the RGB color string
  return `rgb(${r}, ${g}, ${b})`;
}

// Generate a pixel man figure
function generatePixelMan() {
  const pixelMan = {
    bodyColor: getRandomColor(),
    headShape: getRandomHeadShape(),
    eyes: getRandomEyes(),
    mouth: getRandomMouth(),
    arms: getRandomArms(),
    legs: getRandomLegs()
  };

  return pixelMan;
}

// Create the pixel man element
function createPixelManElement(pixelMan) {
  const pixelManElement = document.createElement('div');
  pixelManElement.classList.add('pixel-man');

  // Set the body color
  pixelManElement.style.backgroundColor = pixelMan.bodyColor;

  // Set the head shape
  pixelManElement.classList.add(`head-${pixelMan.headShape}`);

  // Set the eyes style
  pixelManElement.classList.add(`eyes-${pixelMan.eyes}`);

  // Set the mouth style
  pixelManElement.classList.add(`mouth-${pixelMan.mouth}`);

  // Set the arms style
  pixelManElement.classList.add(`arms-${pixelMan.arms}`);

  // Set the legs style
  pixelManElement.classList.add(`legs-${pixelMan.legs}`);

  return pixelManElement;
}

// Generate a random head shape
function getRandomHeadShape() {
  const headShapes = ['square', 'circle', 'triangle'];
  return headShapes[Math.floor(Math.random() * headShapes.length)];
}

// Generate random eyes
function getRandomEyes() {
  const eyeStyles = ['dots', 'lines', 'ovals'];
  return eyeStyles[Math.floor(Math.random() * eyeStyles.length)];
}

// Generate random mouth
function getRandomMouth() {
  const mouthStyles = ['smile', 'frown', 'neutral'];
  return mouthStyles[Math.floor(Math.random() * mouthStyles.length)];
}

// Generate random arms
function getRandomArms() {
  const armStyles = ['straight', 'bent', 'raised'];
  return armStyles[Math.floor(Math.random() * armStyles.length)];
}

// Generate random legs
function getRandomLegs() {
  const legStyles = ['straight', 'bent', 'wide'];
  return legStyles[Math.floor(Math.random() * legStyles.length)];
}

  });
  