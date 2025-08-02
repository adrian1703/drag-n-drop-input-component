import type {TreeNode} from "./TreeNode.ts";
import Tree from "react-d3-tree";

type NodeDatum = {
    name: string;
    treeNode: TreeNode;
    children?: NodeDatum[];
};

//adapter
function treeNodeToNodeDatum(node: TreeNode): NodeDatum {
    return {
        name    : node.label,
        treeNode: node,
        children: node.children.length
                  ? node.children.map(child => treeNodeToNodeDatum(child))
                  : undefined
    };
}

export function TreeRendererD3Component(props: Props) {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Tree
                data={treeNodeToNodeDatum(props.node)}
                pathFunc="step"
                nodeSize={{x: 60, y: 60}}
                separation={{siblings: 1, nonSiblings: 1.2}}
                zoomable={false}
                collapsible={false}
                draggable={false}
                translate={{x: 200, y: 400}}
            />
        </div>
    );
}

type Props = {
    node: TreeNode;
}
