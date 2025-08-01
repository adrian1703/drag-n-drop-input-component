import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import './index.css'
import {TreeContainer} from "./tree/TreeContainer.tsx";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <TreeContainer/>
    </StrictMode>,
)
