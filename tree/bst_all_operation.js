class Node {

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
        let node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            let tree = this.root;
            while (true) {
                if (value < tree.value) {
                    if (!tree.left) {
                        tree.left = node;
                        return this;
                    }
                    tree = tree.left;
                } else {
                    if (!tree.right) {
                        tree.right = node;
                        return this;
                    }
                    tree = tree.right;
                }
            }
        }
    }

    find(value) {
        let tree = this.root;
        while (tree) {
            if (value < tree.value) {
                tree = tree.left;
            } else if (value > tree.value) {
                tree = tree.right;
            } else if (value === tree.value) {
                return tree;
            }
        }
    }

    remove(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {

        if (!node) return null;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value)
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value)
        } else {
            if (!node.left) {
                return node.right
            } else if (!node.right) {
                return node.left;
            }

            node.value = this.getMin(node.right);
            node.right = this._deleteNode(node.right, node.value)
        }

        return node;
    }

    getMin(node) {
        let min = node.value;
        while (node.left) {
            min = node.left.value;
            node = node.left
        }
        return min;
    }

    inOrderTravers() {
        let result = [];
        result = this._inOrder(this.root, result);
        return result;
    }

    _inOrder(node, result) {
        if (node) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
        return result
    }

    preOrderTraverse() {
        let result = [];
        result = this._preOrder(this.root, result);
        return result;
    }

    _preOrder(node, result) {
        if (node) {
            result.push(node.value);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
        return result;
    }

    postOrderTraverse() {
        let result = [];
        result = this._postOrder(this.root, result);
        return result;
    }

    _postOrder(node, result) {
        if (node) {
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }


    bfs() {
        let queue = []
        let result = [];

        if (!this.root) return [];

        queue.push(this.root);

        while (queue.length > 0) {
            let current = queue.shift();
            result.push(current.value);

            if (current.left) queue.push(current.left);

            if (current.right) queue.push(current.right);

        }

        return result;
    }


    preOrderTraverseIterative() {
        if (!this.root) return [];

        let result = [];
        let stack = [this.root];

        while (stack.length > 0) {
            let node = stack.pop();
            result.push(node.value);

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }

        return result;
    }

    inOrderTraverseIterative() {
        let result = [];
        let stack = [];
        let current = this.root;

        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.value);
            current = current.right;
        }

        return result;

    }


    postOrderTraverseIterative() {

        if (!this.root) return [];
        let result = [];
        let stack = [this.root];
        let visit = [false];

        while (stack.length > 0) {
            let node = stack.pop();
            let visited = visit.pop();
            if (node) {
                if (visited) {
                    result.push(node.value);
                } else {
                    stack.push(node);
                    visit.push(true);
                    stack.push(node.right);
                    visit.push(false);
                    stack.push(node.left);
                    visit.push(false);
                }
            }
        }

        return result
    }


    pathSum(targetSum) {

        let result = []
        let current = []
        let node = this.root;
        let currentSum = 0;

        function backTrack(node, current, currentSum) {

            if (!node) return;

            current.push(node.value);
            currentSum += node.value;

            if (!node.left && !node.right) {
                if (currentSum === targetSum) {
                    result.push([...current])
                }
            } else {
                backTrack(node.left, current, currentSum);
                backTrack(node.right, current, currentSum);
            }

            current.pop();
        }

        backTrack(node, current, currentSum);
        return result
    }


    levelOrderTraversal() {
        let queue = []
        let result = [];

        if (!this.root) return visited;

        queue.push(this.root);

        while (queue.length > 0) {

            const levelSize = queue.length;
            const levelValues = [];

            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift();
                levelValues.push(current.value);
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
            result.push(levelValues);

        }

        return result;
    }


    rightView() {
        if (!this.root) return [];

        let queue = [this.root];
        let result = [];

        while (queue.length > 0) {
            let levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift();
                if (i === levelSize - 1) {
                    result.push(current.value);
                }


                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right)
            }
        }

        return result;

    }


    leftView() {
        if (!this.root) return [];

        let queue = [this.root];
        let result = [];

        while (queue.length > 0) {
            let levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift();

                if (i === 0) {
                    result.push(current.value);
                }

                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }

        return result;
    }



    levelOrderBottom() {
        let queue = []
        let result = [];

        if (!this.root) return visited;

        queue.push(this.root);

        while (queue.length > 0) {

            const levelSize = queue.length;
            const levelValues = [];

            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift();
                levelValues.push(current.value);
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
            result.unshift(levelValues);

        }

        return result;
    }


    verticalOrder() {
        if (!this.root) return [];

        let columnTable = new Map();
        let queue = [{ node: this.root, row: 0, col: 0 }];

        while (queue.length > 0) {
            let { node, row, col } = queue.shift();

            if (!columnTable.has(col)) {
                columnTable.set(col, []);
            }

            columnTable.get(col).push({ row, val: node.value });

            if (node.left) queue.push({ node: node.left, row: row + 1, col: col - 1 });
            if (node.right) queue.push({ node: node.right, row: row + 1, col: col + 1 });
        }

        const sortedColumns = Array.from(columnTable.keys()).sort((a, b) => a - b);

        const result = sortedColumns.map(col => {
            return columnTable.get(col).sort((a, b) => a.row - b.row).map(item => item.val);
        });

        return result;
    }


    sumNumbers() {
        function dfs(node, currentNumber) {
            if (!node) return 0;
            currentNumber = currentNumber * 10 + node.value;

            if (!node.left && !node.right) {
                return currentNumber;
            }
            const leftSum = dfs(node.left, currentNumber);
            const rightSum = dfs(node.right, currentNumber);

            return leftSum + rightSum;
        }

        return dfs(this.root, 0);
    }



    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        const leftHeight = this.maxDepth(root.left);
        const rightHeight = this.maxDepth(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    maxDiameter() {
        if (this.root === null) {
            return 0;
        }

        let maxDiameter = 0;
        function dfs(root) {
            if (root === null) {
                return -1;
            }
            let leftHeight = dfs(root.left);
            let rightHeight = dfs(root.right);
            let diameter = leftHeight + rightHeight + 2;
            maxDiameter = Math.max(maxDiameter, diameter);
            return Math.max(leftHeight, rightHeight) + 1;
        }

        dfs(this.root)

        return maxDiameter;
    }


    checkValidBSTtree() {
       return this._checkValidTree(this.root, -Infinity, Infinity);
    }

    _checkValidTree(node, min, max) {
        if (node === null) return true;

        let value = node.value;

        if (value <= min || value >= max) return false;

        const leftBST = this._checkValidTree(node.left, min, value);
        const rightBst = this._checkValidTree(node.right, value, max);

        return leftBST && rightBst;
    }





}

