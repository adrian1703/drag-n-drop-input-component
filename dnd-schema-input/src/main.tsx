import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import './index.css'
import {TreeContainer} from "./tree/TreeContainer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TreeContainer/>
    </StrictMode>,
)
