import { Injectable } from '@angular/core';
import { Todo } from './todo';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpEventType
} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
