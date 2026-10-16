import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, Award, Mail, Phone, Github, History, BookmarkPlus, UserCircle } from 'lucide-react';
import { getProfileImage } from '../../config/storage';
import packageJson from '../../../package.json';

const profilePhoto = getProfileImage('my-photo.jpg');

const Navigation: React.FC = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState<boolean>(false);

  const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
    const base =
      'group px-6 py-4 font-medium cursor-pointer transition-all duration-200 flex items-center gap-3 border-l-4 hover:bg-[#e6f0fd] hover:text-blue-600 hover:border-blue-600';
    return isActive
      ? `${base} bg-blue-100 text-blue-600 border-blue-600`
      : `${base} text-gray-600 border-transparent`;
  };

  const navIconClass = 'shrink-0 text-current';
  const dividerClass =
    'px-6 py-4 text-blue-800 text-lg font-bold uppercase tracking-wider mt-2 bg-[#e1effe] border-l-4 border-blue-600 relative z-[1]';

  const buildTime = import.meta.env.VITE_BUILD_TIME || '업데이트 정보 없음';

  return (
    <nav className="min-h-screen bg-[#f0f7ff] shadow-[2px_0_4px_rgba(0,0,0,0.05)] pb-3">
      {/* 프로필 섹션 */}
      <div className="p-6 border-b border-gray-200 bg-slate-50">
        <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto mb-4 overflow-hidden">
          <img src={profilePhoto} alt="Profile" className="w-full h-full object-contain" />
        </div>
        <div className="text-center">
          <h2 className="text-[1.4rem] font-bold text-blue-800 mb-2.5">문성종의 PortFolio</h2>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 text-base text-gray-600 font-medium transition-all duration-200">
              <Mail className="text-blue-600 shrink-0" size={18} />
              <span>stradivirus@naver.com</span>
            </div>
            <div className="flex items-center gap-3 text-base text-gray-600 font-medium transition-all duration-200">
              <Phone className="text-blue-600 shrink-0" size={18} />
              <span>010-9875-6325</span>
            </div>
            <a
              href="https://github.com/stradivirus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-gray-600 font-medium no-underline hover:text-blue-600 transition-all duration-200"
            >
              <Github className="text-blue-600 shrink-0" size={18} />
              <span>github.com/stradivirus</span>
            </a>
            <div className="flex items-center gap-3 text-base text-gray-600 font-medium transition-all duration-200">
              <History className="text-blue-600 shrink-0" size={18} />
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-gray-500 text-sm font-normal">마지막 업데이트</span>
                <span className="text-blue-600 font-medium text-sm">{buildTime}</span>
                <span className="text-blue-600 text-sm font-medium mt-0.5">v{packageJson.version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <NavLink to="/" className={getLinkClassName} end>
        <Home className={navIconClass} size={18} />
        <span className="break-keep">홈</span>
      </NavLink>
      <NavLink to="/Introduction" className={getLinkClassName} end>
        <UserCircle className={navIconClass} size={18} />
        <span className="break-keep">자기 소개</span>
      </NavLink>
      <NavLink to="/Records" className={getLinkClassName} end>
        <BookmarkPlus className={navIconClass} size={18} />
        <span className="break-keep">기록</span>
      </NavLink>

      <div className={`${dividerClass} !bg-[#e0f7fa] !text-[#1976d2]`}>팀 프로젝트</div>

      <NavLink to="/project/TP2" className={getLinkClassName}>
        <FolderOpen className={navIconClass} size={18} />
        <span className="break-keep">Cron을 이용한 환율 예측 프로젝트</span>
      </NavLink>

      <div className={dividerClass}>개인 프로젝트</div>
      <NavLink to="/project/4" className={getLinkClassName}>
        <FolderOpen className={navIconClass} size={18} />
        <span className="break-keep">React와 SpringBoot를 사용한 <br />사전 예약 시스템</span>
      </NavLink>
      <NavLink to="/project/3" className={getLinkClassName}>
        <FolderOpen className={navIconClass} size={18} />
        <span className="break-keep">WebSocket과 Redis를 사용한 <br />채팅 프로그램</span>
      </NavLink>
      <NavLink to="/project/1" className={getLinkClassName}>
        <FolderOpen className={navIconClass} size={18} />
        <span className="break-keep">Oracle Cloud로 배포한 Portfolio Website</span>
      </NavLink>
      <NavLink to="/project/5" className={getLinkClassName}>
        <FolderOpen className={navIconClass} size={18} />
        <span className="break-keep">기존의 CBT를 재구성 해 <br />서버리스로 구현</span>
      </NavLink>
      <NavLink to="/project/8" className={getLinkClassName}>
        <FolderOpen className={navIconClass} size={18} />
        <span className="break-keep">Oracle Cloud 인프라 관리 시스템</span>
      </NavLink>

      <div
        className={`${dividerClass} flex items-center select-none !text-sm !bg-sky-50 cursor-pointer`}
        onClick={() => setIsArchiveOpen(!isArchiveOpen)}
      >
        {isArchiveOpen ? '▼ ' : '▶ '}업데이트 종료
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-out ${isArchiveOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <NavLink to="/project/2" className={getLinkClassName}>
          <FolderOpen className={navIconClass} size={18} />
          <span className="break-keep">Django와 PostGreSql를<br /> 사용한 CBT 사이트</span>
        </NavLink>
        <NavLink to="/project/TP1" className={getLinkClassName}>
          <FolderOpen className={navIconClass} size={18} />
          <span className="break-keep">FastApi 기반 통합 관리 시스템</span>
        </NavLink>
      </div>

      <div className={dividerClass}>Certifications</div>
      <NavLink to="/Certifications" className={getLinkClassName}>
        <Award className={navIconClass} size={18} />
        <span className="break-keep">자격증</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;