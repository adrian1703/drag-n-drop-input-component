import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import './index.css'
import {TreeContainer} from "./tree/TreeContainer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div
            style={{
                width: "80vw",
                height: "90vh",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                background: "#fafaff"
            }}
        >
            <div style={{background: "#e0e0e0", width: "100%", height: "100%"}}>
                <TreeContainer/>
            </div>
            <div style={{background: "#c0c0ff", width: "100%", height: "100%"}}>
                <TreeContainer/>
            </div>
            <div style={{background: "#ffe0e0", width: "100%", height: "100%"}}>
                <TreeContainer/>
            </div>
            <div style={{background: "#e0ffe0", width: "100%", height: "100%"}}>
                <TreeContainer/>
            </div>
        </div>

    </StrictMode>,
)
