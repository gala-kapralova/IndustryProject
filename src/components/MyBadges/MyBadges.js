import React from 'react';
import './MyBadges.scss';

// Import your SVG icons (actually PNGs in this case)
import Icon1 from '../../Assets/badges/5star.png';
import Icon2 from '../../Assets/badges/noghost.png';
import Icon3 from '../../Assets/badges/newaccount.png';
import Icon4 from '../../Assets/badges/5yearbadge.png';
import Icon5 from '../../Assets/badges/10yearbadge.png';
import Icon6 from '../../Assets/badges/15yearbadge.png';
import Icon7 from '../../Assets/badges/platinumcar.png';
import Icon8 from '../../Assets/badges/rocketseller.png';
import Icon9 from '../../Assets/badges/verifieduser.png';

const MyBadges = ({ close }) => {
  // Group icons by section
  const sections = [
    { title: "Achievements", icons: [Icon1, Icon2, Icon3] },
    { title: "Milestones", icons: [Icon4, Icon5, Icon6] },
    { title: "Leaderboards", icons: [Icon7, Icon8, Icon9] },
  ];

  return (
    <div className="myBadges">
      {sections.map((section, index) => (
        <div key={index} className="myBadges__section">
          <div className="myBadges__title">{section.title}</div>
          <div className="myBadges__table">
            {section.icons.map((iconSrc, iconIndex) => (
              // Use img tag with src attribute to display images
              <img key={iconIndex} src={iconSrc} alt={`Icon ${iconIndex + 1}`} className="myBadges__icon" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBadges;
