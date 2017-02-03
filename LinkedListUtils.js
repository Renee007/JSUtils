function Node() {
	this.text = '';
	this.next = null;

}
var LinkedListUtils = new Object();
LinkedListUtils.buildByArray = function(arr) {
	
	var head;
	var tail;
	for (var i = 0; i < arr.length; i++) {
		var node = new Node();
		node.text = arr[i];
		node.next= null;
		
		if (i == 0) {
			head = node;
			tail = node;
			continue;
		}

		tail.next = node; //连接原链表结尾和新增加的节点
		tail = tail.next;   //更新tail为最新的链表结尾节点
	}
	return head;
}

LinkedListUtils.reverseLink=function(node){
	
}