import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Update() {
    let [id, setId] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    const params = useParams();
    const idUpdate = params.id;

    const navigate = useNavigate();
    const changeId = (event) => {
        let dataInput = event.target.value;
        setId(dataInput);
    }
    const changeName = (event) => {
        let dataInput = event.target.value;
        setName(dataInput);
    }
    const changePrice = (event) => {
        let dataInput = event.target.value;
        setPrice(dataInput);
    }
    const changeQuantity = (event) => {
        let dataInput = event.target.value;
        setQuantity(dataInput);
    }
    useEffect(() => {
        axios.get("http://localhost:3000/products/"+ idUpdate).then ((res)=>{
            let data = res.data
            setId(data.id)
            setName(data.name)
            setPrice(data.price)
            setQuantity(data.quantity)
        })
    }, []);
    const submit = () => {
        let product = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
        }
        console.log(product);
        axios.put(`http://localhost:3000/products/${idUpdate}`,product).then(() => {
            alert("Update Success");
            navigate("/home/list");
        })
    }
    return (
        <>
            <h2>Update Product</h2>
            <input type="text" placeholder={'Id'} value={id} onChange={(event) => {
                changeId(event)
            }}/>
            <input type="text" placeholder={'Name'} value={name} onChange={(event) => {
                changeName(event)
            }}/>
            <input type="text" placeholder={'price'} value={price} onChange={(event) => {
                changePrice(event)
            }}/>
            <input type="text" placeholder={'Quantity'} value={quantity} onChange={(event) => {
                changeQuantity(event)
            }}/>
            <button onClick={() => {
                submit()
            }}>Submit
            </button>
        </>
    );
}

export default Update;