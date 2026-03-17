# 🌿 Git Branch Strategy

이 프로젝트는 **간소화된 Git Flow 전략**을 사용합니다.

---

## 📌 브랜치 구조

### 1. `main`

* 실제 배포되는 안정 버전
* 항상 **문제 없이 실행 가능한 상태 유지**
* 직접 커밋 ❌ (PR만 허용)

---

### 2. `develop`

* 개발 통합 브랜치
* 모든 기능(feature)이 합쳐지는 곳
* 다음 배포 후보

---

### 3. `feature/*`

* 기능 개발 브랜치
* `develop`에서 생성

예:

* `feature/login`
* `feature/signup`
* `feature/payment-api`

---

### 4. `fix/*`

* 일반 버그 수정
* `develop`에서 생성

예:

* `fix/login-error`
* `fix/api-timeout`

---

### 5. `hotfix/*`

* 운영(main)에서 긴급 수정 필요할 때
* `main`에서 생성 → `main` & `develop` 둘 다 반영

예:

* `hotfix/server-crash`
* `hotfix/security-patch`

---

## 🔄 작업 흐름

### ✅ 기능 개발

1. `develop`에서 브랜치 생성

```
feature/기능명
```

2. 작업 후 `develop`으로 PR

---

### ✅ 버그 수정

```
fix/버그명
```

→ `develop`으로 PR

---

### 🚨 긴급 수정 (운영 장애)

1. `main`에서 브랜치 생성

```
hotfix/이슈명
```

2. 수정 후

* `main`에 PR
* `develop`에도 반영

---

## 🚀 배포 흐름

```
feature → develop → main
```

* develop에서 충분히 테스트 후 main으로 merge
* main merge 시 배포

---

## 📌 브랜치 규칙

* 모든 작업은 PR 기반으로 진행
* main 직접 push 금지
* 브랜치 이름은 영어 + kebab-case 사용
* 하나의 브랜치는 하나의 기능만 담당

---

## 💡 커밋 메시지 규칙 (권장)

```
feat: 로그인 기능 추가
fix: 로그인 에러 수정
refactor: 코드 구조 개선
docs: README 수정
```

---

## 🧠 전략 요약

* main → 배포
* develop → 개발 통합
* feature/fix → 작업
* hotfix → 긴급 대응

👉 안정성과 개발 속도를 동시에 가져가는 전략
