import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SummonModel } from '../myforms/components/inquiry-form/summon-model';

@Injectable({
  providedIn: 'root'
})
export class InquiryStoreService {

  constructor() { }

  private summons = new Subject<SummonModel>();
  public summons$ = this.summons.asObservable();

  setSummon(data: SummonModel) {
    this.summons.next(data);
  }

}
