import type { FC } from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import type { PortalProps } from "./Portal.props";
import { createWrapperAndAppendToBody } from "../lib";

const ReactPortal: FC<PortalProps> = ({ children, containerId }) => {
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    let container = document.getElementById(containerId);
    let systemCreated = false;

    if (!container) {
      container = createWrapperAndAppendToBody(containerId);
      systemCreated = true;
    }

    setContainerElement(container);

    return () => {
      // Remove programmatically created container element on unmount
      if (systemCreated) {
        container.remove();
      }
    };
  }, [containerId]);

  // containerElement state will be null on the very first render.
  if (containerElement === null) return null;

  return createPortal(children, containerElement);
};

export default ReactPortal;
