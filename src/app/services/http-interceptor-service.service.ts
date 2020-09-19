import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor {

  constructor(private cookieService:CookieService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    if (!request.headers.has('Accept')) {
      request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    }
//localhost:8082/api/auth/signin -> this.cookieService.get('Authorization')

	request = request.clone({headers: request.headers.set('Authorization',"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0M2NkY2Y3NC0xZjQ5LTQ2YmYtYjBiZS1hZWZhZDkwYjMxOGMiLCJpYXQiOjE1OTEwMzU3OTEsImV4cCI6MTU5MTY0MDU5MX0.h30x8D-19Jxwj6xAqjX3Q4MgwF85sF0wm2LxgPzawiGTQicud__fjUR5Lpc4ZxWXQFAeIaMwgqjOU0QF61qWWw")});
    return next.handle(request);
  }

}
