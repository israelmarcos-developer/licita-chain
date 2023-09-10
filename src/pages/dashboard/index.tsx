import MenuNavigation from '../../components/MenuNavigation'
import NavTabs from '../../components/NavTabs'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {

  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const addressStorage = localStorage.getItem('address');

    if (addressStorage === null) {
      router.push('/');
    } else {
      setIsVerified(true);
    }
  }, [router]);


  return (
    <main>
    {
      isVerified && (
        <>
          <MenuNavigation />
          <main>
            <div className='container mt-3'>
              <NavTabs />
            </div>
          </main>
        </>
      )
    }
  </main>
  )
}
