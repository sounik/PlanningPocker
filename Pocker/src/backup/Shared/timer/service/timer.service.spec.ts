import { TestBed } from '@angular/core/testing';

import { TimerService } from './timer.service';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 0 minutes initially when created', () => {
    expect(service.miuntes).toBe(0);
  });

  it('should have 0 seconds initially when created', () => {
    expect(service.seconds).toBe(0);
  });

  it('should reset minutes to 0 when resetTimer is called', () => {
    service.miuntes = 1;
    service.resetTimer();
    expect(service.miuntes).toBe(0);
  });

  it('should reset seconds to 0 when resetTimer is called', () => {
    service.seconds = 1;
    service.resetTimer();
    expect(service.seconds).toBe(0);
  });

  it('should reset to not running when resetTimer is called', () => {
    service.miuntes = 2;
    service.toggleTimer();
     service.resetTimer();
     expect(service.isRunning()).toBeFalse();
  });

  it('should get time format padded with 0 for 2 minute and 0 second when getTime is called', () => {
    service.miuntes = 2;
     expect(service.getTime()).toBe("02:00");
  });

  it('should get time format padded with 0 for 0 minute and 10 second when getTime is called', () => {
    service.miuntes = 0;
    service.seconds = 10;
     expect(service.getTime()).toBe("00:10");
  });

  it('should not increase after reaching threshhold when toggleTimer is called', () => {
    service.miuntes = 2;
    service.toggleTimer();
     expect(service.miuntes).toBe(2);
  });

  it('should increase time by 1 minute after ticking 1 minute when toggleTimer is called', () => {

    jasmine.clock().install();

    service.miuntes = 0;
    service.toggleTimer();
    jasmine.clock().tick(60001);

    expect(service.miuntes).toBe(1);
    expect(service.seconds).toBe(0);
    
    jasmine.clock().uninstall();
  });

  it('should increase time by 59 seconds after ticking 59 second when toggleTimer is called', () => {

    jasmine.clock().install();

    service.miuntes = 0;
    service.toggleTimer();
    jasmine.clock().tick(59999);

    expect(service.miuntes).toBe(0);
    expect(service.seconds).toBe(59);
    
    jasmine.clock().uninstall();
  });

});
