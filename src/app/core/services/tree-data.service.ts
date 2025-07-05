import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { TreeNodes } from '../models/treeNodes.model';
import { HttpClient } from '@angular/common/http';

interface DataTreeNodes {
  treeNodes: TreeNodes[]
}

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {
  constructor(private http: HttpClient) { }

  loadData(): Observable<TreeNodes[]> {
    return this.http.get<DataTreeNodes>('assets/tree-nodes.json').pipe(
      delay(800),
      map(data => data.treeNodes),
      catchError(error => {
        console.error('Ошибка загрузки данных:', error)
        return of([])
      })
    )
  }
}
