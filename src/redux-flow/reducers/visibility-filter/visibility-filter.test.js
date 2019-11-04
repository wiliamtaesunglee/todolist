'use strict'

import visibilityFilter from './index.js'
import { expect } from 'chai'


it('visibility filter should be a function', () => {
 expect(visibilityFilter).to.be.a('function')
})
