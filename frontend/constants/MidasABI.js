export const MidasABI= [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "AddressInsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "SafeERC20FailedOperation",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "redPacketId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "total",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "enum RedPacket.BonusType",
				"name": "bonusType",
				"type": "uint8"
			}
		],
		"name": "Create",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "redPacketId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bonus",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bonusLeft",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "totalLeft",
				"type": "uint32"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint32",
				"name": "total",
				"type": "uint32"
			},
			{
				"internalType": "enum RedPacket.BonusType",
				"name": "bonusType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "passcodeHash",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "condition",
				"type": "address"
			}
		],
		"name": "create",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getRedPacket",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "passcodeHash",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountLeft",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "condition",
						"type": "address"
					},
					{
						"internalType": "uint32",
						"name": "total",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "totalLeft",
						"type": "uint32"
					},
					{
						"internalType": "enum RedPacket.BonusType",
						"name": "bonusType",
						"type": "uint8"
					}
				],
				"internalType": "struct RedPacket.RedPacketInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isOpened",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "proof",
				"type": "uint256[]"
			}
		],
		"name": "open",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[2]",
				"name": "a",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[2][2]",
				"name": "b",
				"type": "uint256[2][2]"
			},
			{
				"internalType": "uint256[2]",
				"name": "c",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[2]",
				"name": "input",
				"type": "uint256[2]"
			}
		],
		"name": "verifyProof",
		"outputs": [
			{
				"internalType": "bool",
				"name": "r",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]