import React from 'react';
import { GitBranch, Layers, PlayCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { getVideoUrl } from '../../config/storage';

const cicdVideo = getVideoUrl('cicd.mp4');

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-sky-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-sky-300 shadow-sm flex items-start gap-4">
        <RefreshCw className="w-8 h-8 text-sky-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">Jenkins(CI) + ArgoCD(CD) 기반 쿠버네티스 무중단 배포</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            소스 코드 변경 감지부터 Docker 이미지 빌드·푸시, 그리고 쿠버네티스 클러스터의 <strong>Canary 무중단 롤링 업데이트</strong>까지 전 과정을 자동화한 GitOps 파이프라인 실습입니다.
          </p>
        </div>
      </div>

      {/* 2. 파이프라인 아키텍처 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <GitBranch className="w-6 h-6 text-sky-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">CI/CD Pipeline Flow</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/70 text-blue-600 text-sm font-bold border border-blue-100">
              Continuous Integration (Jenkins)
            </div>
            <h4 className="font-bold text-slate-800 text-lg">자동 빌드 및 레지스트리 배포</h4>
            <ul className="space-y-2.5 text-sm md:text-base text-slate-600 leading-relaxed">
              <li className="flex gap-2.5"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /><span><code className="bg-slate-100 px-1.5 py-0.5 rounded">yaml</code> 매니페스트 폴더를 제외한 애플리케이션 소스 변경사항 자동 감지</span></li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /><span>변경 감지 시 즉시 신규 Docker 컨테이너 이미지 빌드</span></li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" /><span>빌드 완료된 이미지를 Docker Hub 레지스트리에 자동 업로드</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/70 text-emerald-600 text-sm font-bold border border-emerald-100">
              Continuous Delivery (ArgoCD &amp; K8s)
            </div>
            <h4 className="font-bold text-slate-800 text-lg">GitOps 동기화 및 Canary 배포</h4>
            <ul className="space-y-2.5 text-sm md:text-base text-slate-600 leading-relaxed">
              <li className="flex gap-2.5"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><span>Git 저장소의 <code className="bg-slate-100 px-1.5 py-0.5 rounded">yaml</code> 디렉토리 및 Docker Hub 이미지 태그 모니터링</span></li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><span>Canary 배포 전략을 적용해 Pod를 2개씩 순차적으로 안전하게 업데이트</span></li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><span>UI 변경(버튼 텍스트 <code className="bg-slate-100 px-1.5 py-0.5 rounded">send → 전송</code>) 및 Pod 레플리카(8개 → 7개) 무중단 반영</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 실습 데모 영상 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <PlayCircle className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-800">실습 데모 영상</h3>
          </div>
          <span className="text-sm font-medium text-slate-400">Kubernetes + Jenkins + ArgoCD</span>
        </div>

        <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
          <video
            src={cicdVideo}
            controls
            playsInline
            className="w-full max-h-[560px] object-contain"
          >
            브라우저가 비디오 재생을 지원하지 않습니다.
          </video>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50/70 px-5 py-4 rounded-xl border border-slate-200/60 text-sm md:text-base text-slate-600">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-sky-500" />
            <span>코드 커밋 후 Jenkins 빌드와 ArgoCD Pod 롤링 업데이트가 실시간으로 이어지는 데모입니다.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default StudyContent;