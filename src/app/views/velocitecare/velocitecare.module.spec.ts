import { VelocitecareModule } from './velocitecare.module';

describe('VelocitecareModule', () => {
  let velocitecareModule: VelocitecareModule;

  beforeEach(() => {
    velocitecareModule = new VelocitecareModule();
  });

  it('should create an instance', () => {
    expect(velocitecareModule).toBeTruthy();
  });
});
