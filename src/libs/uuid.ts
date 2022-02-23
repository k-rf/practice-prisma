import { v4 as uuidV4 } from 'uuid';

import { ValueObject } from './value-object';

export class Uuid<T extends string> extends ValueObject<string, T> {
  constructor(value?: string) {
    super(value || uuidV4());
  }
}
