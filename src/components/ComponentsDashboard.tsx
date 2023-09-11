import NavTabs from '../components/sidenav/NavTabs';
import { useContext } from 'react';
import { SelectedComponentContext } from './SelectedComponentContext';

function ComponentsDashboard() {

  const { selectedComponent } = useContext(SelectedComponentContext);
  console.log('Dashboard', selectedComponent)

  return (
    <div className='container mt-5'>
      <NavTabs />
    </div>
    );
}

export default ComponentsDashboard;