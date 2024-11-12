import React from 'react';
import { Mail, Phone, Award, Github } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-main">
        <h1>Portfolio</h1>
        <div className="profile-sub">Frontend Developer</div>
      </div>
      <div className="profile-info">
        <div className="profile-info-item">
          <Award className="info-icon" size={16} />
          <span>정보처리기사</span>
        </div>
        <div className="profile-info-item">
          <Mail className="info-icon" size={16} />
          <span>example@email.com</span>
        </div>
        <div className="profile-info-item">
          <Phone className="info-icon" size={16} />
          <span>010-1234-5678</span>
        </div>
        <div className="profile-info-item">
          <Github className="info-icon" size={16} />
          <span>github.com/username</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;