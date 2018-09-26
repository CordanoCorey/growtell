import { Component, OnInit, HostListener, Input } from '@angular/core';
import { build, Image } from '@caiu/library';

@Component({
  selector: 'gt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() hasWallpaper = false;

  constructor() {
  }

  get images(): Image[] {
    return [
      build(Image, { src: 'assets/highlights/GrowandTell-3523.jpg', height: 2880, width: 1920 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3525.jpg', height: 1723, width: 2584 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3537.jpg', height: 2880, width: 1920 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3544.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3549.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3577.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3621.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3633.jpg', height: 1707, width: 2561 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3643.jpg', height: 1280, width: 1920 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3663.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3686.jpg', height: 1793, width: 2689 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3712.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3753.jpg', height: 1851, width: 2776 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3769.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3775.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3780.jpg', height: 2557, width: 1705 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3790.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3804.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3812.jpg', height: 2880, width: 1920 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3817.jpg', height: 1920, width: 2880 }),
      // build(Image, { src: 'assets/highlights/GrowandTell-3829.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3833.jpg', height: 2880, width: 1920 }),
      // build(Image, { src: 'assets/highlights/GrowandTell-3842.jpg', height: 1920, width: 2880 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3843.jpg', height: 2387, width: 1591 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3858.jpg', height: 1819, width: 2728 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3866.jpg', height: 1896, width: 2844 }),
      build(Image, { src: 'assets/highlights/GrowandTell-3875.jpg', height: 1880, width: 2820 }),
    ];
  }

  get sidenavHeight(): number {
    return this.windowHeight + 50 + 64;
  }

  get windowHeight(): number {
    return parseInt(localStorage.getItem('WINDOW_HEIGHT'), 10) - 64;
  }

  set windowHeight(value: number) {
    localStorage.setItem('WINDOW_HEIGHT', value.toString());
  }

  get windowWidth(): number {
    return parseInt(localStorage.getItem('WINDOW_WIDTH'), 10) - 120;
  }

  set windowWidth(value: number) {
    localStorage.setItem('WINDOW_WIDTH', value.toString());
  }

  ngOnInit() {
    this.windowHeight = parseInt(localStorage.getItem('WINDOW_HEIGHT'), 10);
    this.windowWidth = parseInt(localStorage.getItem('WINDOW_WIDTH'), 10);
    console.log(this.windowHeight, this.windowWidth);
  }

  @HostListener('window:load', ['$event'])
  onLoad(e: any) {
    this.windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    this.windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    // console.log('\n\nwindow:load', this.windowWidth, this.windowHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    this.windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    // console.log('\n\nwindow:resize', this.windowWidth, this.windowHeight);
  }

}
