import {TreeNode} from "./TreeNode.ts";

function Test() {
    let root: TreeNode;
    root = TreeNode.createBinaryTree(
        Array.from({length: 13}, (_, index) => (index + 1).toString())
    );

    return (
        <>
            <h1>hello</h1>
        </>
    )
}
export default Test