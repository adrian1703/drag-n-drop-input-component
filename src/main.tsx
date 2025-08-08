import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import './index.css'
import {TreeContainer} from "./tree/TreeContainer.tsx";
import {TreeRendererD3Component} from "./tree/TreeRendererD3Component.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div
            style={{
                width              : "80vw",
                height             : "90vh",
                display            : "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows   : "1fr 1fr",
                gap                : "1rem",
                justifyContent     : "center",
                alignItems         : "center",
                margin             : "auto",
                background         : "#fafaff"
            }}
        >
            <div style={{background: "#ac4141", width: "100%", height: "100%"}}>
                <TreeContainer RendererComponent={TreeRendererD3Component}/>
            </div>
            <div style={{background: "#2b2bbd", width: "100%", height: "100%"}}>
                <TreeContainer RendererComponent={TreeRendererD3Component}/>
            </div>
            <div style={{background: "#22b62b", width: "100%", height: "100%"}}>
                <TreeContainer RendererComponent={TreeRendererD3Component}/>
            </div>
            <div style={{background: "#c5b529", width: "100%", height: "100%"}}>
                <TreeContainer RendererComponent={TreeRendererD3Component}/>
            </div>
        </div>

    </StrictMode>,
)
