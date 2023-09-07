import Web3 from "web3";

// Se a MetaMask não tiver instalada retorna um erro
export async function SingnIn() {
    if (!window.ethereum) return ("Instale a MetaMask no seu Navegador!");
    
    try{
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();

        if (!accounts || !accounts.length) return ("Sua carteira não foi encontrada ou a conexão foi rejeitada!");
        localStorage.setItem("wallet", accounts[0]);
        console.log("Endereço: ", accounts[0])

        return accounts[0];

    }catch (error){
        return ("Sua carteira não foi encontrada ou a conexão foi rejeitada!")
    }
}
