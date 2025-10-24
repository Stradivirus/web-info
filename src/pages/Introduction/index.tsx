import React from 'react';
import JourneyAnimation from '../../components/JourneyAnimation';

const Introduction: React.FC = () => {
  return (
    <main className="main-content">
      <div className="main-inner">
        {/* 애니메이션 섹션 */}
        <section className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <JourneyAnimation />
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="w-full bg-white rounded-lg shadow-lg overflow-hidden mt-6">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">소개</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p className="font-medium">
                안녕하세요! 풀스택 개발자이자 빅데이터 엔지니어를 목표로 성장하고 있는 문성종입니다.
              </p>
              <div className="space-y-2">
                <p>
                  최신 웹·서버 기술들을 활용해서 프론트엔드부터 백엔드, 데이터 파이프라인까지 만들어보며 경험을 쌓아왔습니다.
                </p>
                <p>
                  자동화된 CI/CD 파이프라인을 구축하고 운영하면서 개발과 배포 과정을 더 효율적으로 만드는 일에 재미를 느꼈습니다.
                </p>
                <p>
                  데이터 수집부터 가공, 분석, 시각화까지 자동화하여 빅데이터 프로젝트들을 통해 대용량 데이터를 다루는 실력을 기르고 있습니다.
                </p>
                <p>
                  여러 프로젝트에서 능동적으로 문제를 해결해나가면서, 팀원들과 함께 배우고 성장하는 개발 문화를 만들어가고 싶습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Introduction;