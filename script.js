
        async function connectWallet() {
        if (window.ethereum) {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            window.web3 = new Web3(window.ethereum);
        } else {
            alert("Please install Metamask or a web3-enabled browser.");
        }
        }

        // Contract address and ABI (replace with your contract's address and ABI)
        //const contractAddress = 'YOUR_CONTRACT_ADDRESS';
        //const contractABI = [...]; // Replace with your contract's ABI

        // Initialize the contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // User's Ethereum address
        //let userAddress;
        

        // Function to create a user account
        async function createUser() {
            const useraccounts = ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4","0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", 
            "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db","0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB","0x617F2E2fD72FD9D5503197092aC168c91465E7f2","0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
            "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678","0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7","0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C","0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
            "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c","0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C","0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB","0x583031D1113aD414F02576BD6afaBfb302140225",
            "0xdD870fA1b7C4700F2BD7f44238821C26f7392148"];
            document.getElementById('userAddress').textContent = useraccounts[Math.floor(Math.random()*16)];
            // Get the user's Ethereum address
            // userAddress = await web3.userAddress();
            // Create a user account in the contract
            // await contract.methods.createUser().send({ from: userAddress });
            
        }



        // Function to check the user's reward balance
        async function checkBalance() {
            //const balance = await contract.methods.checkBalance().call({ from: userAddress });
            document.getElementById('rewardBalance').textContent = Math.floor(Math.random()*10000);
            //eth.checkBalance()
        }

        // Function to earn a reward
        async function earnReward() {
            // Implement earning rewards logic here
        }

        // Function to redeem a reward
        async function redeemReward() {
            // Implement redeeming rewards logic here
        }

        // Function to transfer reward points
        async function transferPoints() {
            // Implement transferring points logic here
        }

        // Display the user's Ethereum address
        window.addEventListener('load', async () => {
            userAddress = await web3.eth.getCoinbase();
            document.getElementById('userAddress').textContent = userAddress;
        });
