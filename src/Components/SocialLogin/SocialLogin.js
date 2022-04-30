import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {;
    const [signInWithGithub , user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading1 || loading2){
        return <Loading></Loading>
    }

    if (error1 || error2) {
        errorElement = <p className='text-danger'>Error:{error1?.message} {error2?.message}</p>
    }

    if (user1 || user2) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto mb-10'>
                    <span className='px-2'>Github Sign In</span>
                </button>
                <button
                    onClick={() => signInWithFacebook()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <span className='px-2'>FaceBook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;