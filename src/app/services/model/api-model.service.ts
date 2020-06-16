import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiModelService {
  URL = "https://backendvst.tech";

  constructor(private http: HttpClient) {}

  trasnferOnFire(data) {
    return this.http.post(`${this.URL}/convert/`, data);
  }

  healtCheck() {
    return this.http.get(`${this.URL}`).subscribe((res) => {
      console.log(res);
      return res;
    });
  }
}
