import type { AsyncThunkAction } from "@reduxjs/toolkit";
import axios from "axios";

jest.mock("axios");

type AsyncActionCreator<Returned, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export class TestThunk<Returned, Arg, RejectedValue> {
  public dispatch = jest.fn();
  public getState = jest.fn();
  public http = jest.mocked(axios);

  constructor(public thunk: AsyncActionCreator<Returned, Arg, RejectedValue>) {}

  public async call(arg: Arg) {
    const action = this.thunk(arg);
    return action(this.dispatch, this.getState, { http: this.http });
  }
}
