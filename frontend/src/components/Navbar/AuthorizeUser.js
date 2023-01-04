import React from 'react';
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import NavBrand from './NavBrand';
import userIcon from './userIcon.png';
import logOut from './logOut.png'
const AuthorizeUser = () => {
    const { user, signOutUser } = useAuth();
    const history = useHistory();
    const { orders } = useOrder();

    return (
        <>
            {user.displayName ? (
                <>
                    <NavBrand />
                    <div className="flex flex-col pt-16 w-32 items-center z-40 pr-4 ">
                        {!user.photoURL.endsWith("g") ? (<img src={userIcon} alt={user.displayName} className="w-12 z-50" />) : (
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full z-50" />
                        )}

                        <p className='text-red-200 pt-2'>Welcome!</p>
                        <p className="text-white text-sm poppins hidden md:block lg:block z-50 pb-2">{user.displayName}</p>
                        <button className="cursor-pointer w-20 h-6 text-sm text-white z-50" onClick={signOutUser}><img src={logOut} className='w-6 m-auto'></img></button>
                    </div>


                </>
            ) : (
                <div className='flex flex-col gap-5'>
                    <div className="flex flex-wrap items-center justify-between">
                        <NavBrand />
                    </div>
                    <div className='z-50 flex flex-col gap-2'>
                        <button className="text-white text-sm border-2 p-3 z-50 rounded-xl poppins hover:text-black hover:bg-white hover:border-white" onClick={() => history.push('/signin')}>Sign In</button>
                        <button className="text-sm text-black bg-red-200 z-50 p-4 poppins rounded-xl hover:bg-white hover:text-black" onClick={() => history.push('/signup')}>Sign Up</button>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default AuthorizeUser



