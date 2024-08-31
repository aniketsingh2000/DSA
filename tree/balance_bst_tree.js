class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BalanceTree {
    constructor() {
        this.root = null;
    }

    insertBalaceTreeBySortedArr(nums, left = 0, right = nums.length - 1) {
        if (left > right) return null;

        let middle = Math.floor((left + right) / 2);
        let node = new Node(nums[middle]);
        node.left = this.insertBalaceTreeBySortedArr(nums, left, middle - 1);
        node.right = this.insertBalaceTreeBySortedArr(nums, middle + 1, right);
        this.root = node;
        return this.root;
    }

}


const bst = new BalanceTree();
console.log( bst.insertBalaceTreeBySortedArr([1, 2, 3, 4, 5]));