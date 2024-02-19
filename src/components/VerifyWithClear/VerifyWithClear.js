import { Link } from 'react-router-dom';
import './VerifyWithClear.scss';
import qrCode from '../../Assets/images/qr_code.png';

const VerifyWithClear = () => {
  return (
    <div className="verify-with-clear__modal">
      <div className="verify-with-clear__content">
        <Link to="/" className="verify-with-clear__back">
          ← Back
        </Link>
        <h2>Use your mobile device to verify</h2>
        <p className="verify-with-clear__instructions">
          Follow the directions to verify your identity using CLEAR on your mobile device.
        </p>
        <div className="verify-with-clear__qr-container">
          <img src={qrCode} alt="QR Code" className="verify-with-clear__qr-image" />
          <div className="verify-with-clear__directions">
            <strong>Directions:</strong>
            <ol>
              <li>Open the camera app on your phone</li>
              <li>Scan the QR code to the left</li>
              <li>Follow the steps on your phone</li>
            </ol>
          </div>
        </div>
        <Link to="/" className="verify-with-clear__learn-more">
          Learn more about how members verify their information.
        </Link>
      </div>
    </div>
  );
};

export default VerifyWithClear;