# Using Vue in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

<hr/>

정적 빌드를 생성할 때 VuePress 애플리케이션은 Node.js에서 서버 렌더링되므로 모든 Vue 사용은 [범용 코드 요구 사항](https://ssr.vuejs.org/en/universal.html)을 준수해야 합니다. 즉, `beforeMount` 또는 `mounted` hooks에 있는 브라우저/DOM API에만 액세스해야 합니다.

SSR과 친하지 않은 구성 요소(예: 사용자 지정 지시자 포함)를 사용하거나 데모하는 경우 기본 제공 `<ClientOnly>` 구성 요소 내에서 해당 구성 요소를 래핑할 수 있습니다.
##