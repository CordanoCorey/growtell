import { Component, OnInit, HostListener, Input } from '@angular/core';
import { build, Image } from '@caiu/library';

@Component({
  selector: 'gt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() hasWallpaper = true;
  images = [
    build(Image, { src: 'assets/highlights/GrowandTell-3523.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3547.jpg', height: 2575, width: 1717 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3591.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3517.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3525.jpg', height: 1723, width: 2584 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3521.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3526.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3537.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3539.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3544.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3549.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3559.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3563.jpg', height: 2559, width: 1706 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3565.jpg', height: 2708, width: 1805 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3567.jpg', height: 1716, width: 2574 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3577.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3581.jpg', height: 2576, width: 1717 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3584.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3585.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3594.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3596.jpg', height: 1801, width: 2701 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3600.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3603.jpg', height: 1845, width: 2768 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3609.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3619.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3621.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3633.jpg', height: 1707, width: 2561 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3636.jpg', height: 2533, width: 1689 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3640.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3643.jpg', height: 1280, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3651.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3654.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3663.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3670.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3686.jpg', height: 1793, width: 2689 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3701.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3712.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3717.jpg', height: 1785, width: 2678 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3731.jpg', height: 1726, width: 2589 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3748.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3753.jpg', height: 1851, width: 2776 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3764.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3768.jpg', height: 1799, width: 2698 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3769.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3775.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3779.jpg', height: 2770, width: 1847 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3780.jpg', height: 2557, width: 1705 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3790.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3795.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3798.jpg', height: 2484, width: 1656 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3804.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3805.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3807.jpg', height: 1664, width: 2496 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3812.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3817.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3821.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3829.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3833.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3837.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3838.jpg', height: 2586, width: 1724 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3841.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3842.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3843.jpg', height: 2387, width: 1591 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3845.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3851.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3858.jpg', height: 1819, width: 2728 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3863.jpg', height: 1920, width: 2880 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3865.jpg', height: 1781, width: 2671 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3866.jpg', height: 1896, width: 2844 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3869.jpg', height: 1831, width: 2746 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3875.jpg', height: 1880, width: 2820 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3876.jpg', height: 2606, width: 1737 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3879.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3884.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3887.jpg', height: 2647, width: 1765 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3891.jpg', height: 2649, width: 1766 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3893.jpg', height: 2682, width: 1788 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3896.jpg', height: 2582, width: 1721 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3899.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3902.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3906.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3909.jpg', height: 2402, width: 1601 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3910.jpg', height: 1861, width: 2791 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3913.jpg', height: 2730, width: 1820 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3915.jpg', height: 2687, width: 1791 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3917.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3918.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3919.jpg', height: 2880, width: 1920 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3923.jpg', height: 2812, width: 1875 }),
    build(Image, { src: 'assets/highlights/GrowandTell-3924.jpg', height: 1920, width: 2880 }),
  ];

  constructor() { }

  get sidenavHeight(): number {
    return this.windowHeight + 50;
  }

  get windowHeight(): number {
    return parseInt(localStorage.getItem('WINDOW_HEIGHT'), 10);
  }

  set windowHeight(value: number) {
    localStorage.setItem('WINDOW_HEIGHT', value.toString());
  }

  get windowWidth(): number {
    return parseInt(localStorage.getItem('WINDOW_WIDTH'), 10);
  }

  set windowWidth(value: number) {
    localStorage.setItem('WINDOW_WIDTH', value.toString());
  }

  ngOnInit() {
  }

  @HostListener('window:load', ['$event'])
  onLoad(e: any) {
    this.windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    this.windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    console.log('\n\nwindow:load', this.windowWidth, this.windowHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.windowHeight = e && e.currentTarget && e.currentTarget.innerHeight ? e.currentTarget.innerHeight : 0;
    this.windowWidth = e && e.currentTarget && e.currentTarget.innerWidth ? e.currentTarget.innerWidth : 0;
    console.log('\n\nwindow:resize', this.windowWidth, this.windowHeight);
  }

}
