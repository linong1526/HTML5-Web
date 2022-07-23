/**
 *  类型断言
 */
const myCanvas = document.getElementById('main-canvas') as HTMLCanvasElement
const myCancas2 = <HTMLCanvasElement>document.getElementById('main_canvas')
const x= ('hello' as unknown) as number