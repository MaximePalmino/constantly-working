const { writeFileSync } = require('fs')

setInterval(() => {
    writeFileSync('./content/life-saver.txt', Math.random().toString())
}, 10000)