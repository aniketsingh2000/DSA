// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinaryTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(value) {
//       this.root = this._insertRecursive(this.root, value);
//     }
  
//     _insertRecursive(node, value) {
//       if (node === null) {
//         return new TreeNode(value);
//       }
  
//       if (value < node.value) {
//         node.left = this._insertRecursive(node.left, value);
//       } else {
//         node.right = this._insertRecursive(node.right, value);
//       }
  
//       return node;
//     }
  
//     // In-order traversal (prints values in ascending order for a BST)
//     inOrderTraversal(node = this.root) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left);
//         console.log(node.value);
//         this.inOrderTraversal(node.right);
//       }
//     }
//   }
  
//   // Example usage:
//   const binaryTree = new BinaryTree();
//   const values = [5, 3, 7, 2, 4, 6, 8];
  
//   values.forEach(value => binaryTree.insert(value));
  
//   console.log("In-order traversal:");
//   binaryTree.inOrderTraversal();
  




class Node {
    constructor(data){
        this.root  = data;
        this.left = null;
        this.right = null; 
    }
}


class BinaryTree{
    constructor(){
        this.root = null;
        this.result = {}
    }

    insert(data){
       const newNode =  new Node(data);
       if(!this.root){
         this.root = newNode
       }else{
        console.log(this.root.root,data, data < this.root.root)
          this.inserRecursive(this.root,data);
       }
    }
    
    inserRecursive(node,value){
     if(value < node.root){
         if(node.left === null){
           node.left = new Node(value);
         }else{
           this.inserRecursive(node.left,value);
         }
     }else{
           if(node.right === null){
           node.right = new Node(value);
         }else{
           this.inserRecursive(node.right,value);
         }
     }
    }
    
    
    print(){
     /*  console.log( this.root ) */
     console.log(JSON.stringify(this.root))
    //  this._printTree(this.root, 0);
    }
    
    _printTree(node, depth) {

    if (node !== null) {
       this.result[depth] =  node.root
/*       this._printTree(node.right, depth + 1);
      console.log(" ".repeat(depth * 4) + node.root);
      this._printTree(node.left, depth + 1); */
    }
  }
    

}


const binary = new BinaryTree();
const arr = [4,3,8,9,2,20,5,6];
arr.map(a => binary.insert(a) );
binary.print();

