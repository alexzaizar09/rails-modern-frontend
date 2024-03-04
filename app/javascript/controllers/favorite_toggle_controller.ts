import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class FavoriteToggleController extends Controller {
  static targets = ["elementToHide", "elementWithText"]

  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement

  static values = { visible: Boolean }
  visibleValue: boolean

  toggle(): void {
    this.toggleVisibilityState()
    this.toggleButtonText()
    this.toggleElementVisibility()
  }

  toggleVisibilityState(): void {
    this.visibleValue = !this.visibleValue
  }

  toggleButtonText(): void {
    this.elementWithTextTarget.innerText = this.visibleValue ? "Hide" : "Show"
  }

  toggleElementVisibility(): void {
    this.elementToHideTarget.classList.toggle("hidden", !this.visibleValue)
  }
}
