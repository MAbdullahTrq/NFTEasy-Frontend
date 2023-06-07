// Configure Metamask as the provider
import { ethers } from "./dist/ethers.min.js";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Contract address on Sepolia chain
const contractAddress = "0xDD3dD692f42F7E2C43A93Bb3d60A0695D608D07b";
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			}
		],
		"name": "ContractCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"name": "createContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getContractsByOwner",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Add the ABI of your NFTEasyContractFactory

// Contract instance
let factoryContract;

// Initialize function
async function init() {
  try {
    // Request Metamask account access
    await ethereum.request({ method: "eth_requestAccounts" });

    // Create the contract instance
    factoryContract = new ethers.Contract(contractAddress, contractABI, signer);

    // Render the initial collection blocks
    renderCollectionBlocks();
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

// Function to add a new collection
async function addCollection() {
  const name = prompt("Enter the collection name:");
  const symbol = prompt("Enter the collection symbol:");

  // Check if name and symbol are provided
  if (name && symbol) {
    try {
      // Call createContract function from NFTEasyContractFactory
      const transaction = await factoryContract.createContract(name, symbol);
      await transaction.wait();

      // Add the collection to the UI or perform any other desired actions
      renderCollectionBlocks();
    } catch (error) {
      console.error("Error adding collection:", error);
    }
  }
}

// Rest of the code remains the same...
