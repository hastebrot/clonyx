import { createHashRouter } from "react-router-dom";
import { OnyxButtonStory } from "./onyx-button/button.story";

export const router = createHashRouter([
  {
    path: "/",
    element: <OnyxButtonStory />,
  },
  {
    path: "/story/button",
    element: <OnyxButtonStory />,
  },
]);
