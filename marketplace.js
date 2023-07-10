const nftContainer = document.getElementById('nft-container');
const popupContainer = document.getElementById('popup-container');
ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
const marketplaceAddress = "0xE5e6271ABc56D1274AcCB86762A7c097b62b7628";
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_contract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "buyNFT",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];
const contract = new ethers.Contract(marketplaceAddress, abi, ethersProvider.getSigner());
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
      <button onclick="openPopup(${index})">Details</button>
      </div>
    `;

    nftContainer.appendChild(nftBlock);
  });
}


function openPopup(index) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  const URI = nftData[index].tokenURI;
  const ID = nftData[index].tokenID;
  const price = nftData[index].price;
  const add = nftData[index].contractAdd;
  popup.innerHTML = `
    <img src=${URI} alt="NFT Image">
    <p>TokenID: ${ID}</p>
    <p>Price: ${price} eth</p>
    <button onclick="buyNFT(${add},${ID},${price})">Buy</button>
    <button onclick="closePopup()">Close</button>
  `;

  popupContainer.appendChild(popup);
}

async function buyNFT(address, ID, price) {
  try {
    // Call the buyToken function in the smart contract
    const response = await contract.buyNFT(address,ID);

    // Transaction successful
    console.log('NFT bought:', response);
  } catch (error) {
    // Transaction failed
    console.error('Error buying NFT:', error);
  }
}


function closePopup() {
  popupContainer.innerHTML = '';
}

retrieveNFTData();
