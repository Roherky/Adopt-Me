import { Component, OnInit } from '@angular/core';
import { SesionesService } from 'src/app/shared/sesiones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public sesiones: SesionesService) { }

  ngOnInit(): void {
  }

}
