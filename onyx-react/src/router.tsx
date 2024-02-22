import { createHashRouter } from "react-router-dom";
import { OnyxButtonMatrix } from "./onyx-button/button.stories";
import { OnyxCheckboxMatrix } from "./onyx-checkbox/checkbox.stories";
import { OnyxRadioButtonMatrix } from "./onyx-radiobutton/radiobutton.stories";

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
  {
    path: "/stories/radiobutton-matrix",
    element: <OnyxRadioButtonMatrix />,
  },
]);
