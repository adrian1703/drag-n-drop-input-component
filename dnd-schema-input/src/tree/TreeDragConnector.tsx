import React, {useRef, useState} from "react";
import {TreeContainer} from "./TreeContainer.tsx";

type MousePos = {x: number, y: number};

export function TreeDragConnector() {
  const [dragging, setDragging] = useState<null | {from: unknown, fromPos: MousePos}>(null);
  const [lines, setLines] = useState<Array<{from: unknown, to: unknown, fromPos: MousePos, toPos: MousePos}>>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleStart = (node: unknown, pos: MousePos) => {
    setDragging({from: node, fromPos: pos});
  }
  const handleMove = (e: React.MouseEvent) => {
    if (dragging) {
      // Optionally update dragging endpoint position (for live line)
      setDragging({...dragging, mousePos: {x: e.clientX, y: e.clientY}});
    }
  }
  const handleEnd = (node: unknown, pos: MousePos) => {
    if (dragging) {
      setLines([...lines, {from: dragging.from, to: node, fromPos: dragging.fromPos, toPos: pos}]);
      setDragging(null);
    }
  }

  return (
    <div style={{width: "100%", height: "100%", position: "relative"}} onMouseMove={handleMove}>
      <svg ref={svgRef} style={{
        position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none",
        zIndex: 2
      }}>
        {/* Render existing lines */}
        {lines.map(({fromPos, toPos}, i) =>
          <line key={i} x1={fromPos.x} y1={fromPos.y} x2={toPos.x} y2={toPos.y}
                stroke="red" strokeWidth={2}/>)}
        {/* Render current drag line */}
        {dragging && dragging.mousePos &&
          <line x1={dragging.fromPos.x} y1={dragging.fromPos.y}
                x2={dragging.mousePos.x} y2={dragging.mousePos.y}
                stroke="blue" strokeWidth={2}/>}
      </svg>
      <div style={{display: "flex", height: "100%"}}>
        <TreeContainer
          onNodeMouseDown={handleStart}
          treeId="left"
        />
        <div style={{width: 80}}/>
        <TreeContainer
          onNodeMouseUp={handleEnd}
          treeId="right"
        />
      </div>
    </div>
  );
}
