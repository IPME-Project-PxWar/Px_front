import { Component, OnInit, ViewChild } from '@angular/core';
import { PixelService } from './pixel/pixel.service';
import { GridComponent } from './grid/gird.component';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [
    `./app.component.css`
  ]
})
export class AppComponent implements OnInit {
  appTitle = 'Pixel War';

  @ViewChild(GridComponent, {static: false})
  pixelGrid: GridComponent;

  ngOnInit(): void {
  }

  constructor(
    private pixelService: PixelService
  ){}

  onClearGrid() {
    this.pixelGrid.clearPixels();
  }

}
