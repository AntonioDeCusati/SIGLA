import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../model/userModel';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  PHP_API_SERVER = "https://www.antoniodecusati.it/connDb/project/SIGLA/api";
 
    
  getAllUsers(): Observable<User[]>{
  	this.users = this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/getAllUsers.php`);
     return this.users;
  }
  
   getAvatarIdDrive(idAvatar : number): Observable<String>{
  	this.url = this.httpClient.get<String>(`${this.PHP_API_SERVER}/getAvatarDriveIdByAvatarId.php?avatarId=` + idAvatar);
    return this.url;
  }
  
   constructor(private httpClient: HttpClient) { }
}
