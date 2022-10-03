import { useState, useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Context from '../../Context';

function NavTable() {
    const { linkSelected, setLinkSelected } = useContext(Context);
    const [linkPessoas, setlinkPessoas] = useState('Pessoas');

    const handleSelect = (eventKey) => {
        setLinkSelected(eventKey);
    };

    return (
        <>
            <ReactBootstrap.Nav variant="pills" activeKey={linkSelected} onSelect={handleSelect}>
                <ReactBootstrap.Nav.Item>
                    <ReactBootstrap.Nav.Link eventKey="Produtos" title="Produtos" onClick={linkPessoas === "Pessoas" ? undefined : () => setlinkPessoas("Pessoas")}>Produtos</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>
                <ReactBootstrap.Nav.Item>
                    <ReactBootstrap.Nav.Link eventKey="Pedidos" title="Pedidos" onClick={linkPessoas === "Pessoas" ? undefined : () => setlinkPessoas("Pessoas")}>Pedidos</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>
                <ReactBootstrap.Nav.Item>
                    <ReactBootstrap.Nav.Link eventKey="Local" title="Local" onClick={linkPessoas === "Pessoas" ? undefined : () => setlinkPessoas("Pessoas")}>Local</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>
                <ReactBootstrap.Nav.Item>
                    <ReactBootstrap.Nav.Link eventKey="Depositos" title="Depositos" onClick={linkPessoas === "Pessoas" ? undefined : () => setlinkPessoas("Pessoas")}>Depositos</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>
                <ReactBootstrap.NavDropdown title={linkPessoas} id="nav-dropdown">
                    <ReactBootstrap.NavDropdown.Item eventKey="Clientes" onClick={() => setlinkPessoas("Clientes")}>Clientes</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item eventKey="Fornecedores" onClick={() => setlinkPessoas("Fornecedores")}>Fornecedores</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Divider />
                    <ReactBootstrap.NavDropdown.Item eventKey="Almoxarife" onClick={() => setlinkPessoas("Almoxarife")}>Almoxarife</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item eventKey="Motorista" onClick={() => setlinkPessoas("Motorista")}>Motorista</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item eventKey="Repositor" onClick={() => setlinkPessoas("Repositor")}>Repositor</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
            </ReactBootstrap.Nav>
        </>
    );
}

export default NavTable