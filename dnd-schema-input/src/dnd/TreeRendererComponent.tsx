import type {TreeNode} from "./TreeNode.ts";

type Props = {
    node: TreeNode;
}

function renderChildren(node: TreeNode) {
    return (
        <>
            {node.children.map(child => (
                <ul>
                    <TreeRendererComponent key={child.id} node={child}/>
                </ul>
            ))}
        </>
    )
}

export function TreeRendererComponent(props: Props){
    return (
        <li>
            {props.node.label}
            {renderChildren(props.node)}
        </li>
    )
}