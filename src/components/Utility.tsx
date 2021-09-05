import { ClearAll, RandomColor } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={e => ClearAll()}>Clear</button>
      <button className="w-36" onClick={e => RandomColor()}>Random color</button>
    </div>
  )
}

export default Utility
