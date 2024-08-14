import '../style/ListProduct.css'
import {useEffect, useState} from "react";
import axios from "axios";

function ListProduct() {
    let [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res) => {
            let data = res.data;
            setProduct(data);
        })
    }, []);
    return (
        <>
            <h2>List Product</h2>
            <table>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th colSpan={2}>ACTION</th>
                </tr>
                {
                    product.map((item, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button className={'in-table'}>Delete</button>
                                </td>
                                <td>
                                    <button className={'in-table'}>Update</button>
                                </td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    );
}

export default ListProduct;