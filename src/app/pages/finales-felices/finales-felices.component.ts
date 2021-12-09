import { Component, OnInit } from '@angular/core';
import { FinalFeliz } from 'src/app/models/final-feliz';
import { FinalFelizService } from 'src/app/shared/final-feliz.service';

@Component({
  selector: 'app-finales-felices',
  templateUrl: './finales-felices.component.html',
  styleUrls: ['./finales-felices.component.css']
})
export class FinalesFelicesComponent implements OnInit {

  public finalFeliz: FinalFeliz;
  public finalesFelices: FinalFeliz[];

  constructor(private apiService: FinalFelizService) {
    this.finalFeliz = new FinalFeliz(0, "", "", "", "", 0);
  }

  public mostrarFinalesFelices(id: any){
    if(id != ""){
      this.apiService.getFinalFeliz(id).subscribe((data: any) => {
        this.finalesFelices = [data[0]];
        console.log(data);
      })
    }
    else {
      this.apiService.getFinalesFelices().subscribe((data: any) => {
        this.finalesFelices = data;
        console.log(this.finalesFelices);
      })
    }
  }

  ngOnInit(): void {
  }

}
