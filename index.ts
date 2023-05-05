const robot = require("robotjs");


robot.setMouseDelay(2);

const twoPI = Math.PI * 2.0;
const screenSize = robot.getScreenSize();
const height = (screenSize.height / 2) - 10;
const width = screenSize.width;
let y;

setInterval(() => {
    for (var x = 0; x < width; x++)
    {
        y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }
}, 10000)

