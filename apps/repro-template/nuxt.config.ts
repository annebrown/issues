//--------@/nuxt.config.ts---------------------------------------------------->
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({

    telemetry: false, // F Telemetry

    extends: ['../../base'],

    // css: [ resolve(__dirname, '../../assets/css/ship.css') ], 
    css: [ join(currentDir, '../../base/assets/css/all-fleet.css') ],

    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },

    tailwindcss: {
        configPath: '../../base/tailwind.config.ts',
    },


    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxt/icon',
    ],

    content: {
        // Use Cache 4 Dev Server
        // - unless XXserver launched w alias (XXservernocache)
        // - Faster DX for CMS client dev
        watch: process.env.DISABLE_CONTENT_WATCH === 'true' ? false : {
            ws: { port: 9991, } // WebSocket server
        },

        documentDriven: true,

        // Ignore "Number Dot" ordering in /content
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],

        highlight: {

            theme: {
                dark: 'github-dark',
                default: 'github-dark',
                light: 'github-light',
            },
        
            langs: ['go', 'regexp', 'perl', 'json', 'js', 'ts', 'tsx', 'html', 
                'css', 'vue','shell' , 'mdc', 'yaml', 'md', 'console', 'ini', 
                'java', 'diff', 'log', 'mermaid'
            ],
        }, // highlight
        
    }, // Content

    devtools: { enabled: true },

    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },

    compatibilityDate: '2025-02-07',

  });
  //--------@/nuxt.config.ts----------------------------------------------------->