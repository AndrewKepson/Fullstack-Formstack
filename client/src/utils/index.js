import axios from 'axios'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'

export const formsApi = axios.create({
  baseURL: `https://www.formstack.com/api/v2`,
  //   params: {
  //     api_key: ``,
  //   },
})

export const authorizeForms = async () => {
  try {
    const result = await formsApi.get(
      `https://www.formstack.com/api/v2/oauth2/authorize?client_id=31014&redirect_uri=authorization&response_type=code`
    )

    console.log(result)
  } catch (e) {
    console.error(e)
  }
}

export const getFormsToken = async authCode => {
  try {
  } catch (e) {
    console.error(e)
  }
}

export const processFormHTML = html => {
  const htmlElements = ReactHtmlParser(html)
    .filter(el => el !== null)
    .map(el => el.props.children)
    .filter(el => el.type === 'body')
  // const body = htmlElements[0].props.children.filter(el => el.type === 'body')
  // const body = htmlElements
  // const form = body.props.children[0]

  return htmlElements
}
