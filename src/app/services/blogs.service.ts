import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../models/blogs.model';

const baseUrl = 'http://localhost:8000/api/blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(baseUrl);
  }

  get(id: any): Observable<Blogs> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, JSON.stringify(data));
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(`${baseUrl}?title=${title}`);
  }
  callServer(data: any) {
    this.http.post('http://localhost:8080/file', { images: JSON.stringify(data) })
      .subscribe(data => {
        console.log(data);
      });
  }
}