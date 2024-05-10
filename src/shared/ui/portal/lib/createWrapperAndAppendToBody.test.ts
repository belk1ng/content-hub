import { createWrapperAndAppendToBody } from "./createWrapperAndAppendToBody";

describe("createWrapperAndAppendToBody", () => {
  test("Should create and append container to body", () => {
    const containerId = "test";

    expect(document.body.childNodes).toHaveLength(0);
    createWrapperAndAppendToBody(containerId);

    expect(document.body.childNodes).toHaveLength(1);
    expect(document.body.firstElementChild.id).toBe(containerId);

    document.body.firstElementChild.remove();
  });
});
