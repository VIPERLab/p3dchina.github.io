ABIs = {
PlayerBook : 
// start playerbook abi 

[
	{
		"constant": false,
		"inputs": [],
		"name": "addMeToAllGames",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_whatFunction",
				"type": "bytes32"
			}
		],
		"name": "deleteAnyProposal",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "pIDxAddr_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registrationFee_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNameFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "plyrNames_",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "gameNames_",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "pIDxName_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nameString",
				"type": "string"
			},
			{
				"name": "_affCode",
				"type": "address"
			},
			{
				"name": "_all",
				"type": "bool"
			}
		],
		"name": "registerNameXaddr",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_gameAddress",
				"type": "address"
			},
			{
				"name": "_gameNameStr",
				"type": "string"
			}
		],
		"name": "addGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "pID_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_pID",
				"type": "uint256"
			}
		],
		"name": "getPlayerAddr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nameString",
				"type": "string"
			},
			{
				"name": "_affCode",
				"type": "bytes32"
			},
			{
				"name": "_all",
				"type": "bool"
			}
		],
		"name": "registerNameXname",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_nameStr",
				"type": "string"
			}
		],
		"name": "checkIfNameValid",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "bytes32"
			},
			{
				"name": "_affCode",
				"type": "bytes32"
			},
			{
				"name": "_all",
				"type": "bool"
			}
		],
		"name": "registerNameXnameFromDapp",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_whatFunction",
				"type": "bytes32"
			},
			{
				"name": "_signerA",
				"type": "uint256"
			},
			{
				"name": "_signerB",
				"type": "uint256"
			},
			{
				"name": "_signerC",
				"type": "uint256"
			}
		],
		"name": "checkSignersByAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_gameID",
				"type": "uint256"
			}
		],
		"name": "addMeToGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_pID",
				"type": "uint256"
			}
		],
		"name": "getPlayerName",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nameString",
				"type": "string"
			},
			{
				"name": "_affCode",
				"type": "uint256"
			},
			{
				"name": "_all",
				"type": "bool"
			}
		],
		"name": "registerNameXID",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyrNameList_",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_whatFunction",
				"type": "bytes32"
			}
		],
		"name": "checkData",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "bytes32"
			},
			{
				"name": "_affCode",
				"type": "address"
			},
			{
				"name": "_all",
				"type": "bool"
			}
		],
		"name": "registerNameXaddrFromDapp",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nameString",
				"type": "string"
			}
		],
		"name": "useMyOldName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gID_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "bytes32"
			},
			{
				"name": "_affCode",
				"type": "uint256"
			},
			{
				"name": "_all",
				"type": "bool"
			}
		],
		"name": "registerNameXIDFromDapp",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setRegistrationFee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "games_",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "gameIDs_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyr_",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "laff",
				"type": "uint256"
			},
			{
				"name": "names",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_pID",
				"type": "uint256"
			}
		],
		"name": "getPlayerLAff",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getPlayerID",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_whatFunction",
				"type": "bytes32"
			},
			{
				"name": "_signerA",
				"type": "uint256"
			},
			{
				"name": "_signerB",
				"type": "uint256"
			},
			{
				"name": "_signerC",
				"type": "uint256"
			}
		],
		"name": "checkSignersByName",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "playerID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "playerName",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "isNewPlayer",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "affiliateID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "affiliateAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "affiliateName",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "amountPaid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timeStamp",
				"type": "uint256"
			}
		],
		"name": "onNewName",
		"type": "event"
	}
]


// end playerbook abi
};