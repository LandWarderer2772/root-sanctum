import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Root Sanctum",
  description: "A comprehensive knowledge base - Your sanctuary for learning across Technology, Science, Humanities, Life Skills, and more",
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Technology', 
        items: [
          { text: 'Programming', link: '/technology/programming/' },
          { text: 'Web Development', link: '/technology/web-dev/' },
          { text: 'AI & Machine Learning', link: '/technology/ai/' },
          { text: 'Data Science', link: '/technology/data-science/' },
          { text: 'Cybersecurity', link: '/technology/cybersecurity/' },
          { text: 'Cloud Computing', link: '/technology/cloud/' },
          { text: 'Hardware', link: '/technology/hardware/' },
          { text: 'Tools & Software', link: '/technology/tools/' }
        ]
      },
      { 
        text: 'Science', 
        items: [
          { text: 'Physics', link: '/science/physics/' },
          { text: 'Biology', link: '/science/biology/' },
          { text: 'Chemistry', link: '/science/chemistry/' },
          { text: 'Space & Astronomy', link: '/science/space/' }
        ]
      },
      { 
        text: 'Humanities', 
        items: [
          { text: 'History', link: '/humanities/history/' },
          { text: 'Philosophy', link: '/humanities/philosophy/' },
          { text: 'Art', link: '/humanities/art/' },
          { text: 'Literature', link: '/humanities/literature/' }
        ]
      },
      { 
        text: 'Life Skills', 
        items: [
          { text: 'Health & Wellness', link: '/life-skills/health/' },
          { text: 'Productivity', link: '/life-skills/productivity/' },
          { text: 'Communication', link: '/life-skills/communication/' },
          { text: 'Finance', link: '/life-skills/finance/' },
          { text: 'Career Development', link: '/life-skills/career/' },
          { text: 'Personal Development', link: '/life-skills/personal-development/' },
          { text: 'Digital Literacy', link: '/life-skills/digital-literacy/' }
        ]
      },
      { 
        text: 'Miscellaneous', 
        items: [
          { text: 'DIY & Crafts', link: '/miscellaneous/diy/' },
          { text: 'Travel', link: '/miscellaneous/travel/' },
          { text: 'Culture', link: '/miscellaneous/culture/' },
          { text: 'Fun Facts', link: '/miscellaneous/fun-facts/' }
        ]
      }
    ],

    sidebar: {
      '/technology/programming/': [
        {
          text: 'Programming',
          items: [
            { text: 'Overview', link: '/technology/programming/' },
            { text: 'Languages', link: '/technology/programming/languages' },
            { text: 'Data Structures', link: '/technology/programming/data-structures' },
            { text: 'Algorithms', link: '/technology/programming/algorithms' },
            { text: 'Design Patterns', link: '/technology/programming/design-patterns' },
            { text: 'Best Practices', link: '/technology/programming/best-practices' }
          ]
        }
      ],
      '/technology/web-dev/': [
        {
          text: 'Web Development',
          items: [
            { text: 'Overview', link: '/technology/web-dev/' },
            { text: 'HTML & CSS', link: '/technology/web-dev/html-css' },
            { text: 'JavaScript', link: '/technology/web-dev/javascript' },
            { text: 'Frontend Frameworks', link: '/technology/web-dev/frontend-frameworks' },
            { text: 'Backend Development', link: '/technology/web-dev/backend' },
            { text: 'Databases', link: '/technology/web-dev/databases' },
            { text: 'APIs & Web Services', link: '/technology/web-dev/apis' }
          ]
        }
      ],
      '/technology/ai/': [
        {
          text: 'AI & Machine Learning',
          items: [
            { text: 'Overview', link: '/technology/ai/' },
            { text: 'Machine Learning Basics', link: '/technology/ai/ml-basics' },
            { text: 'Deep Learning', link: '/technology/ai/deep-learning' },
            { text: 'Natural Language Processing', link: '/technology/ai/nlp' },
            { text: 'Computer Vision', link: '/technology/ai/computer-vision' },
            { text: 'AI Tools & Frameworks', link: '/technology/ai/tools' }
          ]
        }
      ],
      '/technology/tools/': [
        {
          text: 'Tools & Software',
          items: [
            { text: 'Overview', link: '/technology/tools/' },
            { text: 'Version Control (Git)', link: '/technology/tools/git' },
            { text: 'IDEs & Editors', link: '/technology/tools/ides' },
            { text: 'DevOps Tools', link: '/technology/tools/devops' },
            { text: 'Productivity Software', link: '/technology/tools/productivity' }
          ]
        }
      ],
      '/technology/hardware/': [
        {
          text: 'Hardware',
          items: [
            { text: 'Overview', link: '/technology/hardware/' },
            { text: 'Computer Components', link: '/technology/hardware/components' },
            { text: 'Networking Hardware', link: '/technology/hardware/networking' },
            { text: 'Embedded Systems', link: '/technology/hardware/embedded' },
            { text: 'Hardware Maintenance', link: '/technology/hardware/maintenance' }
          ]
        }
      ],
      '/technology/cybersecurity/': [
        {
          text: 'Cybersecurity',
          items: [
            { text: 'Overview', link: '/technology/cybersecurity/' },
            { text: 'Security Fundamentals', link: '/technology/cybersecurity/fundamentals' },
            { text: 'Network Security', link: '/technology/cybersecurity/network-security' },
            { text: 'Application Security', link: '/technology/cybersecurity/app-security' },
            { text: 'Cryptography', link: '/technology/cybersecurity/cryptography' },
            { text: 'Ethical Hacking', link: '/technology/cybersecurity/ethical-hacking' },
            { text: 'Security Best Practices', link: '/technology/cybersecurity/best-practices' }
          ]
        }
      ],
      '/technology/data-science/': [
        {
          text: 'Data Science',
          items: [
            { text: 'Overview', link: '/technology/data-science/' },
            { text: 'Data Analysis', link: '/technology/data-science/data-analysis' },
            { text: 'Statistics', link: '/technology/data-science/statistics' },
            { text: 'Data Visualization', link: '/technology/data-science/visualization' },
            { text: 'Big Data', link: '/technology/data-science/big-data' },
            { text: 'Data Engineering', link: '/technology/data-science/data-engineering' },
            { text: 'Tools & Libraries', link: '/technology/data-science/tools' }
          ]
        }
      ],
      '/technology/cloud/': [
        {
          text: 'Cloud Computing',
          items: [
            { text: 'Overview', link: '/technology/cloud/' },
            { text: 'Cloud Fundamentals', link: '/technology/cloud/fundamentals' },
            { text: 'Cloud Providers', link: '/technology/cloud/providers' },
            { text: 'Cloud Architecture', link: '/technology/cloud/architecture' },
            { text: 'Serverless Computing', link: '/technology/cloud/serverless' },
            { text: 'Containers & Kubernetes', link: '/technology/cloud/containers' },
            { text: 'Cloud Security', link: '/technology/cloud/security' }
          ]
        }
      ],
      '/science/physics/': [
        {
          text: 'Physics',
          items: [
            { text: 'Overview', link: '/science/physics/' },
            { text: 'Classical Mechanics', link: '/science/physics/classical-mechanics' },
            { text: 'Thermodynamics', link: '/science/physics/thermodynamics' },
            { text: 'Electromagnetism', link: '/science/physics/electromagnetism' },
            { text: 'Quantum Physics', link: '/science/physics/quantum' },
            { text: 'Relativity', link: '/science/physics/relativity' }
          ]
        }
      ],
      '/science/biology/': [
        {
          text: 'Biology',
          items: [
            { text: 'Overview', link: '/science/biology/' },
            { text: 'Cell Biology', link: '/science/biology/cell-biology' },
            { text: 'Genetics', link: '/science/biology/genetics' },
            { text: 'Evolution', link: '/science/biology/evolution' },
            { text: 'Ecology', link: '/science/biology/ecology' },
            { text: 'Human Anatomy', link: '/science/biology/anatomy' }
          ]
        }
      ],
      '/science/chemistry/': [
        {
          text: 'Chemistry',
          items: [
            { text: 'Overview', link: '/science/chemistry/' },
            { text: 'Organic Chemistry', link: '/science/chemistry/organic' },
            { text: 'Inorganic Chemistry', link: '/science/chemistry/inorganic' },
            { text: 'Physical Chemistry', link: '/science/chemistry/physical' },
            { text: 'Biochemistry', link: '/science/chemistry/biochemistry' }
          ]
        }
      ],
      '/science/space/': [
        {
          text: 'Space & Astronomy',
          items: [
            { text: 'Overview', link: '/science/space/' },
            { text: 'Solar System', link: '/science/space/solar-system' },
            { text: 'Stars & Galaxies', link: '/science/space/stars-galaxies' },
            { text: 'Cosmology', link: '/science/space/cosmology' },
            { text: 'Space Exploration', link: '/science/space/exploration' }
          ]
        }
      ],
      '/humanities/history/': [
        {
          text: 'History',
          items: [
            { text: 'Overview', link: '/humanities/history/' },
            { text: 'Ancient Civilizations', link: '/humanities/history/ancient' },
            { text: 'Medieval Period', link: '/humanities/history/medieval' },
            { text: 'Modern History', link: '/humanities/history/modern' },
            { text: 'World Wars', link: '/humanities/history/world-wars' },
            { text: 'Contemporary Era', link: '/humanities/history/contemporary' }
          ]
        }
      ],
      '/humanities/philosophy/': [
        {
          text: 'Philosophy',
          items: [
            { text: 'Overview', link: '/humanities/philosophy/' },
            { text: 'Ancient Philosophy', link: '/humanities/philosophy/ancient' },
            { text: 'Ethics & Morality', link: '/humanities/philosophy/ethics' },
            { text: 'Metaphysics', link: '/humanities/philosophy/metaphysics' },
            { text: 'Epistemology', link: '/humanities/philosophy/epistemology' },
            { text: 'Modern Philosophy', link: '/humanities/philosophy/modern' }
          ]
        }
      ],
      '/humanities/art/': [
        {
          text: 'Art',
          items: [
            { text: 'Overview', link: '/humanities/art/' },
            { text: 'Art History', link: '/humanities/art/history' },
            { text: 'Drawing & Painting', link: '/humanities/art/drawing-painting' },
            { text: 'Sculpture', link: '/humanities/art/sculpture' },
            { text: 'Digital Art', link: '/humanities/art/digital' },
            { text: 'Art Movements', link: '/humanities/art/movements' }
          ]
        }
      ],
      '/humanities/literature/': [
        {
          text: 'Literature',
          items: [
            { text: 'Overview', link: '/humanities/literature/' },
            { text: 'Classic Literature', link: '/humanities/literature/classics' },
            { text: 'Modern Literature', link: '/humanities/literature/modern' },
            { text: 'Poetry', link: '/humanities/literature/poetry' },
            { text: 'Literary Criticism', link: '/humanities/literature/criticism' },
            { text: 'Writing Techniques', link: '/humanities/literature/writing' }
          ]
        }
      ],
      '/life-skills/health/': [
        {
          text: 'Health & Wellness',
          items: [
            { text: 'Overview', link: '/life-skills/health/' },
            { text: 'Nutrition', link: '/life-skills/health/nutrition' },
            { text: 'Exercise & Fitness', link: '/life-skills/health/fitness' },
            { text: 'Mental Health', link: '/life-skills/health/mental-health' },
            { text: 'Sleep & Recovery', link: '/life-skills/health/sleep' },
            { text: 'Preventive Care', link: '/life-skills/health/preventive-care' }
          ]
        }
      ],
      '/life-skills/productivity/': [
        {
          text: 'Productivity',
          items: [
            { text: 'Overview', link: '/life-skills/productivity/' },
            { text: 'Time Management', link: '/life-skills/productivity/time-management' },
            { text: 'Goal Setting', link: '/life-skills/productivity/goal-setting' },
            { text: 'Focus Techniques', link: '/life-skills/productivity/focus' },
            { text: 'Work-Life Balance', link: '/life-skills/productivity/work-life-balance' },
            { text: 'Habit Building', link: '/life-skills/productivity/habits' }
          ]
        }
      ],
      '/life-skills/communication/': [
        {
          text: 'Communication',
          items: [
            { text: 'Overview', link: '/life-skills/communication/' },
            { text: 'Public Speaking', link: '/life-skills/communication/public-speaking' },
            { text: 'Writing Skills', link: '/life-skills/communication/writing' },
            { text: 'Active Listening', link: '/life-skills/communication/listening' },
            { text: 'Negotiation', link: '/life-skills/communication/negotiation' },
            { text: 'Body Language', link: '/life-skills/communication/body-language' }
          ]
        }
      ],
      '/life-skills/finance/': [
        {
          text: 'Finance',
          items: [
            { text: 'Overview', link: '/life-skills/finance/' },
            { text: 'Personal Budgeting', link: '/life-skills/finance/budgeting' },
            { text: 'Investing Basics', link: '/life-skills/finance/investing' },
            { text: 'Saving Strategies', link: '/life-skills/finance/saving' },
            { text: 'Credit & Debt', link: '/life-skills/finance/credit-debt' },
            { text: 'Tax Planning', link: '/life-skills/finance/taxes' }
          ]
        }
      ],
      '/life-skills/career/': [
        {
          text: 'Career Development',
          items: [
            { text: 'Overview', link: '/life-skills/career/' },
            { text: 'Career Planning', link: '/life-skills/career/planning' },
            { text: 'Resume & Cover Letters', link: '/life-skills/career/resume' },
            { text: 'Interview Skills', link: '/life-skills/career/interviews' },
            { text: 'Professional Networking', link: '/life-skills/career/networking' },
            { text: 'Job Search Strategies', link: '/life-skills/career/job-search' },
            { text: 'Professional Growth', link: '/life-skills/career/growth' }
          ]
        }
      ],
      '/life-skills/personal-development/': [
        {
          text: 'Personal Development',
          items: [
            { text: 'Overview', link: '/life-skills/personal-development/' },
            { text: 'Self-Improvement', link: '/life-skills/personal-development/self-improvement' },
            { text: 'Emotional Intelligence', link: '/life-skills/personal-development/emotional-intelligence' },
            { text: 'Critical Thinking', link: '/life-skills/personal-development/critical-thinking' },
            { text: 'Learning Strategies', link: '/life-skills/personal-development/learning' },
            { text: 'Mindfulness', link: '/life-skills/personal-development/mindfulness' },
            { text: 'Resilience', link: '/life-skills/personal-development/resilience' }
          ]
        }
      ],
      '/life-skills/digital-literacy/': [
        {
          text: 'Digital Literacy',
          items: [
            { text: 'Overview', link: '/life-skills/digital-literacy/' },
            { text: 'Internet Basics', link: '/life-skills/digital-literacy/internet-basics' },
            { text: 'Online Safety', link: '/life-skills/digital-literacy/online-safety' },
            { text: 'Digital Tools', link: '/life-skills/digital-literacy/digital-tools' },
            { text: 'Information Literacy', link: '/life-skills/digital-literacy/information-literacy' },
            { text: 'Social Media', link: '/life-skills/digital-literacy/social-media' },
            { text: 'Digital Citizenship', link: '/life-skills/digital-literacy/digital-citizenship' }
          ]
        }
      ],
      '/miscellaneous/diy/': [
        {
          text: 'DIY & Crafts',
          items: [
            { text: 'Overview', link: '/miscellaneous/diy/' },
            { text: 'Home Improvement', link: '/miscellaneous/diy/home-improvement' },
            { text: 'Woodworking', link: '/miscellaneous/diy/woodworking' },
            { text: 'Crafts & Hobbies', link: '/miscellaneous/diy/crafts' },
            { text: 'Electronics Projects', link: '/miscellaneous/diy/electronics' }
          ]
        }
      ],
      '/miscellaneous/travel/': [
        {
          text: 'Travel',
          items: [
            { text: 'Overview', link: '/miscellaneous/travel/' },
            { text: 'Travel Planning', link: '/miscellaneous/travel/planning' },
            { text: 'Destinations', link: '/miscellaneous/travel/destinations' },
            { text: 'Budget Travel', link: '/miscellaneous/travel/budget' },
            { text: 'Travel Safety', link: '/miscellaneous/travel/safety' }
          ]
        }
      ],
      '/miscellaneous/culture/': [
        {
          text: 'Culture',
          items: [
            { text: 'Overview', link: '/miscellaneous/culture/' },
            { text: 'World Cultures', link: '/miscellaneous/culture/world-cultures' },
            { text: 'Languages', link: '/miscellaneous/culture/languages' },
            { text: 'Customs & Traditions', link: '/miscellaneous/culture/customs' },
            { text: 'Cuisine', link: '/miscellaneous/culture/cuisine' }
          ]
        }
      ],
      '/miscellaneous/fun-facts/': [
        {
          text: 'Fun Facts',
          items: [
            { text: 'Overview', link: '/miscellaneous/fun-facts/' },
            { text: 'Science Facts', link: '/miscellaneous/fun-facts/science' },
            { text: 'History Facts', link: '/miscellaneous/fun-facts/history' },
            { text: 'Nature Facts', link: '/miscellaneous/fun-facts/nature' },
            { text: 'Trivia', link: '/miscellaneous/fun-facts/trivia' }
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
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025 Root Sanctum'
    }
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
