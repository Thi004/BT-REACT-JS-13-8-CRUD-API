import '../style/ListProduct.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function ListProduct() {
    let [product, setProduct] = useState([]);
    const getList = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            let data = res.data;
            setProduct(data);
        })
    }
    useEffect(() => {
        getList()
    }, []);
    const remove = (id) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            axios.delete(`http://localhost:3000/products/${id}`).then((res)=>{
                alert("Deleted");
                getList()
            })
        }
    }
    return (
        <>
            <h1>List Product</h1>
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
                                    <button onClick={() => {remove(item.id)}} className={'in-table'}>Delete</button>
                                </td>
                                <td>
                                    <button className={'in-table'}><Link className={'in-table'} to={`/home/update/${item.id}`}>Update</Link></button>
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