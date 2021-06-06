(self.webpackChunklearn_starter=self.webpackChunklearn_starter||[]).push([[179],{9241:(n,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>i,backgrounds:()=>u,fragmentSteps:()=>o,fusumaProps:()=>s,default:()=>c});var a=e(7401),l=e(9332);e(108);function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}const i=[n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"Github Action, AWS S3 and CloudFront를 활용한"),(0,l.kt)("h1",null,"React 애플리케이션 CI/CD 파이프라인 구축")),n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"CI/CD 란?"),(0,l.kt)("p",null,"애플리케이션 개발 단계를 자동화하여 애플리케이션을 보다 짧은 주기로 고객에게 제공하는 방법")),n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"React 애플리케이션의 CI/CD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PR이 생성되면 자동으로 빌드, 테스트하고 성공 여부에 따라 merge 할지를 판단한다"),(0,l.kt)("li",{parentName:"ul"},"배포 브랜치에 PR이 머지되면 자동으로 빌드, 테스트 후 호스팅 환경에 배포한다"),(0,l.kt)("li",{parentName:"ul"},"캐시 서버(CDN)을 사용한다면 서버에 저장된 캐시를 무효화(invalidate) 시킨다"),(0,l.kt)("li",{parentName:"ul"},"etc. (배포가 완료되면 Slack에 알림을 쏜다 등)"))),n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"CI/CD 파이프라인 아키텍처"),(0,l.kt)("p",null,"이번 세미나에서 구축할 React 애플리케이션 CI/CD 파이프라인"),(0,l.kt)("img",{src:e(4345)}))],u=[0,0,0,0],o=[0,0,0,0],s=[{sectionTitle:"Github Action,AWS S3 and CloudFront를 활용한 React 애플리케이션 CI/CD 파이프라인 구축"},{},{},{}],p={};function c({components:n,...t}){return(0,l.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Github Action, AWS S3 and CloudFront를 활용한"),(0,l.kt)("h1",null,"React 애플리케이션 CI/CD 파이프라인 구축"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"CI/CD 란?"),(0,l.kt)("p",null,"애플리케이션 개발 단계를 자동화하여 애플리케이션을 보다 짧은 주기로 고객에게 제공하는 방법"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"React 애플리케이션의 CI/CD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PR이 생성되면 자동으로 빌드, 테스트하고 성공 여부에 따라 merge 할지를 판단한다"),(0,l.kt)("li",{parentName:"ul"},"배포 브랜치에 PR이 머지되면 자동으로 빌드, 테스트 후 호스팅 환경에 배포한다"),(0,l.kt)("li",{parentName:"ul"},"캐시 서버(CDN)을 사용한다면 서버에 저장된 캐시를 무효화(invalidate) 시킨다"),(0,l.kt)("li",{parentName:"ul"},"etc. (배포가 완료되면 Slack에 알림을 쏜다 등)")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"CI/CD 파이프라인 아키텍처"),(0,l.kt)("p",null,"이번 세미나에서 구축할 React 애플리케이션 CI/CD 파이프라인"),(0,l.kt)("img",{src:e(4345)}))}c.isMDXComponent=!0},8754:(n,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>i,backgrounds:()=>u,fragmentSteps:()=>o,fusumaProps:()=>s,default:()=>c});var a=e(7401),l=e(9332);e(108),e(8602);function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}const i=[n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"Github Action")),n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"Github Action 은?"),(0,l.kt)("div",{className:"grid"},(0,l.kt)("div",{className:"column"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Continuous Integration\non: [pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Build webpack\n        run: npm run build\n"))),(0,l.kt)("div",{className:"column"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"YAML 파일로 Github 가 제공하는 서버 상에서 CI/CD 워크플로우를 구축하게 도와주는 기능"),(0,l.kt)("li",{parentName:"ul"},"단순 애플리케이션 빌드, 테스트 뿐만 아니라 Github의 다른 기능(브랜치, 이슈 등)과 연계도 가능"))))),n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"Github Action 빌딩 블록"),(0,l.kt)("div",{className:"grid"},(0,l.kt)("div",{className:"column"},(0,l.kt)("img",{src:e(4318)})),(0,l.kt)("div",{className:"column"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"워크플로우(Workflow)"),": Github 레포지토리에 등록하는 자동화된 업무 흐름")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"이벤트(Event)"),": 워크플로우를 트리거하는 특정 활동(커밋, 풀 리퀘스트 생성 등)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"잡(Job)"),": 워크플로우에서 수행하는 작업의 단위. 워크플로우 내 잡은 각각 독립적으로 러너를 실행하며 병렬적으로 수행(순차적 수행도 가능)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"스텝(Step)"),": 잡에서 실행되는 일의 단위. 각 스텝은 하나의 액션 또는 커맨드 명령으로 구성")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"액션(Action)"),": 커맨드 명령 외에도 다양한 작업(SMS 푸시 및 서드파티 라이브러리 이용 등)을 수행하는 잡의 구성요소")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"러너(Runner)"),": 잡을 실행하는 서버. Github에 호스팅된 러너를 사용할 수도 있고 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/actions/runner"},"Github Actions runner application"),"이 설치된 온프레미스 서버를 사용할 수도 있다"))))))],u=[0,0,0],o=[0,0,0],s=[{sectionTitle:"Github Action"},{},{}],p={};function c({components:n,...t}){return(0,l.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Github Action"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Github Action 은?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Continuous Integration\non: [pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Build webpack\n        run: npm run build\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"YAML 파일로 Github 가 제공하는 서버 상에서 CI/CD 워크플로우를 구축하게 도와주는 기능"),(0,l.kt)("li",{parentName:"ul"},"단순 애플리케이션 빌드, 테스트 뿐만 아니라 Github의 다른 기능(브랜치, 이슈 등)과 연계도 가능")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Github Action 빌딩 블록"),(0,l.kt)("img",{src:e(4318)}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"워크플로우(Workflow)"),": Github 레포지토리에 등록하는 자동화된 업무 흐름")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"이벤트(Event)"),": 워크플로우를 트리거하는 특정 활동(커밋, 풀 리퀘스트 생성 등)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"잡(Job)"),": 워크플로우에서 수행하는 작업의 단위. 워크플로우 내 잡은 각각 독립적으로 러너를 실행하며 병렬적으로 수행(순차적 수행도 가능)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"스텝(Step)"),": 잡에서 실행되는 일의 단위. 각 스텝은 하나의 액션 또는 커맨드 명령으로 구성")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"액션(Action)"),": 커맨드 명령 외에도 다양한 작업(SMS 푸시 및 서드파티 라이브러리 이용 등)을 수행하는 잡의 구성요소")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"러너(Runner)"),": 잡을 실행하는 서버. Github에 호스팅된 러너를 사용할 수도 있고 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/actions/runner"},"Github Actions runner application"),"이 설치된 온프레미스 서버를 사용할 수도 있다"))))}c.isMDXComponent=!0},6485:(n,t,e)=>{"use strict";e.r(t),e.d(t,{backgrounds:()=>s,default:()=>k,fragmentSteps:()=>p,fusumaProps:()=>c,slides:()=>o});var a=e(7401),l=e(6885);function r(){return a.createElement("div",{className:"container"},a.createElement(l.default,null,a.createElement("title",null,"Create Next App"),a.createElement("link",{rel:"icon",href:"/favicon.ico"})),a.createElement("main",null,a.createElement("h1",{className:"title"},"Welcome to ",a.createElement("a",{href:"https://nextjs.org"},"Next.js!")),a.createElement("p",{className:"description"},"Get started by editing ",a.createElement("code",null,"pages/index.js")),a.createElement("div",{className:"grid"},a.createElement("a",{href:"https://nextjs.org/docs",className:"card"},a.createElement("h3",null,"Documentation →"),a.createElement("p",null,"Find in-depth information about Next.js features and API.")),a.createElement("a",{href:"https://nextjs.org/learn",className:"card"},a.createElement("h3",null,"Learn →"),a.createElement("p",null,"Learn about Next.js in an interactive course with quizzes!")),a.createElement("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:"card"},a.createElement("h3",null,"Examples →"),a.createElement("p",null,"Discover and deploy boilerplate example Next.js projects.")),a.createElement("a",{href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"card"},a.createElement("h3",null,"Deploy →"),a.createElement("p",null,"Instantly deploy your Next.js site to a public URL with Vercel.")))),a.createElement("style",{jsx:!0},"\n        .container {\n          /* min-height: 100vh; */\n          padding: 0 0.5rem;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n\n        main {\n          padding: 5rem 0;\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n\n        footer {\n          width: 100%;\n          height: 100px;\n          border-top: 1px solid #eaeaea;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n\n        footer img {\n          margin-left: 0.5rem;\n        }\n\n        footer a {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n\n        a {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        .title a {\n          color: #0070f3;\n          text-decoration: none;\n        }\n\n        .title a:hover,\n        .title a:focus,\n        .title a:active {\n          text-decoration: underline;\n        }\n\n        .title {\n          margin: 0;\n          line-height: 1.15;\n          font-size: 4rem;\n        }\n\n        .title,\n        .description {\n          text-align: center;\n        }\n\n        .description {\n          line-height: 1.5;\n          font-size: 1.5rem;\n        }\n\n        code {\n          background: #fafafa;\n          border-radius: 5px;\n          padding: 0.75rem;\n          font-size: 1.1rem;\n          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,\n            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;\n        }\n\n        .grid {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-wrap: wrap;\n\n          max-width: 800px;\n          margin-top: 3rem;\n        }\n\n        .card {\n          margin: 1rem;\n          flex-basis: 45%;\n          padding: 1.5rem;\n          text-align: left;\n          color: inherit;\n          text-decoration: none;\n          border: 1px solid #eaeaea;\n          border-radius: 10px;\n          transition: color 0.15s ease, border-color 0.15s ease;\n        }\n\n        .card:hover,\n        .card:focus,\n        .card:active {\n          color: #0070f3;\n          border-color: #0070f3;\n        }\n\n        .card h3 {\n          margin: 0 0 1rem 0;\n          font-size: 1.5rem;\n        }\n\n        .card p {\n          margin: 0;\n          font-size: 1.25rem;\n          line-height: 1.5;\n        }\n\n        .logo {\n          height: 1em;\n        }\n\n        @media (max-width: 600px) {\n          .grid {\n            width: 100%;\n            flex-direction: column;\n          }\n        }\n      "),a.createElement("style",{jsx:!0,global:!0},"\n        html,\n        body {\n          padding: 0;\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\n            sans-serif;\n        }\n\n        * {\n          box-sizing: border-box;\n        }\n      "))}var i=e(9332);e(108),e(8602);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}const o=[n=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"Getting Started"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create-next-app")," 명령으로 만든 간단한 React 애플리케이션을 배포해봅시다."),(0,i.kt)(r,{mdxType:"Home",mdxType:"Home"})),n=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"브랜치 전략"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"main, dev 브랜치를 사용합니다"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dev"),": 작업이 이뤄지는 브랜치. main 브랜치로 PR을 날립니다."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"main"),": 배포 환경과 동일한 형상을 유지하는 브랜치. dev에서 날린 PR이 머지되면 자동으로 배포됩니다"))),n=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"CI 워크플로우"),(0,i.kt)("p",null,"dev 브랜치에서 ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," 폴더를 만들고 그 아래에 ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yaml")," 파일을 작성합니다."),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Continuous Integration\non: [pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Build webpack\n        run: npm run build\n"))),n=>(0,i.kt)(a.Fragment,null,(0,i.kt)("h2",null,"CI 워크플로우"),(0,i.kt)("p",null,"dev 브랜치 푸시 후 main 브랜치로 PR을 생성하면 CI 워크플로우가 실행되는 것을 확인할 수 있습니다."),(0,i.kt)("p",null,"(사진)"))],s=[0,0,0,0],p=[0,0,0,0],c=[{},{},{},{}],m={};function k({components:n,...t}){return(0,i.kt)("wrapper",u({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Getting Started"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create-next-app")," 명령으로 만든 간단한 React 애플리케이션을 배포해봅시다."),(0,i.kt)(r,{mdxType:"Home"}),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"브랜치 전략"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"main, dev 브랜치를 사용합니다"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dev"),": 작업이 이뤄지는 브랜치. main 브랜치로 PR을 날립니다."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"main"),": 배포 환경과 동일한 형상을 유지하는 브랜치. dev에서 날린 PR이 머지되면 자동으로 배포됩니다")),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"CI 워크플로우"),(0,i.kt)("p",null,"dev 브랜치에서 ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," 폴더를 만들고 그 아래에 ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yaml")," 파일을 작성합니다."),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Continuous Integration\non: [pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Build webpack\n        run: npm run build\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"CI 워크플로우"),(0,i.kt)("p",null,"dev 브랜치 푸시 후 main 브랜치로 PR을 생성하면 CI 워크플로우가 실행되는 것을 확인할 수 있습니다."),(0,i.kt)("p",null,"(사진)"))}k.isMDXComponent=!0},3815:(n,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>i,backgrounds:()=>u,fragmentSteps:()=>o,fusumaProps:()=>s,default:()=>c});var a=e(7401),l=e(9332);e(108);function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}const i=[n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"Github Action과 AWS S3 연동"))],u=[0],o=[0],s=[{sectionTitle:"Github Action과 AWS S3 연동"}],p={};function c({components:n,...t}){return(0,l.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Github Action과 AWS S3 연동"))}c.isMDXComponent=!0},8786:(n,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>i,backgrounds:()=>u,fragmentSteps:()=>o,fusumaProps:()=>s,default:()=>c});var a=e(7401),l=e(9332);e(108);function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}const i=[n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"AWS S3와 CloudFront 연동 및 캐시 정책 적용"))],u=[0],o=[0],s=[{sectionTitle:"AWS S3와 CloudFront 연동 및 캐시 정책 적용"}],p={};function c({components:n,...t}){return(0,l.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"AWS S3와 CloudFront 연동 및 캐시 정책 적용"))}c.isMDXComponent=!0},9527:(n,t,e)=>{"use strict";e.r(t),e.d(t,{slides:()=>u,backgrounds:()=>o,fragmentSteps:()=>s,fusumaProps:()=>p,default:()=>m});var a=e(7401),l=e(9332),r=(e(108),e(6465));function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}const u=[n=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"Thank You"),(0,l.kt)("p",null,"Author: @eunsukimme"),(0,l.kt)("div",{className:"grid sns-box"},(0,l.kt)("a",{href:"https://github.com/eunsukimme",className:"account account-github","aria-label":"account-github"},(0,l.kt)(r.hJX,null)),(0,l.kt)("a",{href:"https://www.linkedin.com/in/eunsukimme",className:"account account-linkedin","aria-label":"account-linkedin"},(0,l.kt)(r.ltd,null))))],o=[0],s=[0],p=[{}],c={};function m({components:n,...t}){return(0,l.kt)("wrapper",i({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Thank You"),(0,l.kt)("p",null,"Author: @eunsukimme"))}m.isMDXComponent=!0},5516:(n,t,e)=>{"use strict";e.r(t)},4318:(n,t,e)=>{"use strict";n.exports=e.p+"46297b7ed45f99201d1b.webp"},4345:(n,t,e)=>{"use strict";n.exports=e.p+"22b1a9842c668a88f8d0.webp"},3447:(n,t,e)=>{var a={"./00-intro/00-index.mdx":9241,"./01-github-action/00-index.mdx":8754,"./01-github-action/01-getting-started.mdx":6485,"./02-aws-s3/00-index.mdx":3815,"./03-aws-cloudfront/00-index.mdx":8786,"./04-outro/index.mdx":9527};function l(n){var t=r(n);return e(t)}function r(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}l.keys=function(){return Object.keys(a)},l.resolve=r,n.exports=l,l.id=3447}},n=>{"use strict";n.O(0,[179],(()=>[863,921,626].map(n.E)),5);var t=t=>n(n.s=t);n.O(0,[736],(()=>(t(7751),t(6905),t(9969))));n.O()}]);