const bst = new BinarySearchTree();
// bst.insert(20);
// bst.insert(6);
// bst.insert(35);
// bst.insert(3);
// bst.insert(8);
// bst.insert(27);
// bst.insert(55);
// bst.insert(1);
// bst.insert(3);
// bst.insert(25);
// bst.insert(29);
// bst.insert(60);
bst.insert(8);
bst.insert(3);
bst.insert(21);
bst.insert(4);
bst.insert(6);
bst.insert(7);
bst.insert(5);
bst.insert(9);
bst.insert(10);
// bst.insert(6);
// bst.insert(3);
bst.insert(18);
bst.insert(2);
bst.insert(20);
bst.insert(16);




// const node = bst.find(27);
// bst.remove(60);
// bst.remove(20);
// bst.remove(35);
// console.log(JSON.stringify(bst.root));

// console.log("In-order")
// console.log(bst.inOrderTravers())

// console.log("In-order iterative");
// console.log(bst.inOrderTraverseIterative());

// console.log("Pre-order")
// console.log(bst.preOrderTraverse())

// console.log("Pre-order iterative");
// console.log(bst.preOrderTraverseIterative());

// console.log("Post-order")
// console.log(bst.postOrderTraverse())

// console.log("Post-order iterative");
// console.log(bst.postOrderTraverseIterative());

// console.log("BFS")
// console.log(bst.bfs());


// console.log("levelordertravers");
// console.log(bst.levelOrderTraversal())


// console.log(bst.pathSum(68));

// console.log("right side level traersal");
// console.log(bst.rightView());

// console.log("left`' side level traersal");
// console.log(bst.leftView());


// console.log("bottom level traversal");
// console.log(bst.levelOrderBottom());

// console.log("vertical level traversal");
// console.log(bst.verticalOrder())

// console.log("sum of three ");
// console.log(bst.sumNumbers());

// console.log("max dimater");
// console.log(bst.maxDiameter())


console.log("valid BST tree check");
console.log(bst.checkValidBSTtree());

// BFS - DFS

// [40, 30, 50, 25, 35, 45, 60];
// // row -- every column
// BFS = [20, 17, 25, 13,18,22,33,10,14,30,45]

// DFS
// //   left , current, right
// In-order = [10, 13, 14, 17, 18, 20, 22, 25, 30, 33, 45];

// // current , left, right
// Pre-order = []

// // left, right, current 
// post-order = []
