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
        <div className={"treeContainer"} style={{width: '100%', height: '100%', minHeight: 400, minWidth: 400}}>
            <Tree
                data={treeNodeToNodeDatum(props.node)}
                pathFunc="step"
                nodeSize={{x: 60, y: 60}}
                separation={{siblings: 0.5, nonSiblings: 0.8}}
                zoomable={false}
                collapsible={false}
                draggable={true}
                // translate={{x: 200, y: 200}}
            />
        </div>
    );
}

type Props = {
    node: TreeNode;
}
