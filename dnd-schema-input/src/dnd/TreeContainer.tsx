import log from "loglevel";
import {TreeNode} from "./TreeNode.ts";
import {useEffect, useState} from "react";
import {TreeRendererComponent} from "./TreeRendererComponent.tsx";


export function TreeContainer() {

    const [rootNode, setRootNode] = useState<TreeNode>()
    const [count, setCount] = useState<number>(12)

    useEffect(() => {
        const props = Array.from({length: count}, (_, index) => (index + 1).toString())
        log.debug(props)
        const root: TreeNode = TreeNode.createBinaryTree(props);
        setRootNode(root)
    }, [count]);

    const handleButtonClick = (increment: boolean) => {
        if(increment){
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <>
            <h1>hello</h1>
            <button onClick={() => handleButtonClick(true)}>Increment </button>
            <button onClick={() => handleButtonClick(false)}>Decrement</button>
            {rootNode && <TreeRendererComponent node={rootNode}/>}
        </>
    )
}
