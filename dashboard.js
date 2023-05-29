// Array to store the collections
let collections = [];

// Function to add a new collection
function addCollection() {
  const collectionCounter = collections.length + 1;
  const collection = {
    name: `Collection ${collectionCounter}`,
    totalNFTs: 0,
    soldNFTs: 0,
    availableNFTs: 0,
    image: `img/${collectionCounter}.jpg`
  };
  collections.push(collection);
  renderCollectionBlocks();
}

// Function to mint a new NFT
function mintNFT(index) {
  const collection = collections[index];
  collection.totalNFTs += 1;
  collection.availableNFTs += 1;
  renderCollectionBlocks();
}

// Function to sell an NFT
function sellNFT(index) {
  const collection = collections[index];
  if (collection.availableNFTs > 0) {
    collection.availableNFTs -= 1;
    collection.soldNFTs += 1;
    renderCollectionBlocks();
  }
}

// Function to render the collection blocks
function renderCollectionBlocks() {
  const collectionContainer = document.querySelector(".collection-container");
  collectionContainer.innerHTML = "";

  collections.forEach((collection, index) => {
    const collectionBlock = document.createElement("div");
    collectionBlock.classList.add("collection-block");

    const collectionImage = document.createElement("img");
    collectionImage.src = collection.image;
    collectionBlock.appendChild(collectionImage);

    const collectionName = document.createElement("h2");
    collectionName.innerText = collection.name;
    collectionBlock.appendChild(collectionName);

    const collectionDetails = document.createElement("p");
    collectionDetails.innerText = `Total: ${collection.totalNFTs} | Sold: ${collection.soldNFTs} | Available: ${collection.availableNFTs}`;
    collectionBlock.appendChild(collectionDetails);

    const mintButton = document.createElement("button");
    mintButton.innerText = "Mint NFT";
    mintButton.addEventListener("click", () => {
      mintNFT(index);
    });
    collectionBlock.appendChild(mintButton);

    const sellButton = document.createElement("button");
    sellButton.innerText = "Sell NFT";
    sellButton.addEventListener("click", () => {
      sellNFT(index);
    });
    collectionBlock.appendChild(sellButton);

    collectionContainer.appendChild(collectionBlock);
  });
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Add event listener to the "Add Collection" button
const addCollectionButton = document.querySelector(".add-collection-button");
addCollectionButton.addEventListener("click", addCollection);

// const backtoTopButton = document.querySelector(".back-to-button");
// backtoTopButton.addEventListener("click", topFunction);

// Render the initial collection blocks
renderCollectionBlocks();