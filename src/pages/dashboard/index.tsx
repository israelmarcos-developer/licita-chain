import MenuNavigation from '../../components/MenuNavigation'
import SideNav from '../../components/sidenav/SideNav'
import { useRouter } from 'next/router';
import { useEffect, useState, ReactNode, useMemo  } from 'react';
import ComponentsDashboard from '../../components/ComponentsDashboard'
import { SelectedComponentContext } from '../../components/SelectedComponentContext';


interface HomeProps {
  children: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {

  const [isVerified, setIsVerified] = useState(false);
  const [selectedComponent] = useState('any');
  const router = useRouter();

  const value = useMemo(() => ({ selectedComponent }), [selectedComponent]);

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
      <div className='element-primary'>
      {
        isVerified && (
          <SelectedComponentContext.Provider value={value}>
            <MenuNavigation />
            {children} {/* Renderiza os componentes filhos passados para Home */}
            <ComponentsDashboard />
          </SelectedComponentContext.Provider>
        )
      }
      </div>
    </main>
  )
}
export default Home;