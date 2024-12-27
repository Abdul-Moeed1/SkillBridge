import React, { useState } from "react";
import { logIn } from "../../Services/Users";

const LoginPage = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [loginFailed, setLoginFailed] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("handle cHANGe running");

        setData({
            ...data,
            [name]: value,
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await logIn(data);
            const token = res.data.token;
            console.log(token);
            //  document.cookie = `token=${token}; path=/;`
            // setCookie("token",res.data.token);
            setLoginFailed(false);
            console.log(res);

        } catch (error) {
            console.log(error);
            setLoginFailed(true);

        }

    }
    return (
        <section className="gradient">
            <div className="container vh-100 d-flex justify-content-center align-items-center ">
                <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className={`form-control ${loginFailed ? "is-invalid" : "form-control"}`}
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={data.email}
                                onChange={handleChange}
                            />
                            {loginFailed && (<small className="text-danger mt-1 d-block">
                                Wrong email or password. Please try again.
                            </small>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe" className="ms-2">Remember Me</label>
                            </div>
                            <a href="/forgot-password" className="text-primary small">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3" >
                            Login
                        </button>
                        <p className="text-center mb-0">
                            Don't have an account? <a href="/signup" className="text-primary">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
