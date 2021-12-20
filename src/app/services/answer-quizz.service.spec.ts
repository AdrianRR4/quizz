import { TestBed } from '@angular/core/testing';

import { AnswerQuizzService } from './answer-quizz.service';

describe('AnswerQuizzService', () => {
  let service: AnswerQuizzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerQuizzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
