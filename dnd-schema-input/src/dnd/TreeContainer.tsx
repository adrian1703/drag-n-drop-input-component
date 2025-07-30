import {TreeNode} from "./TreeNode.ts";

export function TreeContainer() {
    const props = Array.from({length: 13}, (_, index) => (index + 1).toString())
    console.log(props);
    const root: TreeNode = TreeNode.createBinaryTree(props);

    return (
        <>
            <h1>hello</h1>
            <div>
                {root.title}
            </div>
        </>
    )
}
