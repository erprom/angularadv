import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', ' Con Natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['si', 'no'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': '¿le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['no', 'si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
