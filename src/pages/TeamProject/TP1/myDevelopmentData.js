// 내가 개발한 부분 데이터
export const myDevelopmentData = {
  features: [
    {
      id: 'auth-system',
      title: '� 로그인 시스템 개발',
      description: '프론트엔드와 백엔드를 통합한 완전한 로그인 시스템을 구축했습니다.',
      isExpanded: false, // 접었다 폈다 상태 관리
      frontend: {
        title: '프론트엔드 (React + TypeScript)',
        description: '사용자 인증을 위한 로그인 패널과 AuthForm 컴포넌트를 개발했습니다. TypeScript를 활용하여 타입 안정성을 확보하고, 사이버 펑크 스타일의 UI로 사용자 경험을 향상시켰습니다.',
        codeSnippet: {
          comment: '// 로그인 패널 컴포넌트',
          code: [
            'interface LoginPanelProps {',
            '  authMode: "login" | null;',
            '  handleAuthSuccess: (user: any) => void;',
            '  navigate: (path: string) => void;',
            '}',
            '',
            'const LoginPanel: React.FC<LoginPanelProps> = ({',
            '  authMode, handleAuthSuccess, navigate',
            '}) => (',
            '  <div style={{ background: "rgba(30, 40, 55, 0.95)" }}>',
            '    {authMode === "login" && <AuthForm onSuccess={handleAuthSuccess} />}',
            '  </div>',
            ');'
          ]
        }
      },
      backend: {
        title: '백엔드 (FastAPI + MongoDB)',
        description: 'FastAPI를 활용하여 회원/관리자 통합 인증 시스템을 구축했습니다. MongoDB와 연동하여 사용자 데이터를 관리하고, bcrypt를 이용한 안전한 비밀번호 해싱을 구현했습니다.',
        codeSnippet: {
          comment: '// 회원/관리자 통합 로그인 API',
          code: [
            '@router.post("/api/login")',
            'def universal_login(req: MemberLoginRequest):',
            '    member = member_collection.find_one({"userId": req.userId})',
            '    if member and bcrypt.verify(req.password, member["password"]):',
            '        return {',
            '            "id": str(member["_id"]), "userId": member["userId"],',
            '            "nickname": member["nickname"], "type": "member"',
            '        }',
            '    admin = admin_collection.find_one({"userId": req.userId})',
            '    if admin and bcrypt.verify(req.password, admin["password"]):',
            '        return { "type": "admin", ... }',
            '    raise HTTPException(400, "아이디 또는 비밀번호가 올바르지 않습니다.")'
          ]
        }
      }
    },
    {
      id: 'board-system',
      title: '📝 게시판 시스템 개발',
      description: '완전한 CRUD 기능을 갖춘 게시판 시스템을 구축했습니다. 공지사항, 페이징, 댓글, 권한 관리 등 실무 수준의 기능을 구현했습니다.',
      isExpanded: false,
      frontend: {
        title: '프론트엔드 (React + TypeScript)',
        description: '게시글 목록, 상세보기, 작성/수정 폼, 댓글 시스템을 구현했습니다. 페이징, 공지사항 우선 표시, 권한별 UI 제어 등 사용자 친화적인 인터페이스를 제공합니다.',
        codeSnippet: {
          comment: '// 게시글 작성/수정 폼',
          code: [
            'const PostForm: React.FC<Props> = ({ isEdit }) => {',
            '  const [form, setForm] = useState({',
            '    title: "", content: "", writerId: user?.userId ?? "",',
            '    writerNickname: user?.nickname ?? "", isNotice: false',
            '  });',
            '',
            '  const handleSubmit = async (e: React.FormEvent) => {',
            '    const method = isEdit ? "PUT" : "POST";',
            '    const url = isEdit ? API_URLS.POST(id!) : API_URLS.POSTS;',
            '    const res = await fetch(url, {',
            '      method, headers: {"Content-Type": "application/json"},',
            '      body: JSON.stringify({ ...form, writerId: user?.userId })',
            '    });',
            '    if (res.ok) navigate("/board");',
            '  };'
          ]
        }
      },
      backend: {
        title: '백엔드 (FastAPI + MongoDB)',
        description: 'RESTful API 설계로 게시글/댓글의 CRUD 작업을 처리합니다. Soft Delete, 페이징, 정렬, 권한 검증 등 확장 가능한 아키텍처를 구현했습니다.',
        codeSnippet: {
          comment: '// 게시글 목록 조회 API (페이징 + 정렬)',
          code: [
            '@router.get("/posts")',
            'def get_posts(page: int = Query(0, ge=0), size: int = Query(15, ge=1)):',
            '    skip = page * size',
            '    query = {"$or": [{"deleted": False}, {"deleted": {"$exists": False}}]}',
            '    total_elements = board_collection.count_documents(query)',
            '    cursor = board_collection.find(query).sort([',
            '        ("isNotice", -1), ("createdDate", -1),',
            '        ("createdTime", -1), ("_id", -1)',
            '    ]).skip(skip).limit(size)',
            '    return {"content": posts, "totalElements": total_elements}'
          ]
        }
      }
    },
    {
      id: 'dashboard-system',
      title: '📊 관리자 대시보드 시스템 개발',
      description: '실시간 데이터 시각화와 팀별 요약 통계를 제공하는 관리자 대시보드를 구축했습니다. Chart.js를 활용한 그래프로 비즈니스 인사이트를 제공합니다.',
      isExpanded: false,
      frontend: {
        title: '프론트엔드 (React + TypeScript + Chart.js)',
        description: 'Chart.js를 활용하여 월별 증감 그래프와 팀별 요약 카드를 구현했습니다. 동적 색상 매핑, 중복 데이터 dash 처리, 반응형 차트 등 사용자 친화적인 데이터 시각화를 제공합니다.',
        codeSnippet: {
          comment: '// 대시보드 요약 그래프 컴포넌트',
          code: [
            'const DashboardSummaryGraphs: React.FC = () => {',
            '  const [data, setData] = useState<any>(null);',
            '  const [loading, setLoading] = useState(false);',
            '',
            '  useEffect(() => {',
            '    setLoading(true);',
            '    fetch(API_URLS.DASHBOARD_SUMMARY_GRAPHS)',
            '      .then(res => res.json())',
            '      .then(setData)',
            '      .finally(() => setLoading(false));',
            '  }, []);',
            '',
            '  // 중복 dash 처리 함수 (동일 데이터 라인 dash 처리)',
            '  function makeDashDatasets(keys: string[], allDataArr: number[][], colorMap: Record<string, string>) {',
            '    const dataStrArr = allDataArr.map(arr => JSON.stringify(arr));',
            '    const groupMap: Record<string, number[]> = {};',
            '    dataStrArr.forEach((str, idx) => {',
            '      if (!groupMap[str]) groupMap[str] = [];',
            '      groupMap[str].push(idx);',
            '    });',
            '    return keys.map((key, idx) => {',
            '      const group = groupMap[dataStrArr[idx]];',
            '      const isDuplicated = group.length > 1;',
            '      return {',
            '        label: key,',
            '        data: allDataArr[idx],',
            '        borderColor: colorMap[key] || "#764ba2",',
            '        borderDash: isDuplicated ? [6, 6] : undefined',
            '      };',
            '    });',
            '  };'
          ]
        }
      },
      backend: {
        title: '백엔드 (FastAPI + MongoDB + Pandas)',
        description: 'MongoDB 컬렉션에서 데이터를 집계하고 Pandas를 활용하여 월별 통계를 생성합니다. 사업팀(플랜별), 개발팀(OS별), 보안팀(위험도별) 데이터를 실시간으로 분석하여 API로 제공합니다.',
        codeSnippet: {
          comment: '// 대시보드 요약 그래프 데이터 API',
          code: [
            '@router.get("/dashboard/summary-graphs")',
            'def dashboard_summary_graphs():',
            '    companies_data = list(companies_collection.find())',
            '    df_comp = pd.DataFrame(companies_data)',
            '    if not df_comp.empty:',
            '        ensure_datetime(df_comp, "contract_start")',
            '        ensure_datetime(df_comp, "contract_end")',
            '        ensure_column(df_comp, "plan", None)',
            '    recent_months = get_recent_months(3)',
            '    biz_data = get_biz_data(df_comp, recent_months)',
            '',
            '    dev_data_raw = list(dev_collection.find())',
            '    df_dev = pd.DataFrame(dev_data_raw)',
            '    if not df_dev.empty:',
            '        ensure_datetime(df_dev, "start_date")',
            '        ensure_column(df_dev, "dev_status", None)',
            '    dev_data = get_dev_data(df_dev, recent_months)',
            '',
            '    return {',
            '        "biz": biz_data,',
            '        "dev": dev_data,',
            '        "security": security_data',
            '    }'
          ]
        }
      }
    },
    {
      id: 'user-management-system',
      title: '👥 사용자 관리 시스템 개발',
      description: '관리자가 회원과 관리자를 통합 관리할 수 있는 시스템을 구축했습니다. 회원 초대, 목록 조회, 인라인 편집, 중복 체크, 회사 검색 등 완전한 사용자 관리 기능을 제공합니다.',
      isExpanded: false,
      frontend: {
        title: '프론트엔드 (React + TypeScript)',
        description: '제네릭 타입을 활용한 재사용 가능한 UserList 컴포넌트와 실시간 중복 체크가 가능한 MemberInviteForm을 구현했습니다. 인라인 편집, 회사 검색, 유효성 검증 등 사용자 친화적인 관리 인터페이스를 제공합니다.',
        codeSnippet: {
          comment: '// 제네릭 사용자 목록 테이블 컴포넌트',
          code: [
            'function UserList<T extends { id: string; nickname: string; userId?: string; company_name?: string }>(',
            '  { title, columns, data, setData, loading, accountType, onAfterNicknameUpdate, showCompanySearch = true }: UserListProps<T>',
            ') {',
            '  const [editingId, setEditingId] = useState<string | null>(null);',
            '  const [nicknameValue, setNicknameValue] = useState<string>("");',
            '  const [companySearch, setCompanySearch] = useState("");',
            '',
            '  // 닉네임 클릭 시 수정모드 진입',
            '  const handleNicknameClick = (row: T) => {',
            '    setEditingId(row.id);',
            '    setNicknameValue(row.nickname);',
            '  };',
            '',
            '  // 닉네임 업데이트 API 호출',
            '  const handleNicknameUpdate = async (id: string, nickname: string) => {',
            '    const user = data.find(u => u.id === id);',
            '    const res = await fetch(API_URLS.CHANGE_NICKNAME, {',
            '      method: "POST",',
            '      headers: { "Content-Type": "application/json" },',
            '      body: JSON.stringify({ userId: user?.userId, new_nickname: nickname, accountType })',
            '    });',
            '    if (onAfterNicknameUpdate) onAfterNicknameUpdate(id, nickname);',
            '  };'
          ]
        }
      },
      backend: {
        title: '백엔드 (FastAPI + MongoDB + SMTP)',
        description: 'FastAPI를 활용하여 회원/관리자 통합 관리 API를 구축했습니다. 중복 체크, 임시 비밀번호 생성, 이메일 발송, 회사 검색 등 완전한 사용자 관리 백엔드를 구현했습니다.',
        codeSnippet: {
          comment: '// 회원/관리자 초대 API (임시 비밀번호 발송)',
          code: [
            '# 임시 비밀번호 생성 함수 (영문+숫자 랜덤)',
            'def generate_temp_password(length=10):',
            '    chars = string.ascii_letters + string.digits',
            '    return "".join(random.choice(chars) for _ in range(length))',
            '',
            '# 이메일 발송 함수 (임시 비밀번호 안내)',
            'def send_email(to_email: str, user_id: str, temp_password: str):',
            '    smtp_server = "smtp.naver.com"',
            '    smtp_port = 587',
            '    smtp_user = "admin@*****.com"  # 실제 이메일 주소 가림',
            '    smtp_password = "************"  # 실제 비밀번호 가림',
            '    subject = "임시 비밀번호 안내"',
            '    body = f"안녕하세요.\\n\\n아이디: {user_id}\\n임시 비밀번호: {temp_password}\\n로그인 후 비밀번호를 꼭 변경해주세요."',
            '    msg = MIMEText(body)',
            '    msg["Subject"] = subject',
            '    msg["From"] = smtp_user',
            '    msg["To"] = to_email',
            '    # SMTP 서버로 메일 전송',
            '    with smtplib.SMTP(smtp_server, smtp_port) as server:',
            '        server.starttls()',
            '        server.login(smtp_user, smtp_password)',
            '        server.sendmail(smtp_user, to_email, msg.as_string())',
            '',
            '@router.post("/admin/member-invite")',
            'def admin_member_invite(',
            '    userId: str = Body(...), nickname: str = Body(...),',
            '    email: str = Body(...), accountType: str = Body("member")',
            '):',
            '    # 아이디 중복 체크',
            '    if admin_collection.find_one({"userId": userId}) or member_collection.find_one({"userId": userId}):',
            '        raise ValueError("이미 존재하는 아이디입니다.")',
            '    ',
            '    temp_password = generate_temp_password()  # 랜덤 임시 비밀번호 생성',
            '    hashed_password = bcrypt.hash(temp_password)  # 해싱하여 저장',
            '    member = {',
            '        "userId": userId, "nickname": nickname,',
            '        "password": hashed_password, "email": email,',
            '        "joinedAt": datetime.now()',
            '    }',
            '    collection = admin_collection if accountType == "admin" else member_collection',
            '    collection.insert_one(member)',
            '    send_email(email, userId, temp_password)  # 원본 비밀번호로 이메일 발송',
            '    return {"message": "임시 비밀번호가 이메일로 발송되었습니다."}'
          ]
        }
      }
    }
  ],
  challenges: {
    technicalChallenges: [
      '프론트엔드와 백엔드 간 인증 데이터 동기화 구현',
      '회원과 관리자 권한을 통합적으로 처리하는 시스템 설계',
      '게시글/댓글의 실시간 상태 관리 및 동기화 구현',
      'Soft Delete 구조에서의 데이터 무결성 보장',
      '대용량 MongoDB 데이터의 실시간 집계 및 시각화',
      'Chart.js를 활용한 동적 데이터 시각화 구현',
      '다중 컬렉션 데이터의 일관성 있는 월별 통계 생성',
      'TypeScript 제네릭을 활용한 재사용 가능한 컴포넌트 설계',
      '실시간 중복 체크와 효율적인 유효성 검증 구현',
      'SMTP 이메일 발송과 보안성 높은 임시 비밀번호 시스템 구축'
    ]
  },
  achievements: {
    results: '로그인부터 게시판, 관리자 대시보드, 사용자 관리까지 완전한 웹 서비스를 구축했습니다. 사용자 인증, 게시글/댓글 CRUD, 권한 관리, 페이징, 실시간 데이터 시각화, 회원 초대/관리 등 실무에서 요구되는 모든 기능을 포함한 확장 가능하고 안전한 시스템을 완성했습니다.',
    learning: 'Full-Stack 개발의 전체 플로우 경험, RESTful API 설계 원칙, React와 TypeScript를 활용한 현대적 프론트엔드 개발, MongoDB를 활용한 NoSQL 데이터베이스 설계 및 최적화, Chart.js를 활용한 데이터 시각화, Pandas를 활용한 데이터 분석과 집계, 제네릭 타입을 활용한 재사용 가능한 컴포넌트 설계, SMTP를 활용한 이메일 시스템 구축 기법을 습득했습니다.'
  }
};
