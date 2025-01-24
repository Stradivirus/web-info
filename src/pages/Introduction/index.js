import React from 'react';
import JourneyAnimation from './components/JourneyAnimation';

const Introduction = () => {
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
                안녕하세요. 클라우드 엔지니어를 목표로 하는 문성종입니다.
              </p>
              <div className="space-y-2">
                <p>
                  Python과 JavaScript를 활용하여 프로젝트의 기획부터 배포까지 모든 과정을 수행할 수 있으며,
                  AWS와 GCP를 활용한 클라우드 환경 구축 경험이 있습니다.
                </p>
                <p>
                  클라우드 교육 과정의 프로젝트에서는 팀장을 맡아 팀원들과의 원활한 소통과 협업을 통해 
                  최우수상을 수상하였습니다.
                </p>
                <p>
                  탁월한 문제 해결 능력과 협업 경험을 바탕으로 팀과 함께 성장하며 가치 있는 서비스를 만들어 나가고자 합니다.
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