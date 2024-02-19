import { useState } from 'react';
import VerificationModal from "../VerificationModal/VerificationModal";
//import './Verification.scss';

const Verification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
      <div className="verification-page">
        <button onClick={openModal} className="verification-page__verify-btn">
            Claim Your Free Badge
        </button>

        {isModalOpen && <VerificationModal close={closeModal} />}
      </div>
    );
};

export default Verification;
