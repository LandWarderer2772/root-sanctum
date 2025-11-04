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
      '/technology/programming/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Programming',
          items: [
            { text: 'Overview', link: '/technology/programming/' },
            { text: 'Algorithms', link: '/technology/programming/algorithms' },
            { text: 'Best Practices', link: '/technology/programming/best-practices' },
            { text: 'Data Structures', link: '/technology/programming/data-structures' },
            { text: 'Design Patterns', link: '/technology/programming/design-patterns' },
            { text: 'Languages', 
              link: '/technology/programming/languages',
              collapsed: false,
            } 
          ]
        }
      ],
      '/technology/web-dev/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Web Development',
          items: [
            { text: 'Overview', link: '/technology/web-dev/' },
            { text: 'Apis', link: '/technology/web-dev/apis' },
            { text: 'Backend', link: '/technology/web-dev/backend' },
            { text: 'Databases', link: '/technology/web-dev/databases' },
            { text: 'Frontend Frameworks', link: '/technology/web-dev/frontend-frameworks' },
            { text: 'Html Css', link: '/technology/web-dev/html-css' },
            { text: 'Javascript', link: '/technology/web-dev/javascript' }
          ]
        }
      ],
      '/technology/ai/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'AI & Machine Learning',
          items: [
            { text: 'Overview', link: '/technology/ai/' },
            { text: 'Computer Vision', link: '/technology/ai/computer-vision' },
            { text: 'Deep Learning', link: '/technology/ai/deep-learning' },
            { text: 'Machine Learning', link: '/technology/ai/machine-learning' },
            { text: 'Nlp', link: '/technology/ai/nlp' },
            { text: 'Tools', link: '/technology/ai/tools' },
            { text: 'Running AI Models Locally', 
              collapsed: false,
              link: '/technology/ai/local-models',
              items: [
              { text: 'llama.cpp', link: '/technology/ai/local-models/llamacpp-guide' },
              { text: 'ollama', link: '/technology/ai/local-models/ollama-guide' },
              { text: 'GPT4All', link: '/technology/ai/local-models/gpt4all-guide' },
              { text: 'Lmstudio', link: '/technology/ai/local-models/lmstudio-guide' },
              { text: 'janai', link: '/technology/ai/local-models/janai-guide' },
            ]}
          ]
        }
      ],
      '/technology/data-science/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Data Science',
          items: [
            { text: 'Overview', link: '/technology/data-science/' },
            { text: 'Big Data', link: '/technology/data-science/big-data' },
            { text: 'Data Analysis', link: '/technology/data-science/data-analysis' },
            { text: 'Data Engineering', link: '/technology/data-science/data-engineering' },
            { text: 'Data Visualization', link: '/technology/data-science/data-visualization' },
            { text: 'Statistics', link: '/technology/data-science/statistics' },
            { text: 'Tools Libraries', link: '/technology/data-science/tools-libraries' }
          ]
        }
      ],
      '/technology/cybersecurity/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Cybersecurity',
          items: [
            { text: 'Overview', link: '/technology/cybersecurity/' },
            { text: 'Application Security', link: '/technology/cybersecurity/application-security' },
            { text: 'Cloud Security', link: '/technology/cybersecurity/cloud-security' },
            { text: 'Compliance And Regulations', link: '/technology/cybersecurity/compliance-and-regulations' },
            { text: 'Cryptography', link: '/technology/cybersecurity/cryptography' },
            { text: 'Ethical Hacking', link: '/technology/cybersecurity/ethical-hacking' },
            { text: 'Iot Security', link: '/technology/cybersecurity/iot-security' },
            { text: 'Network Security', link: '/technology/cybersecurity/network-security' },
            { text: 'Security Best Practices', link: '/technology/cybersecurity/security-best-practices' },
            { text: 'Security Fundamentals', link: '/technology/cybersecurity/security-fundamentals' }
          ]
        }
      ],
      '/technology/cloud/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Cloud',
          items: [
            { text: 'Overview', link: '/technology/cloud/' },
            { text: 'Cloud Architecture', link: '/technology/cloud/cloud-architecture' },
            { text: 'Cloud Fundamentals', link: '/technology/cloud/cloud-fundamentals' },
            { text: 'Cloud Providers', link: '/technology/cloud/cloud-providers' },
            { text: 'Cloud Security', link: '/technology/cloud/cloud-security' },
            { text: 'Containers Kubernetes', link: '/technology/cloud/containers-kubernetes' },
            { text: 'Serverless Computing', link: '/technology/cloud/serverless-computing' }
          ]
        }
      ],
      '/technology/hardware/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Hardware',
          items: [
            { text: 'Overview', link: '/technology/hardware/' },
            { text: 'Computer Components', link: '/technology/hardware/computer-components' },
            { text: 'Embedded Systems', link: '/technology/hardware/embedded-systems' },
            { text: 'Hardware Maintenance', link: '/technology/hardware/hardware-maintenance' },
            { text: 'Networking Hardware', link: '/technology/hardware/networking-hardware' }
          ]
        }
      ],
      '/technology/tools/': [
        {
          text: '← Back to Technology',
          link: '/technology/'
        },
        {
          text: 'Tools',
          items: [
            { text: 'Overview', link: '/technology/tools/' },
            { text: 'Devops Tools', link: '/technology/tools/devops-tools' },
            { text: 'Ides Editors', link: '/technology/tools/ides-editors' },
            { text: 'Productivity Software', link: '/technology/tools/productivity-software' },
            { text: 'Version Control Git', link: '/technology/tools/version-control-git' }
          ]
        }
      ],
      '/science/physics/': [
        {
          text: '← Back to Science',
          link: '/science/'
        },
        {
          text: 'Physics',
          items: [
            { text: 'Overview', link: '/science/physics/' },
            { text: 'Classical Mechanics', link: '/science/physics/classical-mechanics' },
            { text: 'Electromagnetism', link: '/science/physics/electromagnetism' },
            { text: 'Quantum Physics', link: '/science/physics/quantum-physics' },
            { text: 'Relativity', link: '/science/physics/relativity' },
            { text: 'Thermodynamics', link: '/science/physics/thermodynamics' }
          ]
        }
      ],
      '/science/biology/': [
        {
          text: '← Back to Science',
          link: '/science/'
        },
        {
          text: 'Biology',
          items: [
            { text: 'Overview', link: '/science/biology/' },
            { text: 'Cell Biology', link: '/science/biology/cell-biology' },
            { text: 'Ecology', link: '/science/biology/ecology' },
            { text: 'Evolution', link: '/science/biology/evolution' },
            { text: 'Genetics', link: '/science/biology/genetics' },
            { text: 'Human Anatomy', link: '/science/biology/human-anatomy' }
          ]
        }
      ],
      '/science/chemistry/': [
        {
          text: '← Back to Science',
          link: '/science/'
        },
        {
          text: 'Chemistry',
          items: [
            { text: 'Overview', link: '/science/chemistry/' },
            { text: 'Biochemistry', link: '/science/chemistry/biochemistry' },
            { text: 'Inorganic Chemistry', link: '/science/chemistry/inorganic-chemistry' },
            { text: 'Organic Chemistry', link: '/science/chemistry/organic-chemistry' },
            { text: 'Physical Chemistry', link: '/science/chemistry/physical-chemistry' }
          ]
        }
      ],
      '/science/space/': [
        {
          text: '← Back to Science',
          link: '/science/'
        },
        {
          text: 'Space',
          items: [
            { text: 'Overview', link: '/science/space/' },
            { text: 'Cosmology', link: '/science/space/cosmology' },
            { text: 'Solar System', link: '/science/space/solar-system' },
            { text: 'Space Exploration', link: '/science/space/space-exploration' },
            { text: 'Stars Galaxies', link: '/science/space/stars-galaxies' }
          ]
        }
      ],
      '/science/neurology/': [
        {
          text: '← Back to Science',
          link: '/science/'
        },
      ],
      '/humanities/history/': [
        {
          text: '← Back to Humanities',
          link: '/humanities/'
        },
        {
          text: 'History',
          items: [
            { text: 'Overview', link: '/humanities/history/' },
            { text: 'Ancient Civilizations', link: '/humanities/history/ancient-civilizations' },
            { text: 'Contemporary Era', link: '/humanities/history/contemporary-era' },
            { text: 'Medieval Period', link: '/humanities/history/medieval-period' },
            { text: 'Modern History', link: '/humanities/history/modern-history' },
            { text: 'World Wars', link: '/humanities/history/world-wars' }
          ]
        }
      ],
      '/humanities/philosophy/': [
        {
          text: '← Back to Humanities',
          link: '/humanities/'
        },
        {
          text: 'Philosophy',
          items: [
            { text: 'Overview', link: '/humanities/philosophy/' },
            { text: 'Ancient Philosophy', link: '/humanities/philosophy/ancient-philosophy' },
            { text: 'Epistemology', link: '/humanities/philosophy/epistemology' },
            { text: 'Ethics Morality', link: '/humanities/philosophy/ethics-morality' },
            { text: 'Metaphysics', link: '/humanities/philosophy/metaphysics' },
            { text: 'Modern Philosophy', link: '/humanities/philosophy/modern-philosophy' }
          ]
        }
      ],
      '/humanities/art/': [
        {
          text: '← Back to Humanities',
          link: '/humanities/'
        },
        {
          text: 'Art',
          items: [
            { text: 'Overview', link: '/humanities/art/' },
            { text: 'Art History', link: '/humanities/art/art-history' },
            { text: 'Art Movements', link: '/humanities/art/art-movements' },
            { text: 'Digital Art', link: '/humanities/art/digital-art' },
            { text: 'Drawing Painting', link: '/humanities/art/drawing-painting' },
            { text: 'Sculpture', link: '/humanities/art/sculpture' }
          ]
        }
      ],
      '/humanities/literature/': [
        {
          text: '← Back to Humanities',
          link: '/humanities/'
        },
        {
          text: 'Literature',
          items: [
            { text: 'Overview', link: '/humanities/literature/' },
            { text: 'Classic Literature', link: '/humanities/literature/classic-literature' },
            { text: 'Literary Criticism', link: '/humanities/literature/literary-criticism' },
            { text: 'Modern Literature', link: '/humanities/literature/modern-literature' },
            { text: 'Poetry', link: '/humanities/literature/poetry' },
            { text: 'Writing Techniques', link: '/humanities/literature/writing-techniques' }
          ]
        }
      ],
      '/life-skills/health/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Health',
          items: [
            { text: 'Overview', link: '/life-skills/health/' },
            { text: 'Exercise Fitness', link: '/life-skills/health/exercise-fitness' },
            { text: 'Mental Health', link: '/life-skills/health/mental-health' },
            { text: 'Nutrition', link: '/life-skills/health/nutrition' },
            { text: 'Preventive Care', link: '/life-skills/health/preventive-care' },
            { text: 'Sleep Recovery', link: '/life-skills/health/sleep-recovery' }
          ]
        }
      ],
      '/life-skills/productivity/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Productivity',
          items: [
            { text: 'Overview', link: '/life-skills/productivity/' },
            { text: 'Focus Techniques', link: '/life-skills/productivity/focus-techniques' },
            { text: 'Goal Setting', link: '/life-skills/productivity/goal-setting' },
            { text: 'Habit Building', link: '/life-skills/productivity/habit-building' },
            { text: 'Time Management', link: '/life-skills/productivity/time-management' },
            { text: 'Work Life Balance', link: '/life-skills/productivity/work-life-balance' }
          ]
        }
      ],
      '/life-skills/communication/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Communication',
          items: [
            { text: 'Overview', link: '/life-skills/communication/' },
            { text: 'Active Listening', link: '/life-skills/communication/active-listening' },
            { text: 'Body Language', link: '/life-skills/communication/body-language' },
            { text: 'Negotiation', link: '/life-skills/communication/negotiation' },
            { text: 'Public Speaking', link: '/life-skills/communication/public-speaking' },
            { text: 'Writing Skills', link: '/life-skills/communication/writing-skills' }
          ]
        }
      ],
      '/life-skills/finance/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Finance',
          items: [
            { text: 'Overview', link: '/life-skills/finance/' },
            { text: 'Credit Debt', link: '/life-skills/finance/credit-debt' },
            { text: 'Investing Basics', link: '/life-skills/finance/investing-basics' },
            { text: 'Personal Budgeting', link: '/life-skills/finance/personal-budgeting' },
            { text: 'Saving Strategies', link: '/life-skills/finance/saving-strategies' },
            { text: 'Tax Planning', link: '/life-skills/finance/tax-planning' }
          ]
        }
      ],
      '/life-skills/career/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Career',
          items: [
            { text: 'Overview', link: '/life-skills/career/' },
            { text: 'Career Planning', link: '/life-skills/career/career-planning' },
            { text: 'Interview Skills', link: '/life-skills/career/interview-skills' },
            { text: 'Job Search Strategies', link: '/life-skills/career/job-search-strategies' },
            { text: 'Networking', link: '/life-skills/career/networking' },
            { text: 'Professional Growth', link: '/life-skills/career/professional-growth' },
            { text: 'Resume Cover Letters', link: '/life-skills/career/resume-cover-letters' }
          ]
        }
      ],
      '/life-skills/personal-development/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Personal Development',
          items: [
            { text: 'Overview', link: '/life-skills/personal-development/' },
            { text: 'Critical Thinking', link: '/life-skills/personal-development/critical-thinking' },
            { text: 'Emotional Intelligence', link: '/life-skills/personal-development/emotional-intelligence' },
            { text: 'Learning Strategies', link: '/life-skills/personal-development/learning-strategies' },
            { text: 'Mindfulness', link: '/life-skills/personal-development/mindfulness' },
            { text: 'Resilience', link: '/life-skills/personal-development/resilience' },
            { text: 'Self Improvement', link: '/life-skills/personal-development/self-improvement' }
          ]
        }
      ],
      '/life-skills/digital-literacy/': [
        {
          text: '← Back to Life Skills',
          link: '/life-skills/'
        },
        {
          text: 'Digital Literacy',
          items: [
            { text: 'Overview', link: '/life-skills/digital-literacy/' },
            { text: 'Digital Citizenship', link: '/life-skills/digital-literacy/digital-citizenship' },
            { text: 'Digital Tools', link: '/life-skills/digital-literacy/digital-tools' },
            { text: 'Information Literacy', link: '/life-skills/digital-literacy/information-literacy' },
            { text: 'Internet Basics', link: '/life-skills/digital-literacy/internet-basics' },
            { text: 'Online Safety', link: '/life-skills/digital-literacy/online-safety' },
            { text: 'Social Media', link: '/life-skills/digital-literacy/social-media' }
          ]
        }
      ],
      '/miscellaneous/diy/': [
        {
          text: '← Back to Miscellaneous',
          link: '/miscellaneous/'
        },
        {
          text: 'DIY & Crafts',
          items: [
            { text: 'Overview', link: '/miscellaneous/diy/' },
            { text: 'Crafts Hobbies', link: '/miscellaneous/diy/crafts-hobbies' },
            { text: 'Electronics Projects', link: '/miscellaneous/diy/electronics-projects' },
            { text: 'Home Improvement', link: '/miscellaneous/diy/home-improvement' },
            { text: 'Woodworking', link: '/miscellaneous/diy/woodworking' }
          ]
        }
      ],
      '/miscellaneous/travel/': [
        {
          text: '← Back to Miscellaneous',
          link: '/miscellaneous/'
        },
        {
          text: 'Travel',
          items: [
            { text: 'Overview', link: '/miscellaneous/travel/' },
            { text: 'Budget Travel', link: '/miscellaneous/travel/budget-travel' },
            { text: 'Destinations', link: '/miscellaneous/travel/destinations' },
            { text: 'Travel Planning', link: '/miscellaneous/travel/travel-planning' },
            { text: 'Travel Safety', link: '/miscellaneous/travel/travel-safety' }
          ]
        }
      ],
      '/miscellaneous/culture/': [
        {
          text: '← Back to Miscellaneous',
          link: '/miscellaneous/'
        },
        {
          text: 'Culture',
          items: [
            { text: 'Overview', link: '/miscellaneous/culture/' },
            { text: 'Cuisine', link: '/miscellaneous/culture/cuisine' },
            { text: 'Customs Traditions', link: '/miscellaneous/culture/customs-traditions' },
            { text: 'Languages', link: '/miscellaneous/culture/languages' },
            { text: 'World Cultures', link: '/miscellaneous/culture/world-cultures' }
          ]
        }
      ],
      '/miscellaneous/fun-facts/': [
        {
          text: '← Back to Miscellaneous',
          link: '/miscellaneous/'
        },
        {
          text: 'Fun Facts',
          items: [
            { text: 'Overview', link: '/miscellaneous/fun-facts/' },
            { text: 'History Facts', link: '/miscellaneous/fun-facts/history-facts' },
            { text: 'Nature Facts', link: '/miscellaneous/fun-facts/nature-facts' },
            { text: 'Science Facts', link: '/miscellaneous/fun-facts/science-facts' },
            { text: 'Trivia', link: '/miscellaneous/fun-facts/trivia' }
          ]
        }
      ],
      '/technology/': [
        {
          text: 'Technology',
          items: [
            { text: 'Programming', link: '/technology/programming' },
            { text: 'Web Development', link: '/technology/web-dev' },
            { text: 'AI & Machine Learning', link: '/technology/ai' },
            { text: 'Data Science', link: '/technology/data-science' },
            { text: 'Cybersecurity', link: '/technology/cybersecurity' },
            { text: 'Cloud', link: '/technology/cloud' },
            { text: 'Hardware', link: '/technology/hardware' },
            { text: 'Tools', link: '/technology/tools' }
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
            { text: 'Space', link: '/science/space' },
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
            { text: 'Health', link: '/life-skills/health' },
            { text: 'Productivity', link: '/life-skills/productivity' },
            { text: 'Communication', link: '/life-skills/communication' },
            { text: 'Finance', link: '/life-skills/finance' },
            { text: 'Career', link: '/life-skills/career' },
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
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#a764ffff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Root Sanctum' }],
    ['meta', { name: 'og:description', content: 'A comprehensive knowledge base for learning' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  appearance: 'dark',
  
  lastUpdated: true,

  ignoreDeadLinks: true
})
