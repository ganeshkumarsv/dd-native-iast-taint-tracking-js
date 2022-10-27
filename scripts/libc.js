'use strict'
const childProcess = require('child_process')
var getLibc = function () {
    if (process.platform === 'linux') {
        const out = childProcess.execSync('ldd --version 2>&1 || true')
        if (out.includes('GLIBC')) {
            return 'glibc'
        } else if (out.includes('musl')) {
            return 'musl'
        } else {
            return 'glibc'
        }
    }
    else {
        return 'unknown'
    }
}

module.exports = getLibc;
