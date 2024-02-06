import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isloggedin=false;
  private _userName="";
  private _user=new User();

  baseURL: string = "http://localhost:5214/api/auth";
  tokenKey: string = "myPostToken";

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    this._user= newUser;
    return this.http.post(`${this.baseURL}/register`, newUser);
}
get isLoggedIn(): boolean{
  return this._isloggedin;
}
get getUserName(): string{
  return this._isloggedin ? this._userName :"";
}

getUser(userId: string) {
  let reqHeaders = {
    Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
}
return this.http.get<User>(this.baseURL+"/"+userId, { headers: reqHeaders });
}

login(email: string, password: string){
  let queryParams = new HttpParams();
  queryParams = queryParams.append('email', email);
  queryParams = queryParams.append('password', password);

  return this.http.get(`${this.baseURL}/login`,  { params: queryParams, responseType: 'text' })
    .pipe(tap((response: any) => {
      localStorage.setItem('myPostToken', response);
      this._isloggedin=true
      this._userName=email
      console.log({this_userService_login:this})
    }));
}
}
