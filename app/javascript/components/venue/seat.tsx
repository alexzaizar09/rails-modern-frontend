import * as React from "react"

interface SeatProps {
  seatNumber: number
  initialStatus: string
}

const Seat = ({seatNumber, initialStatus}: SeatProps): React.ReactElement => {
  const [status, setStatus] = React.useState(initialStatus)

  function changeStatus(): void {
    if (status === "held") {
      setStatus("unsold")
    } else {
      setStatus("held")
    }
  }

  function stateDisplayClass(): string {
    if (status === "held") {
      return "bg-green-500"
    } else {
      return "bg-white hover:bg-blue-300"
    }
  }

  const cssClass = "flex items-center justify-center w-20 h-20 text-lg border-4 border-black button hover:bg-blue-300"

  return (
    <span className={`${cssClass} ${stateDisplayClass()}`} onClick={changeStatus}>
      {seatNumber + 1}
    </span>
  )
}

export default Seat
