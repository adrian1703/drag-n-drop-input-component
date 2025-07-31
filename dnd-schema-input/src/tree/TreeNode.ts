import log from "loglevel";

export class TreeNode {
    id: string;
    label: string;
    children: TreeNode[];

    constructor(id: string, label?: string) {
        this.id       = id;
        this.label    = label ? label : id;
        this.children = [];
    }

    addChild(child: TreeNode) {
        this.children.push(child);
    }

    static createBinaryTree(ids: string[]): TreeNode {
        if (ids.length < 1) {
            return new TreeNode("unnamed");
        }
        const result: TreeNode      = new TreeNode(ids[0]);
        const parents: TreeNode[]   = [result];
        const countChildren: number = 2;
        let index: number           = 0;

        while (index < ids.length) {
            log.debug("parents:", parents);
            const parent: TreeNode = parents.shift() ?? (() => {
                throw new Error("No parent node available!")
            })();
            log.debug("parent:", parent);
            for (let i = 0; i < countChildren; i++) {
                index++;
                if (!(index < ids.length)) {
                    log.debug("Exiting loop: index:", index, "ids:", ids.length);
                    break
                }
                const child: TreeNode = new TreeNode(ids[index]);
                log.debug("child:", child);
                parent.addChild(child);
                parents.push(child);
            }
        }
        return result;
    }
}