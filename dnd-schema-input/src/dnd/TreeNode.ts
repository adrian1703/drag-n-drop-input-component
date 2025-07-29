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
        let index: number           = 1;

        while (index < titles.length) {
            const parent: TreeNode = parents.shift() ?? (() => {
                throw new Error("No parent node available!")
            })();
            for (let i = 0; i++; i < countChildren) {
                index++;
                if (!(index < titles.length)) {
                    break
                }
                const child: TreeNode = new TreeNode(titles[index]);
                parent.addChild(child);
                parents.push(child);
            }
        }
        return result;
    }
}