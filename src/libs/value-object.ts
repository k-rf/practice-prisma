export abstract class ValueObject<
  T extends number | string | Date,
  U extends string
> {
  private _brand!: U;

  constructor(readonly value: T) {}

  equals(that: ValueObject<T, U>): boolean {
    return this.value.valueOf() === that.value.valueOf();
  }
}
