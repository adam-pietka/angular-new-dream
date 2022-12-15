import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "header.componen.html"
})
export class HeaderComponen {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }
}
