import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import './index.css'
import {TreeContainer} from "./tree/TreeContainer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div style={{
            width         : "80vw",
            height        : "90vh",
            display       : "flex",
            justifyContent: "center",
            alignItems    : "center",
            margin: "auto"
        }}>
            <div style={{flex: 2, height: "100%", background: "#e0e0e0"}}>
                <TreeContainer/>
            </div>
            <div style={{flex: 1, maxWidth: "80px"}}/>
            <div style={{flex: 2, height: "100%", background: "#c0c0ff\n"}}>
                <TreeContainer/>
            </div>
        </div>
    </StrictMode>,
)
