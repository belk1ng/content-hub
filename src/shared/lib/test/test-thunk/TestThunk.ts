import type { AsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";

jest.mock("axios");

type AsyncActionCreator<Returned, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export class TestThunk<Returned, Arg, RejectedValue> {
  public dispatch: jest.Mock;
  public getState: jest.Mock;
  public http = jest.mocked(axios);

  constructor(public thunk: AsyncActionCreator<Returned, Arg, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  public async call(arg: Arg) {
    const action = this.thunk(arg);
    return action(this.dispatch, this.getState, { http: this.http });
  }
}
