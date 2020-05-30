import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { BottomSheetComponent } from '../shared/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'gt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this._bottomSheet.open(BottomSheetComponent, {
    //     ariaLabel: 'Covid Response'
    //   });
    // }, 0);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
