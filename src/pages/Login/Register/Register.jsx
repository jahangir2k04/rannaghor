import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-4 mb-10 rounded-lg border-slate-400 md:w-2/5 md:mx-auto p-6 md:p-12 shadow-lg'>
            <h3 className='mb-6 text-3xl md:text-4xl font-bold text-center'>Please Register</h3>
            <form >
                <div className='text-xl mb-5'>
                    <label htmlFor="">Your Name</label> <br />
                    <input className='mt-2 border rounded border-slate-400 h-12 w-full' type="text" name="name" required />
                </div>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Photo Url</label> <br />
                    <input className='mt-2 border rounded border-slate-400 h-12 w-full' type="photourl" name="photourl" required />
                </div>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Email</label> <br />
                    <input className='mt-2 border rounded border-slate-400 h-12 w-full' type="email" name="email" required />
                </div>
                <div className='text-xl mb-5'>
                    <label htmlFor="">Password</label> <br />
                    <input className='mt-2 border rounded border-slate-400 h-12 w-full' type="password" name="password" required />
                </div>
                <div className='flex mb-8'>
                    <label className='grow'>
                        <input type="checkbox" />
                        <span className='ms-2 text-xl'>
                            Show password
                        </span>
                    </label>
                    
                </div>
                <input className='w-full my-bg-primary rounded-lg h-12 text-white font-bold text-xl' type="submit" value="Register" />
            </form>
            <div className='my-10 text-center grid grid-cols-3 items-center'>
                <hr />
                <p className='text-xl'>Or continue with</p>
                <hr />
            </div>
            <div className='flex gap-5 mb-10'>
                <Link className='flex gap-2 md:gap-5 justify-center items-center w-full border border-lime-700 rounded-lg'>
                    <img className='h-10' src="/src/assets/google.png" alt="" />
                    <button className='h-12 my-primary font-bold text-xl'>Google</button>
                </Link>
                <Link className='flex gap-2 md:gap-5 justify-center items-center w-full border border-lime-700 rounded-lg'>
                    <img className='h-10' src="/src/assets/github.png" alt="" />
                    <button className='h-12 my-primary font-bold text-xl'>Github</button>
                </Link>
            </div>
            <p className='text-center text-xl'>
                Already Have An Account? <Link to='/login' className='my-primary font-bold'> Login</Link>
            </p>
        </div>
    );
};

export default Register;