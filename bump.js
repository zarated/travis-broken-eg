const json = require('json-update')
const fs = require('fs')

const package = require('./package.json')

let version = package.version.split('.')
console.log('Previous version', version)
version[version.length - 1] = Number(version[version.length - 1]) + 1
version = version.join('.')

json.update('./package.json' , {version})
  .then(function(dat) {
    console.log('Version bumped to ', version)
});

process.env['APP_VERSION'] = version

fs.writeFileSync('./build_tracker', version, 'utf8')
