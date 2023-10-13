
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
            userAddress = Math.random(10,20);
            document.getElementById('userAddress').textContent = userAddress;
            // Get the user's Ethereum address
            // userAddress = await web3.userAddress();
            // Create a user account in the contract
            // await contract.methods.createUser().send({ from: userAddress });
        }



        // Function to check the user's reward balance
        async function checkBalance() {
            const balance = await contract.methods.checkBalance().call({ from: userAddress });
            document.getElementById('rewardBalance').textContent = balance;
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
