import { useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Context from '../../Context';

import ProdutoSearch from './component_search/ProdutoSearch';
import PedidoSearch from './component_search/PedidoSearch';
import LocalSearch from './component_search/LocalSearch';
import DepositoSearch from './component_search/DepositoSearch';
import ClienteSearch from './component_search/ClienteSearch';
import FornecedorSearch from './component_search/FornecedorSearch';
import AlmoxarifeSearch from './component_search/AlmoxarifeSearch';
import MotoristaSearch from './component_search/MotoristaSearch';
import RepositorSearch from './component_search/RepositorSearch';

function SearchTable () {
    const { linkSelected } = useContext(Context);

    return (
        <>
            <ReactBootstrap.Container className='content'>
                {linkSelected === "Produtos" && <ProdutoSearch/>}
                {linkSelected === "Pedidos" && <PedidoSearch />}
                {linkSelected === "Locais" && <LocalSearch />}
                {linkSelected === "Depositos" && <DepositoSearch/>}
                {linkSelected === "Clientes" && <ClienteSearch/>}
                {linkSelected === "Fornecedores" && <FornecedorSearch/>}
                {linkSelected === "Almoxarife" && <AlmoxarifeSearch/>}
                {linkSelected === "Motorista" && <MotoristaSearch/>}
                {linkSelected === "Repositor" && <RepositorSearch/>}
            </ReactBootstrap.Container>
        </>
    );
}

export default SearchTable