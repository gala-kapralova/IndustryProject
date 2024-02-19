import { Link } from 'react-router-dom';
import './VerificationModal.scss';
import verificatioBadge from '../../Assets/badges/verifieduser.png';

const VerificationModal = ({ close }) => {
  return (
    <div className="verification-modal">
      <div className="verification-modal__content">
      <div className="verification-modal__profile">
      <div className="verification-modal__profile-badge">
            <img 
              src={verificatioBadge}
              alt="Badge"
            />
          </div>
        <h2>Test User, claim your badge by verifying the option below</h2>
        </div>
        <p className="verification-modal__benefit">Verified members get 60% more listings views on average</p>
        <div className="verification-modal__action">
          <Link to="/verify-with-clear" className="verification-modal__action-link">Verify your identity with CLEAR</Link>
          <p>Takes 5 min</p>
        </div>
        <div className="verification-modal__footer">
          <p>Verifications are free</p>
          <p>Verifying your profile confirms important details about your account, establishing your reliability and earning trust from potential buyers. <Link to="/">Learn more about verifications</Link></p>
        </div>
        <button className="verification-modal__close-btn" onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default VerificationModal;
