import { useNavigate } from 'react-router-dom';
import '../App.css';
import { googleProvider } from './utils/GoogleOauth';
import GoogleLogo from './ui/glogo.png';
import { useState } from 'react';

const Homepage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const handleNavigate = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/code');
        }, 5000)
    }

    const login = googleProvider.useGoogleLogin({
        flow: 'auth-code',
        onSuccess: () => handleNavigate(),
        onError: (err: any) => console.error('Failed to login with google', err),
    });

    return (
        <>
            {loading && (
                <div className = "loading-wrapper">
                <span className="loader"></span>
                </div>
            )}
            <div className='wrapper'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='left-wrapper d-flex align-items-center justify-content-center' style={{ height: "100vh", position: "relative" }}>
                            <h1 className='logo-name'>Syntax AI</h1>
                            <div className='text-center left-main'>
                                <h1 className='lw-secondary-head'>Nice to see you again</h1>
                                <h1 className='lw-main-head mt-3'>Welcome Back!</h1>
                                <hr className='hr-middle mt-3' />
                                <p className='mt-3 lw-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint similique eaque voluptate voluptatem, enim asperiores voluptates eligendi.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='right-wrapper d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
                            <div className=''>
                                <h1 className='rw-main-head text-center'>Login with Google</h1>
                                <p className='rw-main-para mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laudantium, reiciendis, veritatis non dolore corrupti ipsum esse, consectetur maiores deserunt quaerat quis aliquam sint? Nemo iusto illum obcaecati nobis? Cumque.</p>
                                <div className='d-flex align-items-center justify-content-center mt-3'>
                                    <button type="button" className="login-with-google-btn" onClick={() => login()}>
                                       <img src = {GoogleLogo} style = {{width: "20px", height: "auto", marginRight: "10px", marginTop: "1px"}} /> Sign in with Google
                                    </button>
                                </div>
                                <div className='text-center mt-4'>
                                    <button className="button-enter">Start Generating</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage