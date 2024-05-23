import { AsyncThunkAction } from "@reduxjs/toolkit";

type AsyncActionCreator<Returned, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export class TestThunk<Returned, Arg, RejectedValue> {
  public dispatch: jest.Mock;
  public getState: jest.Mock;

  constructor(public thunk: AsyncActionCreator<Returned, Arg, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  public async call(arg: Arg) {
    const action = this.thunk(arg);
    return action(this.dispatch, this.getState, undefined);
  }
}
