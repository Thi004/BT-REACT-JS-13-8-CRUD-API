import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Register() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Register</h1>
            <div className="container">
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={values => {
                    axios.post("http://localhost:3000/register", values).then((res) => {
                        alert('Đăng ký thanh công');
                        navigate("/home/login")
                    })
                }}
            >
                <Form>
                    <h4 className={'login'}>User Name: </h4>
                    <Field className={'login'} name={'username'}/>
                    <h4 className={'login'}>Password: </h4>
                    <Field className={'login'} name={'password'}/>
                    <button className={'login-btn'}>Register</button>
                </Form>
            </Formik>
            </div>
        </>
    )
}

export default Register