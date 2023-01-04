import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import Button from '../Form/Button';

const AuthorizeUserMobile = () => {
    const { user, signOutUser } = useAuth();
    const history = useHistory();
    const { orders } = useOrder();

    return (
        <>
            {
                user.displayName ? (
                    <>
                        <div className="flex flex-col items-center">
                            {!user.photoURL.endsWith("g") ? (<img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt={user.displayName} className="w-10 h-10 rounded-full" />) : (
                                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                            )}
                            <Button className="btn-primary w-full py-3 poppins" onClick={signOutUser} text="Logout" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-center space-x-6">
                            <button className="poppins" onClick={() => history.push('/signin')}>Sign In</button>
                            <button className=" btn-primary px-6 py-3  rounded-full" onClick={() => history.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default AuthorizeUserMobile
