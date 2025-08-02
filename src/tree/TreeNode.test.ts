import { TreeNode } from './TreeNode';
import log from "loglevel";
log.setLevel("debug");

describe('TreeNode', () => {
    it('creates a TreeNode with the given title', () => {
        const node = new TreeNode('root');
        expect(node.id).toBe('root');
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

        expect(root.id).toBe('A');
        expect(root.children.length).toBeGreaterThan(0);
        // Check first level children
        const [b, c] = root.children;
        expect(b.id).toBe('B');
        expect(c.id).toBe('C');
        // Check second level
        expect(b.children[0].id).toBe('D');
        expect(b.children[1].id).toBe('E');
    });

    it('returns "unnamed" for empty input', () => {
        const root = TreeNode.createBinaryTree([]);
        expect(root.id).toBe('unnamed');
        expect(root.children.length).toBe(0);
    });
});
