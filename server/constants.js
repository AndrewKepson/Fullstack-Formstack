const constants = {
  formstackApi: {
    baseUrl: process.env.FORMSTACK_API_ENDPOINT,
    tokenEndpoint: process.env.FORMSTACK_API_TOKEN,
    clientId: process.env.FORMSTACK_API_CLIENT_ID,
    clientSecret: process.env.FORMSTACK_API_CLIENT_SECRET,
  },
  documentsApi: {
    baseUrl: process.env.DOCUMENTS_API_ENDPOINT,
    key: process.env.DOCUMENTS_API_KEY,
    secret: process.env.DOCUMENTS_API_SECRET,
    testId: process.env.DOCUMENTS_TEST_ID,
    testKey: process.env.DOCUMENTS_TEST_KEY,
  },
}

export default constants
