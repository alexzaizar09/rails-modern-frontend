import * as React from "react"
import Row from "./row"

interface VenueProps {
  rows: number
  seatsPerRow: number
}

const Venue = (props: VenueProps): React.ReactElement => {
  const rows = Array.from(Array(props.rows).keys()).map((rowNumber) => (
    <Row
      key={rowNumber}
      rowNumber={rowNumber}
      seatsPerRow={props.seatsPerRow}
    />
  ))

  return <div className="flex flex-wrap items-center justify-center gap-4 my-4">{rows}</div>
}

export default Venue
