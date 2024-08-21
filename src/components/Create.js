import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Create() {
    let [id, setId] = useState("");
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [quantity,setQuantity] = useState("");
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
    const submit= () => {
        let product = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
        }
        console.log(product);
        axios.post("http://localhost:3000/products", product).then(() => {
            alert("Thêm thành công");
            navigate("/home/list");
        })
    }
    return (
        <>
            <h1>Add New Product</h1>
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

export default Create;