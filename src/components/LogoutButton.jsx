import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';

const LogoutButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoading(true);

        localStorage.removeItem('token');

        setTimeout(() => {
            setShowModal(false);
            navigate('/');
            window.location.reload();
        }, 2000);
    };

    return (
        <>
           <button 
    onClick={() => setShowModal(true)} 
    className="bg-[#509CDB] text-white border border-transparent rounded-md px-4 py-2 duration-300 hover:bg-white hover:text-[#509CDB] hover:border-[#509CDB] focus:outline-none">
    Log out
</button>

            <LogoutModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleLogout}
                isLoading={isLoading}
            />
        </>
    );
};

export default LogoutButton;
