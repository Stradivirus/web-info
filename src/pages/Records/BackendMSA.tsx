import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, Network, Terminal, CheckCircle2, FileCode } from 'lucide-react';

const HighlightComments = (code: string) => {
  const parts = code.split(/(\/\/.*$)/m);
  return parts.map((part, i) => {
    if (part.startsWith('//')) {
      return <span key={i} className="text-emerald-400 italic font-medium">{part}</span>;
    }
    return part;
  });
};

export const StudyContent: React.FC = () => {
  const [isRegistrationCodeVisible, setIsRegistrationCodeVisible] = useState(false);
  const [isServiceCodeVisible, setIsServiceCodeVisible] = useState(false);

  const registrationCode = `async register(data: PreRegistrationDto): Promise<RegistrationResponseDto> {
  try {
    // 쿠폰 서비스 호출 (내부 HTTP 통신)
    const couponResponse = await this.httpService.axiosRef.post(
      'http://coupon:8085/coupon/generate'
    );
    const couponCode = couponResponse.data.coupon_code;

    const now = moment().tz('Asia/Seoul');

    // 등록 데이터 생성
    await this.registrationModel.create({
      email: data.email,
      phone: data.phone,
      privacy_consent: data.privacy_consent,
      created_at: now.toDate(),
      coupon_code: couponCode,
      is_coupon_used: false
    });

    // 총 등록자 수 확인
    const totalCount = await this.registrationModel.count();

    // 알림 서비스 호출 (마일스톤 달성 체크)
    await this.httpService.axiosRef.post(
      'http://notification:8084/notifications/milestone',
      { count: totalCount }
    );

    return {
      message: '사전 등록이 완료되었습니다.',
      created_at: now.format('YYYY-MM-DD HH:mm:ss'),
      coupon_code: couponCode
    };
  } catch (error) {
    this.logger.error(\`Registration error: \${error.message}\`);
    throw error;
  }
}`;

  const serviceConfigCode = `// Notification Service (내부망 전용 - 외부 CORS/포트 비공개)
const port = process.env.PORT || 8084;
await app.listen(port);

// Coupon Service (프론트엔드 직접 호출 허용)
app.enableCors({
  origin: process.env.ALLOWED_ORIGINS || 'http://34.64.132.7:8080',
  methods: ['GET', 'POST'],
  credentials: true,
});
const port = process.env.PORT || 8085;
await app.listen(port);`;

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-purple-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-purple-300 shadow-sm flex items-start gap-4">
        <Network className="w-8 h-8 text-purple-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">단일 모놀리식 서버에서 도메인 기반 MSA로의 전환</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            단일 Express 서버에 강하게 결합되어 있던 사전등록·알림·쿠폰 기능을 <strong>3개의 독립적인 마이크로서비스(NestJS)</strong>로 분리했습니다.
            이를 통해 서비스별 선택적 스케일링과 내부망 접근 제어를 달성했습니다.
          </p>
        </div>
      </div>

      {/* 2. 서비스 분리 아키텍처 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Layers className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Microservices Architecture</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-indigo-600 text-lg">Registration Service</h4>
              <span className="px-2.5 py-0.5 rounded bg-indigo-50/70 text-indigo-600 font-mono text-sm font-bold">:8086</span>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
              사전등록 접수 및 메인 비즈니스 오케스트레이션 담당
            </p>
            <div className="text-xs md:text-sm text-slate-500 font-mono bg-slate-50 p-3 rounded-lg border border-slate-200/60">
              → Coupon (:8085) 쿠폰 발급 요청<br />
              → Notification (:8084) 알림 트리거
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-emerald-600 text-lg">Coupon Service</h4>
              <span className="px-2.5 py-0.5 rounded bg-emerald-50/70 text-emerald-600 font-mono text-sm font-bold">:8085</span>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
              신규 쿠폰 코드 생성, 조회 및 사용 상태 관리 전담
            </p>
            <div className="text-xs md:text-sm text-slate-500 font-mono bg-slate-50 p-3 rounded-lg border border-slate-200/60">
              ← Registration 내부 호출<br />
              ← Frontend 직접 쿠폰 사용 요청
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-amber-600 text-lg">Notification Service</h4>
              <span className="px-2.5 py-0.5 rounded bg-amber-50/70 text-amber-600 font-mono text-sm font-bold">:8084</span>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
              등록자 수 마일스톤 달성 시 외부 채널(Slack 등) 알림 발송
            </p>
            <div className="text-xs md:text-sm text-slate-500 font-mono bg-slate-50 p-3 rounded-lg border border-slate-200/60">
              🔒 Private Network Only<br />
              외부 직접 접근 완전 차단
            </div>
          </div>
        </div>
      </section>

      {/* 3. 주요 구현 코드 (Dark Accordion) */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Terminal className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Implementation Code</h3>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsRegistrationCodeVisible(!isRegistrationCodeVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-indigo-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">registration.service.ts (Service Orchestration)</span>
              </div>
              {isRegistrationCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isRegistrationCodeVisible && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-slate-300 overflow-x-auto font-mono">
                <code>{HighlightComments(registrationCode)}</code>
              </pre>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsServiceCodeVisible(!isServiceCodeVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">main.ts (Internal vs External Network Isolation)</span>
              </div>
              {isServiceCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isServiceCodeVisible && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-slate-300 overflow-x-auto font-mono">
                <code>{HighlightComments(serviceConfigCode)}</code>
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* 4. 개선 성과 (연한 톤 카드) */}
      <div className="bg-slate-50/90 p-7 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
        <h4 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2.5">
          <span className="w-6 h-1 bg-purple-400 rounded-full" />
          MSA Migration Impact
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '서비스 간 단일 책임 원칙(SRP) 달성으로 장애 격리 및 독립 배포 가능',
            '트래픽이 집중되는 서비스(Registration/Coupon)만 선택적으로 스케일 아웃 가능',
            'Notification 서비스를 컨테이너 내부망에 격리하여 외부 노출 공격 표면 제거',
            'Docker Compose 멀티 네트워크와 연동하여 유연한 컨테이너 오케스트레이션 구현',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200/70 p-4 rounded-2xl">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StudyContent;