export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    "navigationBarBackgroundColor": "@navBgColor",
    // @ts-ignore
    "navigationBarTextStyle": "@navTxtStyle",
    "backgroundColor": "@bgColor",
    // @ts-ignore
    "backgroundTextStyle": "@bgTxtStyle",
  },
  themeLocation: 'theme.json',
  darkmode: true,
})
