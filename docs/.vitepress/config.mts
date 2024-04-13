import { defineConfig } from 'vitepress';
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({

  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
  lang: 'zh-CN',
  appearance: true,
  title: "ArknightSStory",
  description: "",
  cleanUrls: true,
  // srcDir: './src',
  cacheDir: './.vitepress/.vite',
  sitemap: {
    hostname: 'https://ark.lemonmiaow.xyz'
  },
  themeConfig: {
    siteTitle: 'ArknightSStory',
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/contents'},
      {
        text: '主线', items: 
        [
          { text: '觉醒', items: 
          [
          { text: '黑暗时代·上', link: '/main/黑暗时代·上/contents' },
          { text: '黑暗时代·下', link: '/main/黑暗时代·下/contents' },
          { text: '异卵同生', link: '/main/异卵同生/contents' },
          { text: '二次呼吸', link: '/main/二次呼吸/contents' },
          ]},
          { text: '幻灭', items: [
          { text: '急性衰竭', link: '/main/急性衰竭/contents' },
          { text: '靶向药物', link: '/main/靶向药物/contents' },
          { text: '局部坏死', link: '/main/局部坏死/contents' },
          { text: '苦难摇篮', link: '/main/苦难摇篮/contents' },
          { text: '怒号光明', link: '/main/怒号光明/contents' },
          ]},
          { text: '残阳', items: [
          { text: '风暴瞭望', link: '/main/风暴瞭望/contents' },
          { text: '破碎日冕', link: '/main/破碎日冕/contents' },
          { text: '淬火尘霾', link: '/main/淬火尘霾/contents' },
          { text: '惊霆无声', link: '/main/惊霆无声/contents' },
          { text: '恶兆湍流', link: '/main/恶兆湍流/contents' },
          ]},
        ]
      },
      {
        text: '插曲', items: [
          { text: '生于黑夜', link: '/episode/生于黑夜/contents' },
          { text: '遗尘漫步', link: '/episode/遗尘漫步/contents' },
          { text: '覆潮之下', link: '/episode/覆潮之下/contents' },
          { text: '愚人号', link: '/episode/愚人号/contents' },
          { text: '孤星', link: '/episode/孤星/contents' },
        ]
      },
      {
        text: '别传', items: [
          { text: '骑兵与猎人', link: '/episode/骑兵与猎人/contents' },
          { text: '火蓝之心', link: '/episode/火蓝之心/contents' },
          { text: '喧闹法则', link: '/episode/喧闹法则' },
          { text: '沃伦姆德的薄暮', link: '/episode/沃伦姆德的薄暮/contents' },
          { text: '密林悍将归来', link: '/episode/密林悍将归来/contents' },
          { text: '玛莉娅·临光', link: '/episode/玛莉娅·临光/contents' },
          { text: '孤岛风云', link: '/episode/孤岛风云/contents' },
          { text: '画中人', link: '/episode/画中人/contents' },
          { text: '源石尘行动', link: '/episode/源石尘行动/contents' },
          { text: '多索雷斯假日', link: '/episode/多索雷斯假日/contents' },
          { text: '长夜临光', link: '/episode/长夜临光/contents' },
          { text: '风雪过境', link: '/episode/风雪过境/contents' },
          { text: '将进酒', link: '/episode/将进酒/contents' },
          { text: '吾导先路', link: '/episode/吾导先路/contents' },
          { text: '尘影余音', link: '/episode/尘影余音/contents' },
          { text: '绿野幻梦', link: '/episode/绿野幻梦/contents' },
          { text: '叙拉古人', link: '/episode/叙拉古人/contents' },
          { text: '照我以火', link: '/episode/照我以火/contents' },
          { text: '登临意', link: '/episode/登临意/contents' },
          { text: '落叶逐火', link: '/episode/落叶逐火/contents' },
          { text: '空想花庭', link: '/episode/空想花庭/contents' },
          { text: '火山旅梦', link: '/episode/火山旅梦/contents' },
          { text: '不义之财', link: '/episode/不义之财/contents' },
          { text: '崔林特尔梅之金', link: '/episode/崔林特尔梅之金/contents' },
          { text: '银心湖列车', link: '/episode/银心湖列车/contents' },
          { text: '怀黍离', link: '/episode/怀黍离/contents' },
        ]
      },
      {
        text: '故事集', items: [
          { text: '战地秘闻', link: '/episode/战地秘闻' },
          { text: '洪炉示岁', link: '/episode/洪炉示岁' },
          { text: '午间逸话', link: '/episode/午间逸话' },
          { text: '乌萨斯的孩子们', link: '/episode/乌萨斯的孩子们' },
          { text: '踏寻往昔之风', link: '/episode/踏寻往昔之风' },
          { text: '此地之外', link: '/episode/此地之外' },
          { text: '灯火序曲', link: '/episode/灯火序曲' },
          { text: '如我所见', link: '/episode/如我所见' },
          { text: '红松林', link: '/episode/红松林' },
          { text: '阴云火花', link: '/episode/阴云火花' },
          { text: '未尽篇章', link: '/episode/未尽篇章' },
          { text: '日暮寻路', link: '/episode/日暮寻路' },
          { text: '好久不见', link: '/episode/好久不见' },
          { text: '春分', link: '/episode/春分' },
          { text: '眠于树影之中', link: '/episode/眠于树影之中' },
          { text: '去咧嘴谷', link: '/episode/去咧嘴谷' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '本网站是由《明日方舟》游戏爱好者，使用免费开源的 Vitepress 程序制作。网站所涉及的公司名称、商标、产品等均为其各自所有者的资产，仅供识别。网站中Logo与favicon.ico属于@Qu_An。 网站内使用的游戏图片、动画、音频、文本原文，仅用于更好地表现游戏资料，其版权属于 Arknights/上海鹰角网络科技有限公司。 除非另有声明，网站其他内容采用BY-NC-SA授权。',
      copyright: 'CC BY-NC-SA'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'test', link: '/test' },
          { text: 'test', link: '/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
