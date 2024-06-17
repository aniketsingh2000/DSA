// A Binary Search Tree (BST) is a fundamental data structure used in computer science for organizing and managing data efficiently. Here's a breakdown of its uses, how it works, and why it's required:

// Uses:
// Searching: BSTs provide efficient searching capabilities. They enable you to quickly find elements within a sorted collection.
// Insertion and Deletion: Inserting and deleting elements in a BST can be done efficiently while maintaining the sorted order of the elements.
// Ordered Iteration: BSTs allow you to iterate through the elements in sorted order, which can be useful in various applications.
// Symbol Tables: BSTs are commonly used to implement symbol tables, where keys are associated with values and need to be efficiently searchable and iterable.

// How it Works:
// A BST is a binary tree data structure where each node has at most two children, referred to as the left child and the right child.
// The key property of a BST is that for every node, all elements in its left subtree are less than the node's value, and all elements in its right subtree are greater than the node's value.
// This property ensures that the elements are stored in a sorted order within the tree, making searching, insertion, and deletion operations efficient.

// Why it's Required:
// Efficiency: BSTs provide efficient searching, insertion, and deletion operations with an average time complexity of O(log n), where n is the number of elements in the tree. This efficiency is crucial for various applications where fast data manipulation is required.
// Ordered Storage: For applications where data needs to be stored and accessed in sorted order, BSTs offer a natural solution.
// Dynamic Operations: Unlike static data structures like arrays, BSTs allow dynamic insertion and deletion of elements while maintaining the sorted order, making them suitable for scenarios where the data set is frequently changing.


// code example 


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else {
            return this._searchNode(node.right, value);
        }
    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            // Node with only one child or no child
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }

            // Node with two children
            node.value = this._findMinValue(node.right);
            node.right = this._deleteNode(node.right, node.value);
        }

        return node;
    }

    _findMinValue(node) {
        let min = node.value;
        while (node.left) {
            min = node.left.value;
            node = node.left;
        }
        return min;
    }

    inorderTraversal() {
        const result = [];
        this._inorder(this.root, result);
        return result;
    }

    _inorder(node, result) {
        if (node) {
            this._inorder(node.left, result);
            result.push(node.value);
            this._inorder(node.right, result);
        }
    }

    preorderTraversal() {
        const result = [];
        this._preorder(this.root, result);
        return result;
    }

    _preorder(node, result) {
        if (node) {
            result.push(node.value);
            this._preorder(node.left, result);
            this._preorder(node.right, result);
        }
    }

    postorderTraversal() {
        const result = [];
        this._postorder(this.root, result);
        return result;
    }

    _postorder(node, result) {
        if (node) {
            this._postorder(node.left, result);
            this._postorder(node.right, result);
            result.push(node.value);
        }
    }

    // Utility method to get the height of the tree
    getHeight() {
        return this._getHeight(this.root);
    }

    _getHeight(node) {
        if (!node) return 0;
        const leftHeight = this._getHeight(node.left);
        const rightHeight = this._getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Utility method to check if the tree is balanced
    isBalanced() {
        return this._isBalanced(this.root);
    }

    _isBalanced(node) {
        if (!node) return true;
        const leftHeight = this._getHeight(node.left);
        const rightHeight = this._getHeight(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(9);

console.log("Inorder traversal:", bst.inorderTraversal());
console.log("Preorder traversal:", bst.preorderTraversal());
console.log("Postorder traversal:", bst.postorderTraversal());

console.log("Tree height:", bst.getHeight());
console.log("Is tree balanced?", bst.isBalanced());
