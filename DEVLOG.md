# 📝 Dev Log / Project History

## 🚀 2026-03-17: 초기 환경 구축
- **Framework:** Vite + React (TypeScript) 설정
- **UI Library:** Shadcn/ui 도입 및 테마 커스텀
  - 특정 버전(v0.x.x) 호환성 문제로 인해 종속성 고정

## 📅 2026-03-18: age page layout 구성
- **작업내용** 
    - Age Page의 레이아웃 구성 기본적인 요소 세팅
- **주요사항** 
    - 레이아웃은 1차적으로 화면 영역을 div로 나누고, layout을 다시 한번 component의 영역을 div로 나눈다. 
    - component의 형태나 설정이 바뀌더라도 layout은 div로 고정되어 있어 화면의 형태가 변하지 않는다.
- **기술적 결정** 
    - screen layout과 component layout을 분리하여 변화에 따른 영향을 최소화

## 📅 2026-03-23: shadcn 적용
- **작업내용** 
    - 구성한 component를 shadcn의 component로 변환
- **주요사항** 
    - shadcn의 component를 사용하여 만들어져있는 ui를 활용
- **기술적 결정** 
    - UI를 다시 만들지 않아 효율성 향상과 디자인의 일관성을 확보

## 📅 2026-03-24: shadcn react hook form 적용
- **작업내용** 
    - react hook form을 사용하여 shadcn에서 제공하는 form components를 사용 
- **주요사항** 
    - 이름, 생일, 성별을 shadcn의 components로 변경 및 zod를 사용한 입력값의 Schema 지정
- **기술적 결정** 
    - zod와 react hook form을 조합하여 유효성 검사, 접근성 연결, 구조화, 상태관리를 제공하는 shadcn을 사용해 UI 품질과 접근성을 확보


## 🐛 버그 리포트 및 해결
- 

## 🛠 주요 작업 내용
- MVVM 패턴 적용을 위한 Custom Hooks(ViewModel) 구조 설계
- 공통 Input 컴포넌트(ReadOnly/Disabled) 추상화