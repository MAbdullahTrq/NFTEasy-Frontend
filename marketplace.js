const nftContainer = document.getElementById('nft-container');
const popupContainer = document.getElementById('popup-container');
let nftData = null;
function retrieveNFTData() {

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


function openPopup(index) {
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

function closePopup() {
  popupContainer.innerHTML = '';
}

retrieveNFTData();
