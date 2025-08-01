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
        name: node.label,
        treeNode: node,
        children: node.children.length
                  ? node.children.map(child => treeNodeToNodeDatum(child))
                  : undefined
    };
}

type Props = {
    node: TreeNode;
}

export function TreeRendererD3Component(props: Props){
    return (
        <Tree
            data={treeNodeToNodeDatum(props.node)}
        />
    );
}