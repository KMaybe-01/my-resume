import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
    base: '/resume',
    title: 'Resume',
    description: 'Resume',

    bundler: viteBundler({
        // vite bundler options here
    }),
    theme: defaultTheme({
        // default theme options here

        search: false,
        // 不需要导航栏
        navbar: false,
    }),
});
