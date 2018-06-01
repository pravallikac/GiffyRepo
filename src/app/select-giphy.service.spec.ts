/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectGiphyService } from './select-giphy.service';

describe('SelectGiphyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectGiphyService]
    });
  });

  it('should ...', inject([SelectGiphyService], (service: SelectGiphyService) => {
    expect(service).toBeTruthy();
  }));
});
