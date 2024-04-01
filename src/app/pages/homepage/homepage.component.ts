import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { BootcampListResponse } from '../../models/responses/bootcamps/get-list-bootcamp-response';
import { CommonModule, DatePipe } from '@angular/common';
import { GetListBootcampsRequest } from '../../models/requests/bootcamps/get-list-bootcamp-request';
import { PaginatedList } from '../../core/models/paginated-list';
import { Bootcamp } from '../../models/requests/bootcamps/bootcamp';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,RouterModule,MatCardModule,HttpClientModule],
  providers: [DatePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  bootcampList:Bootcamp[]=[];

  constructor(private httpClient:HttpClient, private router: Router){}

  ngOnInit(): void {
    this.getListBootcamps();
  }

  getListBootcampsRequest:GetListBootcampsRequest={
    index:0,
    size:2
  };

  getListBootcamps(){
    const url = `http://localhost:60805/api/Bootcamps?PageIndex=${this.getListBootcampsRequest.index}&PageSize=${this.getListBootcampsRequest.size}`;

    const userToken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijc3YWE0NjE5LWE5ZGItNDhjMS1hNDdjLTZjNjc0ZGViZjBiZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im5hcmNoQGtvZGxhbWEuaW8iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIm5iZiI6MTcxMTY3NTA1OCwiZXhwIjoxNzExNjc1NjU4LCJpc3MiOiJuQXJjaGl0ZWN0dXJlQGtvZGxhbWEuaW8iLCJhdWQiOiJzdGFydGVyUHJvamVjdEBrb2RsYW1hLmlvIn0.My1Do7tOqfEvEN0ox4dLyKxIVPF9UycgRd6NY_3NMef9s489ijDohdK8vwsQgYQ7P1ODn0NTTCUgjBiEcSVppQ';
    const authToken = 'Bearer ' + userToken;

    const headers = new HttpHeaders()
      .set('Authorization', authToken);

    this.httpClient.get<PaginatedList<Bootcamp>>(url,{ headers })
    .subscribe({
      next:(response: PaginatedList<Bootcamp>)=>{
        console.log("Cevap geldi :",response);
        this.bootcampList=response.items;
      },
      error:(error)=>{console.log("cevap hatalı :",error)},
      complete:()=>{console.log("istek sonlandı")}
    })
  }

  onBootcampClick(bootcamp: Bootcamp) {

    this.router.navigate(['/bootcamp', bootcamp.id]);
  }
}
