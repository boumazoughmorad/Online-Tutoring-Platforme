import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environment/environment.prod";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserType } from "../model/dashboard-user.model";

@Injectable({
    providedIn: 'root',
  })
  export class DashboardUserService {
    private baseUrl = environment.baseUrl;
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    private http = inject(HttpClient);
    userType: UserType = 'student'; 
  }  