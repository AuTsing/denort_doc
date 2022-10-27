import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/denort_doc/',
    title: 'Denort',
    description: 'Doc of Denort',
    themeConfig: {
        siteTitle: 'Denort',
        nav: [
            { text: '开始', link: '/guide/introduction' },
            { text: 'API 文档', link: '/api/' },
            { text: '关于', link: '/about' },
        ],
        sidebar: [
            {
                text: '开始',
                items: [
                    { text: '简介', link: '/guide/introduction' },
                    { text: '快速上手', link: '/guide/quick-start' },
                ],
            },
            {
                text: 'API 文档',
                items: [
                    { text: 'io 输入输出', link: '/api/io' },
                    { text: 'finger 手指', link: '/api/finger' },
                ],
            },
        ],
    },
    markdown: {
        linkify: false,
    },
});
