function doSomething_3 () {
    data_3 = moco_图像识别.识别小球返回值(moco_图像识别.Ball_Position.像素点)
    if (data_3 > 1000) {
        data = (60 - data_1) / 10
        moco_底盘模式.机器狗控制(moco_底盘模式.mode.后退, 7, 1)
    }
    if (data_3 < 1000) {
        data = (data_1 - 60) / 10
        moco_底盘模式.机器狗控制(moco_底盘模式.mode.前进, 7, 1)
    }
}
function doSomething_1 () {
    data_1 = moco_图像识别.识别小球返回值(moco_图像识别.Ball_Position.X轴)
    if (data_1 < 80) {
        data = (80 - data_1) / 10
        moco_底盘模式.机器狗控制(moco_底盘模式.mode.左转, data, 1)
    }
    if (data_1 > 80) {
        data = (data_1 - 80) / 10
        moco_底盘模式.机器狗控制(moco_底盘模式.mode.右转, data, 1)
    }
}
let data_1 = 0
let data = 0
let data_3 = 0
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200
)
moco_图像识别.图形识别初始化()
moco_底盘模式.机器狗初始化()
moco_底盘模式.机器人狗高度(10)
moco_底盘模式.机器狗启动()
moco_底盘模式.机器狗步态(moco_底盘模式.gait.慢跑)
basic.forever(function () {
    moco_底盘模式.机器狗心跳()
    if (moco_图像识别.识别小球(moco_图像识别.enColor.Red) == 1) {
        doSomething_1()
        doSomething_3()
    }
})
