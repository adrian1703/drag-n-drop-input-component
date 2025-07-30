import log from "loglevel";

export class TreeNode {
    title: string;
    children: TreeNode[];

    constructor(title: string) {
        this.title    = title;
        this.children = [];
    }

    addChild(child: TreeNode) {
        this.children.push(child);
    }

    static createBinaryTree(titles: string[]): TreeNode {
        if (titles.length < 1) {
            return new TreeNode("unnamed");
        }
        const result: TreeNode      = new TreeNode(titles[0]);
        const parents: TreeNode[]   = [result];
        const countChildren: number = 2;
        let index: number           = 0;

        while (index < titles.length) {
            log.debug("parents:", parents);
            const parent: TreeNode = parents.shift() ?? (() => {
                throw new Error("No parent node available!")
            })();
            log.debug("parent:", parent);
            for (let i = 0; i < countChildren; i++) {
                index++;
                if (!(index < titles.length)) {
                    log.debug("Exiting loop: index:", index, "titles:", titles.length);
                    break
                }
                const child: TreeNode = new TreeNode(titles[index]);
                log.debug("child:", child);
                parent.addChild(child);
                parents.push(child);
            }
        }
        return result;
    }
}