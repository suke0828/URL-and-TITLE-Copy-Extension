import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import Popup from './Popup/popup';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Popup />
  </StrictMode>
);
