'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Björn Wilmsmann /'),
  handle: chalk.cyan('BjoernKW'),
  work: chalk.white('Independent IT Consultant'),
  web: chalk.cyan('https://bjoernkw.com'),
  twitter: chalk.cyan('https://twitter.com/bwilmsmann'),
  github: chalk.cyan('https://github.com/BjoernKW'),
  npx: chalk.white('npx bjoernkw'),
  labelWeb: chalk.white.bold('       Web:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + newline + webing + newline + twittering + newline + githubing + newline + newline + carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
