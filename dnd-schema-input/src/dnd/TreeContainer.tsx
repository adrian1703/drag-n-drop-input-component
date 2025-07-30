import {TreeNode} from "./TreeNode.ts";

export function TreeContainer() {
    let root: TreeNode;
    const props = Array.from({length: 13}, (_, index) => (index + 1).toString())
    console.log(props);
    root = TreeNode.createBinaryTree(props);

    return (
        <>
            <h1>hello</h1>
        </>
    )
}
