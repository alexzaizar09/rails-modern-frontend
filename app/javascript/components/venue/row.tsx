import * as React from "react"
import Seat from "./seat"

interface RowProps {
  rowNumber: number
  seatsPerRow: number
}

const Row = (props: RowProps): React.ReactElement => {
  const seats = Array.from(Array(props.seatsPerRow).keys()).map(
    (seatNumber) => <Seat key={seatNumber} seatNumber={seatNumber} initialStatus="unsold" />
  )

  return <div className="flex items-center justify-center gap-4">{seats}</div>
}

export default Row
