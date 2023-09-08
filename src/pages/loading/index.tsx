import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingPage from '../../components/LoadingPage'

export default function Loading() {

  const router = useRouter();
  
  useEffect(() => {

    function showLoading() {
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    }
    showLoading()

  }, [router]);


  return (
    <main>
      <main>
        <div className='verifyuser-page'>
          <LoadingPage />
          <div>-</div>
          <h1>Carregando</h1>
        </div>
      </main>
    </main>
  )
}
