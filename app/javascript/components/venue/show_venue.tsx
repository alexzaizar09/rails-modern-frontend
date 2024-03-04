import * as React from "react"
import { createRoot } from "react-dom/client"
import Venue from "./venue"

document.addEventListener("turbo:load", () => {
  if (document.getElementById("show-venue")) {
    const container = document.getElementById("show-venue")
    const root = createRoot(container)
    root.render(<Venue rows={10} seatsPerRow={10} />)
  }
})
