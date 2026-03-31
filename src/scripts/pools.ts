import { getCanvas } from './utils'
import { Basin } from './iso/Basin'
import { vec2, vec3 } from './matrix-utils'
import { IsoScene } from './iso/IsoScene'

const width = 1000
const height = 700
const canvasSize = vec2(width, height)
const [_, ctx] = getCanvas('canvas', width, height)

let t = 0

const gridSize = 50

const scene = new IsoScene(gridSize, false)

const basin2 = new Basin(vec3(-3, -3, 0), vec3(5, 5, 4))
const basin3 = new Basin(vec3(2, -3, 0), vec3(5, 5, 2))
const basin4 = new Basin(vec3(-3, 2, 0), vec3(5, 5, 2))
const basin5 = new Basin(vec3(2, 2, 0), vec3(4, 4, 1))

scene.add(basin2, basin3, basin4, basin5)

function render() {
  ctx.clearRect(0, 0, width, height)
  scene.draw(ctx, canvasSize, t)
  t += 1
  requestAnimationFrame(render)
}
render()
