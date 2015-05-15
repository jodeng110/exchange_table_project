# nts_homework
환율 정보 UI

## 개요
- 국가 선택 및 환율 계산
- 환율 정보 리스트

## 프레임워크
- AngularJS 사용

## File Description
- style 관련
 1. scss/style.scss 파일 작업 -> css/style.css로 컴파일
- js/controller/exchangeListController.js 
 1. 데이터 요청
 2. 클래스 변경 설정
 3. 환율 계산
 4. 출력할 환율 리스트 필터 
 5. 데이터 바인딩
- js/lib/angular/angular.js : angularJS프레임워크 사용
- js/json3.min.js : IE8에서 JSON객체 파싱 위함.
- js/directives.js : custom directive 등록 
 1. <input> element의 'only-number' attribute 설정
 2. 0으로 시작하여 입력시 0 지움.
 3. 소수점('.') 최대 한개만 입력 가능
 4. 숫자만 입력 가능
 5. 아무것도 값을 입력하지 않을 경우 '0'으로 세팅.
- js/filters.js : custom filter 등록
 1. 'signLabel' : sign이 '+','-'일 경우에'-'일 때만 표시
- testdata/exchangeinfo.json : 테스트 데이타
- index.html
 1. 사용자로부터 국가 선태 및 숫자를 입력 받아 환율 계산 결과를 표시
 2. 환율 정보 리스트 출력
 
## Run
- local에서 index.html을 바로 실행시키면 http통신을 할 수 없기 때문에 데이터를 불러오지 못함.
- 서버에 띄어 확인 (ex. Aptana에서 http://127.0.0.1:8020/nts_homwork_test/index.html 확인)

