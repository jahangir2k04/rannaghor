import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])(?=.*[@$!%*?&]){8,}/.test(password)) {
            setError('Password must be 8 characters with one uppercase letter and special character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
                navigate('/');
                updateUserProfile(createdUser, name, photo)
                    .then()
                    .catch(error => {
                        setError(error.message);
                    })
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='mx-4 mb-10 rounded-lg border-slate-400 md:w-2/5 md:mx-auto p-6 md:p-12 shadow-lg'>
            <h3 className='mb-6 text-3xl md:text-4xl font-bold text-center'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Your Name</label> <br />
                    <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="text" name="name" required />
                </div>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Photo Url</label> <br />
                    <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="photo" name="photo" />
                </div>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Email</label> <br />
                    <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="email" name="email" required />
                </div>
                <div className='text-xl mb-4'>
                    <label htmlFor="">Password</label> <br />
                    <input className='mt-2 ps-3 border rounded border-slate-400 h-12 w-full' type="password" name="password" required />
                </div>
                <div>
                    <label>
                        <input type="checkbox" onClick={handleAccepted} />
                        <span className='ms-2 text-xl'>
                            {<>Accept <Link className='my-primary'>Terms and Condition</Link></>}
                        </span>
                    </label>
                    <p className='mb-8 text-red-800'>{error}</p>
                </div>
                
                <button className='btn normal-case hover:bg-green-700 w-full my-bg-primary rounded-lg h-12 text-white font-bold text-xl' type="submit" value="Register" disabled={!accepted}>Register</button>
            </form>
           
            <p className='mt-6 text-center text-xl'>
                Already Have An Account? <Link to='/login' className='my-primary font-bold'> Login</Link>
            </p>
        </div>
    );
};

export default Register;