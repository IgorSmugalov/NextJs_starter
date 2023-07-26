import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      }
    }
    if (config.module && config.module.rules) {
      config.module.rules.forEach((rule) => {
        if (!rule || typeof rule !== 'object') return
        if (rule.test instanceof RegExp && rule.test.test('.svg')) {
          rule.exclude = /\.svg$/
        }
      })
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    }

    return config
  },
}
export default config