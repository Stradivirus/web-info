import React from 'react';
import { Mail, Phone, Award, Github } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-main">
        <h1>Portfolio</h1>
        <div className="profile-sub">Devops Developer</div>
      </div>
      <div className="profile-certifications">
        <div className="certification-item">
          <Award className="cert-icon" size={16} style={{ verticalAlign: 'text-bottom' }} />
          <span>정보처리기능사</span>
        </div>
        <div className="certification-item">
          <Award className="cert-icon" size={16} style={{ verticalAlign: 'text-bottom' }} />
          <span>AWS Certified Cloud Practitioner</span>
        </div>
        <div className="certification-item">
          <Award className="cert-icon" size={16} style={{ verticalAlign: 'text-bottom' }} />
          <span>NAVER Cloud Platform Certified Associate</span>
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-info-item">
          <Mail className="info-icon" size={16} style={{ verticalAlign: 'text-bottom' }} />
          <span>stradivirus@naver.com</span>
        </div>
        <div className="profile-info-item">
          <Phone className="info-icon" size={16} style={{ verticalAlign: 'text-bottom' }} />
          <span>010-9875-6325</span>
        </div>
        <div className="profile-info-item">
          <Github className="info-icon" size={16} style={{ verticalAlign: 'text-bottom' }} />
          <span>github.com/stradivirus</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;