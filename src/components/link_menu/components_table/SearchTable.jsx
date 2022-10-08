import { useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Context from '../../Context';
import ProdutoSearch from './component_search/ProdutoSearch';

function SearchTable () {
    const { linkSelected, setLinkSelected, linkPessoas, setlinkPessoas, searchForm, setSearchForm } = useContext(Context);

    return (
        <>
            <ReactBootstrap.Container className='content'>
                <ProdutoSearch />
            </ReactBootstrap.Container>
        </>
    );
}

export default SearchTable