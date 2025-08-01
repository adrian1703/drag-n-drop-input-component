import log from "loglevel";
import {TreeNode} from "./TreeNode.ts";
import {useEffect, useState} from "react";
import {TreeRendererListComponent} from "./TreeRendererListComponent.tsx";
import styles from "./TreeContainer.module.css";
import {TreeRendererD3Component} from "./TreeRendererD3Component.tsx";

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
            <button onClick={() => handleButtonClick(true)}>Increment</button>
            <button onClick={() => handleButtonClick(false)}>Decrement</button>
            <div className={styles.treeContainer}>
                {rootNode && <TreeRendererListComponent node={rootNode}/>}
            </div>
            {rootNode && <TreeRendererD3Component node={rootNode}/>}
        </>
    )
}
