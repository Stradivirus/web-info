import React from 'react';
import { 
  MessageSquare, 
  UserPlus, 
  GitCompare, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  FileCode,
  Users,
  Radio
} from 'lucide-react';

// 주석 하이라이팅을 위한 헬퍼 함수
const HighlightComments = (code: string) => {
  const parts = code.split(/(#.*$|\/\/.*$|\/\*[\s\S]*?\*\/|"{3}[\s\S]*?"{3})/m);
  return parts.map((part, i) => {
    if (part.startsWith('#') || part.startsWith('//') || part.startsWith('/*') || part.startsWith('"""')) {
      return <span key={i} className="text-emerald-500/90 italic font-medium">{part}</span>;
    }
    return part;
  });
};

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 도입 및 바이브 코딩 정의 */}
      <section>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg mb-8">
          <p className="text-indigo-50 leading-relaxed text-lg">
            바이브 코딩(Vibe Coding) 시대의 주석은 단순한 설명이 아닙니다. 
            <strong> 직접 코드를 타이핑하지 않는 대신, AI가 나의 의도와 설계 철학을 정확히 이해하고 구현하도록 만드는 '고도의 프롬프트'이자 '맥락의 집합체'</strong>입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <AlertTriangle className="w-16 h-16" />
            </div>
            <h4 className="font-bold text-rose-600 mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-rose-100 rounded text-xs">Phase 1</span>
              완벽한 기억 vs AI의 소통 부재
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-rose-400 font-bold">•</span>
                10,000줄의 코드를 직접 짠 것이 아니더라도 모든 로직을 완벽히 이해하고 기억함
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400 font-bold">•</span>
                하지만 AI는 코드만 보고는 나의 '바이브'와 '비즈니스 의도'를 읽지 못해 자꾸 헛다리를 짚음
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400 font-bold">•</span>
                AI에게 일일이 설명하는 수고를 덜기 위해, <strong>코드 자체에 AI를 위한 가이드(주석)를 박아넣기 시작</strong>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <UserPlus className="w-16 h-16" />
            </div>
            <h4 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 rounded text-xs">Phase 2</span>
              지휘자로서의 개발자
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <strong>AI Orchestration</strong>: 주석으로 '판'을 깔아주고 AI가 춤추게 함
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400 font-bold">•</span>
                직접 구현하는 시간보다 <strong>의도를 명확히 정의하는 시간</strong>에 집중
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400 font-bold">•</span>
                주석이 곧 설계도가 되어 AI가 생성하는 코드의 품질을 결정함
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. 실전 코드 진화 과정 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <GitCompare className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xl font-bold text-slate-800">The Tower 백엔드 실전 사례</h3>
        </div>

        <div className="space-y-8">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-800 px-6 py-3 flex items-center justify-between">
              <span className="text-slate-400 text-xs font-mono tracking-widest uppercase">Real Case: Battle Report Processing</span>
              <FileCode className="w-4 h-4 text-slate-400" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x border-b">
              {/* Before */}
              <div className="p-6">
                <div className="text-[10px] font-bold text-rose-500 mb-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                  AI의 단순 구현 (Vibe 없음)
                </div>
                <pre className="text-[13px] text-slate-600 font-mono bg-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code>{HighlightComments(`@router.post("/")
def create_report(report_text: str = Form(...), db: Session = Depends(get_db)):
    try:
        parsed_data = parse_battle_report(report_text)
        result = crud.create_battle_record(db, parsed_data)
        
        total_count = crud.count_reports(db)
        if total_count % 50 == 0:
            send_slack_notification("New record saved")
            
        return result
    except Exception as e:
        raise HTTPException(status_code=400)`)}</code>
                </pre>
              </div>
              {/* After */}
              <div className="p-6 bg-emerald-50/30">
                <div className="text-[10px] font-bold text-emerald-600 mb-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  실제 The Tower 코드 (Vibe 주입)
                </div>
                <pre className="text-[13px] text-slate-700 font-mono bg-white p-4 rounded-lg border border-emerald-100 overflow-x-auto">
                  <code>{HighlightComments(`# ==========================================
# 1. 생성 (POST) - 리포트 텍스트 파싱 및 저장
# ==========================================
@router.post("/", response_model=BattleMainResponse)
def create_report(report_text: str = Form(...), ...):
    """
    텍스트 형식의 전투 리포트를 파싱하여 DB 저장.
    - 티어별 서버 최고 기록(Max Wave) 갱신 시도
    - 50건 단위 발생 시 Slack 알림 (Background)
    """
    try:
        # 알림 전송 (이벤트성이므로 Background 처리)
        if background_tasks:
            total_count = crud.count_reports(db)
            if total_count > 0 and total_count % 50 == 0:
                msg = f"⚔️ [New Record] {total_count}번째!"
                background_tasks.add_task(...)
                
        return result
    except Exception as e:
        print(f"Report Creation Error: {e}") # 로깅 필수
        raise HTTPException(status_code=400)`)}</code>
                </pre>
              </div>
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <p className="text-xs text-slate-500 italic">"단순한 기능 구현을 넘어, '이유'와 '유지보수 가이드'를 AI에게 직접 지시합니다."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI 시너지 및 협업 전략 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Zap className="w-5 h-5 text-orange-500" />
          <h3 className="text-xl font-bold text-slate-800">바이브 코딩의 3대 핵심 가치</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-200 rounded-2xl hover:border-blue-300 transition-colors group">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors shadow-sm">
              <Radio className="w-5 h-5 text-blue-600 group-hover:text-white" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2 text-sm">맥락 전달 (Contextualizing)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">AI에게 단순히 기능을 시키는 것이 아니라, 왜 이 기능이 필요한지의 '바이브'를 주입합니다.</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl hover:border-purple-300 transition-colors group">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors shadow-sm">
              <Users className="w-5 h-5 text-purple-600 group-hover:text-white" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2 text-sm">지휘와 감독 (Directing)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">코드를 직접 쓰지 않는 대신, 생성 결과물이 의도에 맞는지 주석이라는 기준점으로 검토합니다.</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl hover:border-emerald-300 transition-colors group">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors shadow-sm">
              <CheckCircle className="w-5 h-5 text-emerald-600 group-hover:text-white" />
            </div>
            <h4 className="font-bold text-slate-800 mb-2 text-sm">생산성 극대화</h4>
            <p className="text-xs text-slate-500 leading-relaxed">주석 하나로 수백 줄의 코드를 정확히 생성하게 함으로써 개발 속도를 비약적으로 높입니다.</p>
          </div>
        </div>
      </section>

      {/* 4. 나만의 주석 원칙 */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Radio className="w-6 h-6 text-indigo-400" />
            Vibe Coding Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex gap-4">
              <span className="text-indigo-400 font-mono font-bold">01</span>
              <div>
                <h5 className="font-bold mb-1">AI의 '페르소나'를 정의하라</h5>
                <p className="text-xs text-slate-400">어떤 스타일로 코드를 짤지 주석으로 성격을 부여합니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-mono font-bold">02</span>
              <div>
                <h5 className="font-bold mb-1">핵심 제약 사항을 선언하라</h5>
                <p className="text-xs text-slate-400">AI가 넘지 말아야 할 선과 반드시 지켜야 할 규칙을 명시합니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-mono font-bold">03</span>
              <div>
                <h5 className="font-bold mb-1">연관 맥락(Files/Context)을 연결하라</h5>
                <p className="text-xs text-slate-400">AI가 다른 파일과의 관계를 놓치지 않도록 힌트를 줍니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-indigo-400 font-mono font-bold">04</span>
              <div>
                <h5 className="font-bold mb-1">지속적으로 주석을 리팩토링하라</h5>
                <p className="text-xs text-slate-400">AI의 결과물이 만족스럽지 않다면, 코드가 아닌 주석을 먼저 수정합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyContent;
