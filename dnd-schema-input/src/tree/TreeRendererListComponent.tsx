import type {TreeNode} from "./TreeNode.ts";

type Props = {
    node: TreeNode;
}

function renderChildren(node: TreeNode) {
    return (
        <>
            {node.children.map(child => (
                <ul>
                    <TreeRendererListComponent key={child.id} node={child}/>
                </ul>
            ))}
        </>
    )
}

export function TreeRendererListComponent(props: Props){
    return (
        <li>
            {props.node.label}
            {renderChildren(props.node)}
        </li>
    )
}