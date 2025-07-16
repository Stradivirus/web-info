import React, { useEffect } from 'react';
import pgHbaImg from '../../assets/images/project/pg_hba_conf.png'; // 준비한 설정 스샷
import pgConfImg from '../../assets/images/project/postgresql_conf.png'; // 준비한 설정 스샷

export const StudyContent = ({ onImageClick, registerImages }) => {
  useEffect(() => {
    registerImages([pgHbaImg, pgConfImg]);
  }, [registerImages]);

  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-3">구현 배경</h3>
        <div className="space-y-2 text-gray-600">
          <p>
            Docker로 서비스 관리 중 컨테이너 재시작이나 이미지 갱신 과정에서 DB가 초기화되는 문제가 발생하곤 했습니다.
            이러한 위험을 줄이고 데이터의 안정성과 관리 효율성을 높이기 위해, DB를 오라클 클라우드 VM에 분리하여 운영하게 되었습니다.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">구현 환경</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Oracle Cloud Free Tier VM</li>
          <li>PostgreSQL 17</li>
          <li>Rocky Linux 9</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">주요 설정</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>pg_hba.conf에서 외부 접속 허용, 인증 방식(md5), 특정 IP 허용 등 접근 제어 적용</li>
          <li>postgresql.conf에서 listen_addresses, port 등 외부 연결을 위한 네트워크 설정 적용</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">개선 및 학습 효과</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>실제 클라우드 환경에서의 DB 접근 제어 경험</li>
          <li>보안 및 네트워크 설정의 중요성 체감</li>
          <li>운영 환경에서의 실전 문제 해결 및 적용 경험</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">설정 스크린샷</h3>
        <div className="flex gap-8">
          <div className="flex-1">
            <p className="mb-2 text-base text-gray-800">pg_hba.conf 설정</p>
            <div
              className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => onImageClick(0)}
            >
              <img
                src={pgHbaImg}
                alt="pg_hba.conf 설정"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2 text-base text-gray-800">postgresql.conf 설정</p>
            <div
              className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => onImageClick(1)}
            >
              <img
                src={pgConfImg}
                alt="postgresql.conf 설정"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};