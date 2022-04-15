# VuePress Setting
| moved from notion
-
<br>


- 참고 URL
    
    [Getting Started | VuePress](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)
    
    [Tutorial. 뷰프레스(Vuepress)로 기술문서 빠르게 만들어보자!](https://limdongjin.github.io/vuejs/vuepress/#vuepress%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%86%E1%85%AE%E1%84%8B%E1%85%A5%E1%86%BA%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A1)
    

## 설치 및 빌드

> 터미널
> 

```bash
#npm
npx create-vuepress-site [optionalDirectoryName]

#yarn
yarn create vuepress-site [optionalDirectoryName]
```

- 프로젝트 이름
- 설명
- 관리자 이메일
- 관리자 이름
- 저장소 URL

⇒ 설정해도 되고, 안 할거면 그냥 엔터 엔터! 

```bash
#npm 
cd docs
npm install
npm run dev

#yarn
cd docs
yarn install
yarn dev
```

## Routing

vuepress는 기본적으로 디렉토리 구조와 파일이름으로 url이 routing됩니다.

| Relative Path | Page Routing |
| --- | --- |
| /README.md | / |
| /guide/README.md | /guide/ |
| /hello.md | /hello.html |

## About Configuration

위 방법대로 안하고 수동으로 생성할 경우 → config 파일이 없더라도 빌드할 수 있지만, vuepress가 지원해주는 기능들을 사용하거나 커스터마이징 하려면 config 파일(또는 폴더)을 생성하는 것이 좋음

- .vuepress 폴더에 설정이나 테마, 플러그인 등을 작성
- 설정 → 주로 config.js 파일에 작성
- 공식문서에서 추천하는 디렉토리 구조
    
    ```markdown
    .
    ├── docs
    │   ├── .vuepress *(Optional)*
    │   │   ├── components *(Optional)*
    │   │   ├── theme *(Optional)*
    │   │   │   └── Layout.vue
    │   │   ├── public *(Optional)*
    │   │   ├── styles *(Optional)*
    │   │   │   ├── index.styl
    │   │   │   └── palette.styl
    │   │   ├── templates *(Optional, Danger Zone)*
    │   │   │   ├── dev.html
    │   │   │   └── ssr.html
    │   │   ├── config.js *(Optional)*
    │   │   └── enhanceApp.js *(Optional)*
    │   │
    │   ├── README.md
    │   ├── guide
    │   │   └── README.md
    │   └── config.md
    │
    └── package.json
    ```
    
    [Directory Structure | VuePress](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing)
    
    - 상세보기
        - `docs/.vuepress`: 전역 구성, 구성 요소, 정적 리소스 등을 저장하는 데 사용됩니다.
        - `docs/.vuepress/components`: 이 디렉토리의 Vue 구성 요소는 자동으로 전역 구성 요소로 등록됩니다.
        - `docs/.vuepress/theme`: 로컬 테마를 저장하는 데 사용됩니다.
        - `docs/.vuepress/styles`: 스타일 관련 파일을 저장합니다.
        - `docs/.vuepress/styles/index.styl`: CSS 파일의 끝에서 생성된 자동으로 적용된 전역 스타일 파일은 기본 스타일보다 우선 순위가 높습니다.
        - `docs/.vuepress/styles/palette.styl`: 팔레트는 기본 색상 상수를 무시하고 스타일러스의 색상 상수를 설정하는 데 사용됩니다.
        - `docs/.vuepress/public`: 정적 리소스 디렉토리.
        - `docs/.vuepress/templates`: HTML 템플릿 파일을 저장합니다.
        - `docs/.vuepress/templates/dev.html`: 개발 환경용 HTML 템플릿 파일입니다.
        - `docs/.vuepress/templates/ssr.html`: 빌드 할 때 Vue SSR 기반 HTML 템플릿 파일
        - `docs/.vuepress/config.js`: 구성 항목 파일은 yml 또는 toml일 수도 있습니다.
        - `docs/.vuepress/enhanceApp.js`: 앱 레벨 향상.
        
        <aside>
        💡 `templates/ssr.html`, 또는 `templates/dev.html` 을 사용자 정의할 때 기본 템플릿 파일(새 창에서 열림)을 기준으로 편집하는 것이 가장 좋습니다. 그렇지 않으면 빌드 실패가 발생할 수 있습니다.
        
        </aside>