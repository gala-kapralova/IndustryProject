import { useState } from 'react';
import './MyProfile.css';
import { Link } from "react-router-dom";
import MyBadges from '../MyBadges/MyBadges';
import VerificationModal from "../VerificationModal/VerificationModal";
import verificatioBadge from '../../Assets/badges/verifieduser.png';

const MyProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [areBadgesVisible, setAreBadgesVisible] = useState(false);
  
    const handleVerifyClick = () => {
      setIsModalOpen(true);
      setAreBadgesVisible(false) // Hide MyBadges when VerificationModal is opened
    };

    const toggleBadges = () => {
        setAreBadgesVisible(!areBadgesVisible);
        if (areBadgesVisible) {
            setIsModalOpen(false); // Optionally, hide VerificationModal when MyBadges is shown
        }
    };

    return (
        <div className="profile">   
            <div className="profile__card">
                <div className="profile__card-header">
                    <div className="profile__banner-container">
                        <div className="profile__avatar-container">
                            <div className="profile__avatar-icon">T</div>
                        </div>
                    </div>
                    <div className="profile__name">Test User</div>   
                    <div className="profile__verify">
                    <button className="profile__verify-btn" onClick={handleVerifyClick}>
                        Verify
                    </button>
                    <div className="profile__verify-badge">
                        <img 
                            src={verificatioBadge}
                            alt="Badge"
                            />
                        </div>
                    </div>
                    <div className="profile__edit">
                        <Link to="/" className="profile__edit-link">Edit profile</Link> {/* Updated to use Link */}
                    </div> 
                </div> 
            </div>
            <div className='profile__menu'>
                <button className='profile__badge-btn' onClick={toggleBadges}>
                    Badges</button>
            </div>
            {isModalOpen && <VerificationModal close={() => setIsModalOpen(false)} />}
            {areBadgesVisible && <MyBadges close={toggleBadges} />}
        </div>
    );
};

export default MyProfile;

