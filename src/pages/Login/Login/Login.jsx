import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, {replace: true});

            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        setError('');
        googleSignIn()
            .then(result => {
                const signInUser = result.user;
                navigate(from, {replace: true});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        setError('');
        githubSignIn()
            .then(result => {
                const signInUser = result.user;
                navigate(from, {replace: true});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='mx-4 mb-10 rounded-lg border-slate-400 md:w-2/5 md:mx-auto p-6 md:p-12 shadow-lg'>
            <h3 className='mb-6 text-3xl md:text-4xl font-bold text-center'>Please Login</h3>
            <form onSubmit={handleLogin}>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Email</label> <br />
                    <input className='ps-3 mt-2 border rounded border-slate-400 h-12 w-full' type="email" name="email" required />
                </div>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Password</label> <br />
                    <input className='ps-3 mt-2 border rounded border-slate-400 h-12 w-full' type="password" name="password" required />
                </div>
                <div className='flex'>
                    <label className='grow'>
                        <input type="checkbox" />
                        <span className='ms-2 text-xl'>
                            Show password
                        </span>
                    </label>
                    <Link className='my-primary text-xl font-semibold'>Forgot password?</Link>
                </div>
                <p className='mb-8 text-red-800'>{error}</p>
                <input className='w-full my-bg-primary rounded-lg h-12 text-white font-bold text-xl' type="submit" value="Login" />
            </form>
            <div className='my-10 text-center grid grid-cols-3 items-center'>
                <hr />
                <p className='text-xl'>Or continue with</p>
                <hr />
            </div>
            <div className='flex gap-5 mb-10'>
                <Link onClick={handleGoogleSignIn} className='flex gap-2 md:gap-5 justify-center items-center w-full border border-lime-700 rounded-lg'>
                    <img className='h-10' src="/google.png" alt="" />
                    <button className='h-12 my-primary font-bold text-xl'>Google</button>
                </Link>
                <Link onClick={handleGithubSignIn} className='flex gap-2 md:gap-5 justify-center items-center w-full border border-lime-700 rounded-lg'>
                    <img className='h-10' src="/github.png" alt="" />
                    <button className='h-12 my-primary font-bold text-xl'>Github</button>
                </Link>
            </div>
            <p className='text-center text-xl'>
                Don't Have An Account? <Link to='/register' className='my-primary font-bold'> Register</Link>
            </p>
        </div>
    );
};

export default Login;

