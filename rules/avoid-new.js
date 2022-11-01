/**
 * Rule: avoid-new
 * Avoid creating new promises outside of utility libraries.
 */

'use strict'

const getDocsUrl = require('./lib/get-docs-url')

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow creating `new` promises outside of utility libs (use [pify][] instead).',
      url: getDocsUrl('avoid-new'),
    },
    schema: [],
  },
  create(context) {
    return {
      NewExpression(node) {
        if (node.callee.name === 'Promise') {
          context.report({ node, message: 'Avoid creating new promises.' })
        }
      },
    }
  },
}
