class TreeNode {
    constructor(key) {
        this.val = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = this._insertRecursive(this.root, key);
    }

    _insertRecursive(root, key) {
        if (root === null) {
            return new TreeNode(key);
        }

        if (key < root.val) {
            root.left = this._insertRecursive(root.left, key);
        } else {
            root.right = this._insertRecursive(root.right, key);
        }

        return root;
    }

    search(key) {
        return this._searchRecursive(this.root, key);
    }

    _searchRecursive(root, key) {
        if (root === null || root.val === key) {
            return root;
        }

        if (key < root.val) {
            return this._searchRecursive(root.left, key);
        }

        return this._searchRecursive(root.right, key);
    }

    inorderTraversal() {
        const result = [];
        this._inorderRecursive(this.root, result);
        return result;
    }

    _inorderRecursive(root, result) {
        if (root !== null) {
            this._inorderRecursive(root.left, result);
            result.push(root.val);
            this._inorderRecursive(root.right, result);
        }
    }

    preorderTraversal() {
        const result = [];
        this._preorderRecursive(this.root, result);
        return result;
    }

    _preorderRecursive(root, result) {
        if (root !== null) {
            result.push(root.val);
            this._preorderRecursive(root.left, result);
            this._preorderRecursive(root.right, result);
        }
    }

    postorderTraversal() {
        const result = [];
        this._postorderRecursive(this.root, result);
        return result;
    }

    _postorderRecursive(root, result) {
        if (root !== null) {
            this._postorderRecursive(root.left, result);
            this._postorderRecursive(root.right, result);
            result.push(root.val);
        }
    }
}

// Example usage:
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("Inorder traversal of the BST:", bst.inorderTraversal());
console.log("Preorder traversal of the BST:", bst.preorderTraversal());
console.log("Postorder traversal of the BST:", bst.postorderTraversal());


const keyToSearch = 5;
const result = bst.search(keyToSearch);
if (result !== null) {
    console.log(`${keyToSearch} is found in the BST.`);
} else {
    console.log(`${keyToSearch} is not found in the BST.`);
}
