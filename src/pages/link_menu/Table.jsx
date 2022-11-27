import { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import DataTable from 'react-data-table-component';

import NavTable from '../../components/components_table/NavTable';
import SearchTable from '../../components/components_table/SearchTable';

import Context from '../Context';

import JSON from '../../components/components_table/test'

function Table() {
    const [linkSelected, setLinkSelected] = useState("Produtos");
    const [linkPessoas, setlinkPessoas] = useState('Pessoas');

    const [searchForm, setSearchForm] = useState([]);

    const [columns, setColumns] = useState([]);
  
	var data = JSON;
    data = data[linkSelected];
	
    return (
        <Context.Provider value={{ columns, setColumns, linkSelected, setLinkSelected, linkPessoas, setlinkPessoas, searchForm, setSearchForm }}>
            <ReactBootstrap.Container>
                <NavTable />
                <SearchTable />
                <DataTable title={linkSelected} columns={columns} data={data} pagination />
            </ReactBootstrap.Container>
        </Context.Provider>
    );
}

export default Table