import { JsonParseModule } from './json-parse.module';

describe('JsonParseModule', () => {
  let jsonParseModule: JsonParseModule;

  beforeEach(() => {
    jsonParseModule = new JsonParseModule();
  });

  it('should create an instance', () => {
    expect(jsonParseModule).toBeTruthy();
  });
});
