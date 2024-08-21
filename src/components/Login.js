import '../style/Login.css'
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useContext} from "react";
import myContext, {MyContext} from "./MyContext";

function Login() {
    let navigate = useNavigate();
    let {setCurrentUser} = useContext(MyContext)
    return (
        <>
            <h1>Login</h1>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: ''
                        }
                    }
                    onSubmit={values => {
                        axios.post("http://localhost:3000/login", values).then((res) => {
                            alert('Đăng nhap thanh công');
                            setCurrentUser(res.data)
                            navigate("/home")
                        }).catch(e => {
                            alert("Sai tai khoan, mat khau")
                        })
                    }}
                >
                    <Form>
                        <h4 className={'login'}>User Name: </h4>
                        <Field className={'login'} name={'username'}/>
                        <h4 className={'login'}>Password: </h4>
                        <Field className={'login'} name={'password'}/>
                        <button className={'login-btn'}>Login</button>
                        <button className={'login-btn'}><Link className={'link-btn'}
                                                              to={'/home/register'}>Register</Link></button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Login