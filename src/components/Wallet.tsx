import {SingnIn} from "../services/Web3Service"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const WalletButton = () => {

    const [isLoading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState <string | null>(null);
    const [walletAddress, setWalletAddress] = useState <string | null>(null);

    // Effect loading 1000s
    const handleClick = () => setLoading(true);
    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 1000));
        }
        if (isLoading) {
            simulateNetworkRequest().then(async () => {
                setLoading(false);

                // Web3Service - Login wallet user
                const result = await SingnIn()
                if (typeof result === 'string'){
                    setErrorMessage(result)
                }else {
                    setWalletAddress(result);
                }
              });
        }
    }, [isLoading]);
    

    return (
        <div className='container'>
            <div className='login-custon'>
                <p className='title-custon'>Identifique-se no LicitaChain</p>
                <h1 className='title2-custon'> Licita-Chain</h1>
                <div className='img-metamak-custon'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" width="150" height="150" alt="Logo" />
                </div>
                <div className='button-custon'>
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={isLoading ? undefined : handleClick}
                    >
                        {isLoading ? 'Loading…' : 'Login com MetaMask'}
                    </Button>
                </div>
                <p className="container mt-3">
                    {walletAddress && <p>{walletAddress}</p>}
                    {errorMessage && <p>{errorMessage}</p>}
                </p>
            </div>
        </div>
    );
};
export default WalletButton;
