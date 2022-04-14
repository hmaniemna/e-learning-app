import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../classes/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private baseUrl= "http://localhost:8080/api/v1/groups"

  constructor(private httpClient: HttpClient) { }

  //return the group list 
  getGroupList():Observable<Group[]>{
    return this.httpClient.get<Group[]>(`${this.baseUrl}`);
  }

  //find a group by id
  getGroupById(id:number):Observable<Group>{
    return this.httpClient.get<Group>(`${this.baseUrl}/${id}`);
  }

  //create a group we'll return an object
  createGroup(group: Group):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,group);
  }

  //update a group
  updateGroup(idG:number, group:Group):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${idG}`,group);
  }

  //delete a groupe
deleteGroup(idG:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${idG}`);
}

}
