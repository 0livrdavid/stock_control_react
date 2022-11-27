import { useContext, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Context from '../../../pages/Context';

export default function ProdutoSearch () {
    const { searchForm, setSearchForm } = useContext(Context);
    const { columns, setColumns } = useContext(Context);

    useEffect(() => {
        console.log(typeof searchForm);
        console.log("primeiro: "+searchForm);

        setColumns([
            {
                name: 'ID',
                selector: row => row.id,
                sortable: false,
            },
            {
                name: 'Product',
                selector: row => row.product,
                sortable: true,
            },
            {
                name: 'Category',
                selector: row => row.category,
                sortable: true,
            },
            {
                name: 'Manufacturing',
                selector: row => row.manufacturing,
                sortable: true,
            },
        ]);

        setSearchForm({
            id: "",
            product:   "",
            category: "All",
            manufacturing: ""
        })
    },[]);
    console.log(typeof searchForm);
    console.log(searchForm);

    return (
        <ReactBootstrap.Form>
            <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Label>Product</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control name="product" type="text" placeholder="Product" onChange={(e) => setSearchForm((prevState => {return { ...prevState, [e.target.name]: e.target.value }}))}/>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Label>Category</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Select name="category" value={searchForm.category} onChange={(e) => setSearchForm((prevState => {return { ...prevState, [e.target.name]: e.target.value }}))}>
                        <option value={"All"}>All</option>
                        <option value={"Fish"}>Fish</option>
                        <option value={"Meal<"}>Meal</option>
                        <option value={"Fruit"}>Fruit</option>
                        <option value={"Vegetables"}>Vegetables</option>
                        <option value={"Pasta"}>Pasta</option>
                    </ReactBootstrap.Form.Select>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Label>Manufacturing</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control name="manufacturing" type="date" placeholder="Manufacturing" onChange={(e) => setSearchForm((prevState => {return { ...prevState, [e.target.name]: e.target.value }}))}/>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Form>
    );
}