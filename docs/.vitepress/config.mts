import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('custom-')
      }
    }
  },
  title: "Root Sanctum",
  description: "A comprehensive knowledge base - Your sanctuary for learning across Technology, Science, Humanities, Life Skills, and more",
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Technology', 
        items: [
          { text: 'Programming', link: '/technology/programming' },
          { text: 'Web Development', link: '/technology/web-dev' },
          { text: 'AI & Machine Learning', link: '/technology/ai' },
          { text: 'Data Science', link: '/technology/data-science' },
          { text: 'Cybersecurity', link: '/technology/cybersecurity' },
          { text: 'Cloud Computing', link: '/technology/cloud' },
          { text: 'Hardware', link: '/technology/hardware' },
          { text: 'Tools & Software', link: '/technology/tools' }
        ]
      },
      { 
        text: 'Science', 
        items: [
          { text: 'Physics', link: '/science/physics' },
          { text: 'Biology', link: '/science/biology' },
          { text: 'Chemistry', link: '/science/chemistry' },
          { text: 'Space & Astronomy', link: '/science/space' },
          { text: 'Neurology', link: '/science/neurology' }
        ]
      },
      { 
        text: 'Humanities', 
        items: [
          { text: 'History', link: '/humanities/history' },
          { text: 'Philosophy', link: '/humanities/philosophy' },
          { text: 'Art', link: '/humanities/art' },
          { text: 'Literature', link: '/humanities/literature' }
        ]
      },
      { 
        text: 'Life Skills', 
        items: [
          { text: 'Health & Wellness', link: '/life-skills/health' },
          { text: 'Productivity', link: '/life-skills/productivity' },
          { text: 'Communication', link: '/life-skills/communication' },
          { text: 'Finance', link: '/life-skills/finance' },
          { text: 'Career Development', link: '/life-skills/career' },
          { text: 'Personal Development', link: '/life-skills/personal-development' },
          { text: 'Digital Literacy', link: '/life-skills/digital-literacy' }
        ]
      },
      { 
        text: 'Miscellaneous', 
        items: [
          { text: 'DIY & Crafts', link: '/miscellaneous/diy' },
          { text: 'Travel', link: '/miscellaneous/travel' },
          { text: 'Culture', link: '/miscellaneous/culture' },
          { text: 'Fun Facts', link: '/miscellaneous/fun-facts' }
        ]
      }
    ],

    sidebar: {
      '/technology/': [
        {
          text: 'Technology',
          items: [
            { text: 'Programming', link: '/technology/programming' },
            { text: 'Web Development', link: '/technology/web-dev' },
            { text: 'AI & Machine Learning', link: '/technology/ai' },
            { text: 'Data Science', link: '/technology/data-science' },
            { text: 'Cybersecurity', link: '/technology/cybersecurity' },
            { text: 'Cloud Computing', link: '/technology/cloud' },
            { text: 'Hardware', link: '/technology/hardware' },
            { text: 'Tools & Software', link: '/technology/tools' }
          ]
        }
      ],
      '/science/': [
        {
          text: 'Science',
          items: [
            { text: 'Physics', link: '/science/physics' },
            { text: 'Biology', link: '/science/biology' },
            { text: 'Chemistry', link: '/science/chemistry' },
            { text: 'Space & Astronomy', link: '/science/space' },
            { text: 'Neurology', link: '/science/neurology' }
          ]
        }
      ],
      '/humanities/': [
        {
          text: 'Humanities',
          items: [
            { text: 'History', link: '/humanities/history' },
            { text: 'Philosophy', link: '/humanities/philosophy' },
            { text: 'Art', link: '/humanities/art' },
            { text: 'Literature', link: '/humanities/literature' }
          ]
        }
      ],
      '/life-skills/': [
        {
          text: 'Life Skills',
          items: [
            { text: 'Health & Wellness', link: '/life-skills/health' },
            { text: 'Productivity', link: '/life-skills/productivity' },
            { text: 'Communication', link: '/life-skills/communication' },
            { text: 'Finance', link: '/life-skills/finance' },
            { text: 'Career Development', link: '/life-skills/career' },
            { text: 'Personal Development', link: '/life-skills/personal-development' },
            { text: 'Digital Literacy', link: '/life-skills/digital-literacy' }
          ]
        }
      ],
      '/miscellaneous/': [
        {
          text: 'Miscellaneous',
          items: [
            { text: 'DIY & Crafts', link: '/miscellaneous/diy' },
            { text: 'Travel', link: '/miscellaneous/travel' },
            { text: 'Culture', link: '/miscellaneous/culture' },
            { text: 'Fun Facts', link: '/miscellaneous/fun-facts' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LandWarderer2772/root-sanctum' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Built to share knowledge <3',
      copyright: 'Copyright © 2025 Root Sanctum'
    },

    lastUpdatedText: 'Last updated'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Root Sanctum' }],
    ['meta', { name: 'og:description', content: 'A comprehensive knowledge base for learning' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  appearance: 'dark',
  
  lastUpdated: true
})
