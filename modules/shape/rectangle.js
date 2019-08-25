module.exports = {
    area: (width, height) => {
        return width * height
    },
    circumference: (width, height) => {
        return 2 * (width + height)
    },
    currentDateTime : Date(),
    directoryName: __dirname,
    fileName: __filename
}