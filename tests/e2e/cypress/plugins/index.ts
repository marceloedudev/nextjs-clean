/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('@cypress/webpack-preprocessor')
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'

import path from 'path'

const { compilerOptions } = require('../../../../tsconfig.paths.json')

function getPathsAlias(dataPaths) {
  const paths = []
  for (const key of Object.entries(dataPaths)) {
    const [path] = key
    const [, name] = path.split(/\//)
    const pathName = path.replace(/..$/, '')
    paths.push({ pathName, name })
  }
  return paths
}

function builderAliasPath(compilerOptions) {
  const paths = getPathsAlias(compilerOptions.paths)
  return paths.reduce((acc, item) => {
    acc[item.pathName] = path.resolve(
      path.join(__dirname, '..', '..', '..', '..', `src`, `${item.name}`)
    )
    return acc
  }, {})
}

export default async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> => {
  await addCucumberPreprocessorPlugin(on, config)

  const aliasPath = builderAliasPath(compilerOptions)

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          alias: {
            ...aliasPath
          },
          extensions: ['.ts', '.js']
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'ts-loader'
                }
              ]
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}
