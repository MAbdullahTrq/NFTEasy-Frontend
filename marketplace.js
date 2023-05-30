// JavaScript code
const nftContainer = document.getElementById('nft-container');
const popupContainer = document.getElementById('popup-container');
let nftData = null;
// Function to retrieve NFT data from the database
function retrieveNFTData() {
  // Make an AJAX request to the PHP file
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'getNFTData.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      nftData = JSON.parse(xhr.responseText);
      displayNFTs(nftData);
    }
  };
  xhr.send();
}

// Function to display NFTs
function displayNFTs(nftData) {
  nftContainer.innerHTML = '';

  nftData.forEach(function callback(nft, index) {
    const nftBlock = document.createElement('div');
    nftBlock.className = 'nft-block';
    nftBlock.innerHTML = `
      <img src="${nft.tokenURI}" class="collection-img" alt="NFT Image">
      <div class="collection-text">
      <p>TokenID: ${nft.tokenID}</p>
      <p>Price: ${nft.price} eth</p>
      <button onclick="openPopup(${index})">Buy</button>
      </div>
    `;

    nftContainer.appendChild(nftBlock);
  });
}

// Function to open the popup
function openPopup(index) {
  // AJAX request to get the NFT details from the database using tokenID
  // Implement your code to retrieve the specific NFT details from the database

  // Example code to create and display the popup
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <img src=${nftData[index].tokenURI} alt="NFT Image">
    <p>TokenID: ${nftData[index].tokenID}</p>
    <p>Price: ${nftData[index].price} eth</p>
    <button onclick="buyNFT(${nftData[index].listingID})">Buy</button>
    <button onclick="closePopup()">Close</button>
  `;

  popupContainer.appendChild(popup);
}

// Function to close the popup
function closePopup() {
  popupContainer.innerHTML = '';
}

// Call the function to retrieve NFT data from the database
retrieveNFTData();
