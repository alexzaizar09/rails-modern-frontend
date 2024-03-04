import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorite-toggle"
export default class FavoriteToggleController extends Controller {
  toggle({ params: {text}}): void {
    console.log(text);
  }
}
