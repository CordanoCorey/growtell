import { OccupationalTherapyModule } from './occupational-therapy.module';

describe('OccupationalTherapyModule', () => {
  let occupationalTherapyModule: OccupationalTherapyModule;

  beforeEach(() => {
    occupationalTherapyModule = new OccupationalTherapyModule();
  });

  it('should create an instance', () => {
    expect(occupationalTherapyModule).toBeTruthy();
  });
});
