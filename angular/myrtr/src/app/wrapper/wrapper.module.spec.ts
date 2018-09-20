import { WrapperModule } from './wrapper.module';

describe('WrapperModule', () => {
  let wrapperModule: WrapperModule;

  beforeEach(() => {
    wrapperModule = new WrapperModule();
  });

  it('should create an instance', () => {
    expect(wrapperModule).toBeTruthy();
  });
});
