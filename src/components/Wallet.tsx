import {SingnIn} from "../services/Web3Service"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';

const WalletButton = () => {

    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState <string | null>(null);

    const handleClick = () => setLoading(true);
    const router = useRouter();

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
                    setMessage(result)
                    const addressStorage = localStorage.getItem('address');
                    if(addressStorage){
                        router.push('/loading');
                    }else{setMessage(result)}
                }
              });
        }
    }, [isLoading, router]);
       

    return (
        <div className='container'>
            <div className='login-custon'>
                <p className='title-custon'>Identifique-se no LicitaChain</p>
                <h2 className='title2-custon'> Licita-Chain</h2>
                <div className='img-metamak-custon'>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" width="100" height="100" alt="Logo" />
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
                    {message && <p>{message}</p>}
                </p>
            </div>
        </div>
    );
};
export default WalletButton;
