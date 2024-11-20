import React, { useState, useEffect } from 'react';
import { Mail, Phone, Award, Github } from 'lucide-react';
import './Profile.css';
import profilePhoto from './my-photo.jpg';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 방향 확인 (아래로 스크롤하면 헤더 숨김)
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`profile-container ${isVisible ? '' : 'header-hidden'}`}>
      <div className="profile-content">
        <div className="profile-photo">
          <img 
            src={profilePhoto}
            alt="Profile" 
            className="profile-image"
          />
        </div>
        <div className="profile-details">
          <div className="profile-main">
            <h1>문성종</h1>
            <div className="profile-sub">Devops Developer</div>
          </div>
          <div className="profile-certifications">
            <div className="certification-item">
              <Award className="cert-icon" size={16} />
              <span>정보처리기능사</span>
            </div>
            <div className="certification-item">
              <Award className="cert-icon" size={16} />
              <span>AWS Certified Cloud Practitioner</span>
            </div>
            <div className="certification-item">
              <Award className="cert-icon" size={16} />
              <span>NAVER Cloud Platform Certified Associate</span>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-info-item">
              <Mail className="info-icon" size={16} />
              <span>stradivirus@naver.com</span>
            </div>
            <div className="profile-info-item">
              <Phone className="info-icon" size={16} />
              <span>010-9875-6325</span>
            </div>
            <div className="profile-info-item">
              <Github className="info-icon" size={16} />
              <span>github.com/stradivirus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;