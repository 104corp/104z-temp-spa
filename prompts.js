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
    name: 'plugins',
    type: 'checkbox',
    message: '安裝額外套件: ',
    choices: [
      { name: 'vue-meta', checked: true },
      { name: 'axios'}, 
      { name: 'gsap'}
    ]
  }
]