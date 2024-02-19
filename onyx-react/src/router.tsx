import { createHashRouter } from "react-router-dom";
import { ButtonStory } from "./onyx-button/button.story";

export const router = createHashRouter([
  {
    path: "/",
    element: <ButtonStory />,
  },
  {
    path: "/story/button",
    element: <ButtonStory />,
  },
]);
