import { LeftMenuModule } from './left-menu.module';

describe('LeftMenuModule', () => {
  let leftMenuModule: LeftMenuModule;

  beforeEach(() => {
    leftMenuModule = new LeftMenuModule();
  });

  it('should create an instance', () => {
    expect(leftMenuModule).toBeTruthy();
  });
});
