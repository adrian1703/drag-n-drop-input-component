import { TreeNode } from './TreeNode';

describe('TreeNode', () => {
    it('creates a TreeNode with the given title', () => {
        const node = new TreeNode('root');
        expect(node.title).toBe('root');
        expect(node.children).toEqual([]);
    });

    it('adds children correctly', () => {
        const parent = new TreeNode('parent');
        const child = new TreeNode('child');
        parent.addChild(child);
        expect(parent.children).toContain(child);
    });

    it('creates a binary tree from titles', () => {
        const titles = ['A', 'B', 'C', 'D', 'E'];
        const root = TreeNode.createBinaryTree(titles);

        expect(root.title).toBe('A');
        expect(root.children.length).toBeGreaterThan(0);
        // Check first level children
        const [b, c] = root.children;
        expect(b.title).toBe('B');
        expect(c.title).toBe('C');
        // Check second level
        expect(b.children[0].title).toBe('D');
        expect(c.children[0].title).toBe('E');
    });

    it('returns "unnamed" for empty input', () => {
        const root = TreeNode.createBinaryTree([]);
        expect(root.title).toBe('unnamed');
        expect(root.children.length).toBe(0);
    });
});
