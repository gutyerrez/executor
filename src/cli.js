#!/usr/bin/env node

const main = process.argv[2]

const Application = require(`./${main}`)

Application.main(process.argv.slice(3))
