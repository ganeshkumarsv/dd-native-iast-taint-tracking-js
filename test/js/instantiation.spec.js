/**
* Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
* This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2022 Datadog, Inc.
**/
const assert = require('assert')
const { TaintedUtils } = require('./util')

describe('Addon loading', function () {
  it('Check native methods', function () {
    assert(TaintedUtils, 'Undefined module')
    assert(TaintedUtils.newTaintedString, 'Undefined')
    assert(TaintedUtils.isTainted, 'Undefined')
    assert(TaintedUtils.concat, 'Undefined')
    assert(TaintedUtils.trim, 'Undefined')
    assert(TaintedUtils.trimEnd, 'Undefined')
    assert(TaintedUtils.slice, 'Undefined')
  })
})
