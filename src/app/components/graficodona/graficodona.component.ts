import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {


  @Input() graficos: any;
  @Input() leyenda: string;
  constructor() { }

  ngOnInit() {
  }

}
