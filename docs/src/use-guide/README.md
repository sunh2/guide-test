# How To Use : basic

## 1. 링크
링크를 작성하고 싶다면 대괄호 안에 링크 제목, 괄호 안에 url을 입력하면 연결 됩니다.<br/>
예 : [링크제목] (URL) -->&nbsp;&nbsp; [MLB바로가기](https://www.mlb-korea.com/)

## 2. 강조표시
`backquote`을 사용하면 강조 표시를 할 수 있습니다.<br/>
* window pc : 그냥 backquote 으로 감싸주기
* mac pc : option + backquote 으로 감싸주기

## 3. Container

::: tip
This is a tip
:::

::: warning
This is a warning
:::

:::danger
danger 박스!
:::

::: details
This is a details block, which does not work in IE / Edge
:::

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```
<br/>

## 4. 코드박스
::: tip
`backquote 3개` `언어유형-js,html,md 등` `{강조할 라인 숫자, 생략가능, 예: 1,5-8}`<br/>
{코드}<br/>
`backquote 3개`
:::
예)<br/>
`backquote 3개` js{4}<br/>
{예시 코드}<br/>
`backquote 3개`
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
<br/>

## 5. 이모티콘
코드값으로 입력하면 [모든 이모티콘](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 목록을 사용할 수 있습니다.
:tada: :100:
```
:tada: :100:
```

## 6. 목차 생성
해당 글의 목차를 표시하고 싶을 때 
```md
[[toc]]
```

## 7. 테이블 생성
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

