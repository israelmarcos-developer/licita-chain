import React, { useState, useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import Image from "next/image";
import Navbar from 'react-bootstrap/Navbar';
import { SelectedComponentContext } from '../SelectedComponentContext';


function SideNav() {
  

  const [selected, setSelected] = useState("#home");
  const [selectedComponent, setSelectedComponent] = useState('any');

  const value = useMemo(() => ({ selectedComponent }), [selectedComponent]);

  console.log('SideNav', selectedComponent)

  return (
    <SelectedComponentContext.Provider value={value}>
      <Nav className="flex-column nav-custon">
        <Navbar.Brand className='logo-custon'>
          <Image src="https://sso.acesso.gov.br/assets/govbr/img/govbr.png" width="135" height="50" alt="Logo" /> 
        </Navbar.Brand>
          <div className='item-custon'>
            <Nav.Link href="#home" className={selected === "#home" ? "active-link" : ""} onClick={() => {setSelected("#home"); setSelectedComponent('Licitação');}}>Licitação</Nav.Link>
            <Nav.Link href="#features" className={selected === "#features" ? "active-link" : ""} onClick={() => {setSelected("#features"); setSelectedComponent('Fornecedor')}}>Fornecedor</Nav.Link>
            <Nav.Link href="#pricing" className={selected === "#pricing" ? "active-link" : ""} onClick={() => {setSelected("#pricing"); setSelectedComponent('Proposta/Pagamento')}}>Proposta/Pagamento</Nav.Link>
            <Nav.Link href="#history" className={selected === "#history" ? "active-link" : ""} onClick={() => {setSelected("#history"); setSelectedComponent('Histórico')}}>Histórico</Nav.Link>
          </div>
      </Nav>
    </SelectedComponentContext.Provider>
  );
}
export default SideNav;
