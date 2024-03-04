import * as React from "react"

interface SeatProps {
  seatNumber: number
}

const Seat = (props: SeatProps): React.ReactElement => {
  return (
    <span className="flex items-center justify-center w-20 h-20 text-lg border-4 border-black button hover:bg-blue-300">
      {props.seatNumber + 1}
    </span>
  )
}

export default Seat
