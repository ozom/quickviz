import { CoutomModule } from './coutom.module';

describe('CoutomModule', () => {
  let coutomModule: CoutomModule;

  beforeEach(() => {
    coutomModule = new CoutomModule();
  });

  it('should create an instance', () => {
    expect(coutomModule).toBeTruthy();
  });
});
