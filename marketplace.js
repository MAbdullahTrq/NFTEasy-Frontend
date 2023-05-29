// JavaScript code
const nftContainer = document.getElementById('nft-container');
const popupContainer = document.getElementById('popup-container');

// Function to retrieve NFT data from the database
function retrieveNFTData() {
  // Make an AJAX request to the PHP file
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'getNFTData.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const nftData = JSON.parse(xhr.responseText);
      displayNFTs(nftData);
    }
  };
  xhr.send();
}

// Function to display NFTs
function displayNFTs(nftData) {
  nftContainer.innerHTML = '';

  nftData.forEach(nft => {
    const nftBlock = document.createElement('div');
    nftBlock.className = 'nft-block';
    nftBlock.innerHTML = `
      <img src="${nft.token_uri}" class="collection-img" alt="NFT Image"><br>
      <p>TokenID: ${nft.token_id}</p><br>
      <p>Price: $${nft.price}</p><br>
      <button onclick="openPopup(${nft.token_id})">Buy</button><br>
    `;

    nftContainer.appendChild(nftBlock);
  });
}

// Function to open the popup
function openPopup(tokenID) {
  // AJAX request to get the NFT details from the database using tokenID
  // Implement your code to retrieve the specific NFT details from the database

  // Example code to create and display the popup
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <img src="nft_image.jpg" alt="NFT Image">
    <p>TokenID: ${tokenID}</p>
    <p>Price: $100</p>
    <button onclick="buyNFT(${tokenID})">Buy</button>
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
