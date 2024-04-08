import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: "/resume",
    bundler: viteBundler(),
    theme: defaultTheme({
        search:false,
        navbar:false,
    }),
})
