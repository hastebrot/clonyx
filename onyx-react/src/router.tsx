import { createHashRouter } from "react-router-dom";
import { OnyxButtonMatrix } from "./onyx-button/button.stories";

export const router = createHashRouter([
  {
    path: "/",
    element: <OnyxButtonMatrix />,
  },
  {
    path: "/stories/button-matrix",
    element: <OnyxButtonMatrix />,
  },
  },
]);
