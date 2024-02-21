import { createHashRouter } from "react-router-dom";
import { OnyxButtonMatrix } from "./onyx-button/button.stories";
import { OnyxCheckboxMatrix } from "./onyx-checkbox/checkbox.stories";

export const router = createHashRouter([
  {
    path: "/",
    element: <OnyxButtonMatrix />,
  },
  {
    path: "/stories/button-matrix",
    element: <OnyxButtonMatrix />,
  },
  {
    path: "/stories/checkbox-matrix",
    element: <OnyxCheckboxMatrix />,
  },
]);
