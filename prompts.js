module.exports = [
  {
    name: 'baseUrl',
    type: "input",
    message: "專案路徑, ex: /project:",
    validate: input => input.startsWith('/'),
    default: "/"
  },
  {
    name: "prerender",
    type: "confirm",
    message: "是否啟用 prerender:",
    default: false
  },
  {
    name: "isMKT",
    type: "confirm",
    message: "是否為 mkt 整招專案:",
    default: false
  },
  {
    name: "needDevContainer",
    type: "confirm",
    message: "是否需要創建 VS Code devContainer 環境 ( 包含 nginx 設定)",
    default: false
  },
  {
    name: "projectName",
    type: "input",
    message: "請輸入專案顯示名稱, ex: reviews (docker 名稱使用)",
    default: "104z",
    when: (input) => {
      return input.needDevContainer
    }
  },
  {
    name: "nginxDomain",
    type: "input",
    message: "請輸入要攔截之 Domain, ex: reviews.104-dev.com.tw",
    default: "/",
    when: (input) => {
      return input.needDevContainer
    }
  },
  {
    name: 'plugins',
    type: 'checkbox',
    message: '安裝額外套件: ',
    choices: [
      { name: 'vue-meta', checked: true },
      { name: 'gsap'}
    ]
  }
]