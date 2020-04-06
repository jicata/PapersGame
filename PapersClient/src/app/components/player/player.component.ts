import { Component, OnInit, Input, Optional, Inject, Injectable } from "@angular/core";

@Component({
  selector: "app-player",
  template: `
    <div class="player" [ngStyle]="style">
      {{ value }}
    </div>
  `,
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent {
  @Input() style: string;
  @Input() value: string;
}
