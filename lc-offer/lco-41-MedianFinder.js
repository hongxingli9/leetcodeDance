/**
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例 1：

输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
示例 2：

输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
 

限制：

最多会对 addNum、findMedian 进行 50000 次调用。
注意：本题与主站 295 题相同：https://leetcode-cn.com/problems/find-median-from-data-stream/

参考： https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/tu-xie-zheng-li-bao-li-fa-er-fen-cha-zhao-shou-don/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * initialize your data structure here.
 */
const defaultCmp = (x, y) => x > y;

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
  constructor (cmp = defaultCmp) {
    this.container = [];
    this.cmp = cmp;
  }

  insert (num) {
    const {container, cmp} = this;
    container.push(num);
    let index = container.length - 1;
    while (index) {
      let parent = Math.floor((index - 1) / 2);
      if (!cmp(container[index], container[parent])) {
        return;
      }
      swap(container, index, parent);
      index = parent;
    }
  }

  extract () {
    const {container, cmp} = this;
    if (container.length === 0) return null;
    swap(container, 0, container.length - 1);
    const res = container.pop();
    let index = 0;
    let exchange = index * 2 + 1;
    while (exchange < container.length) {
      let right = index * 2 + 2;
      if (right < container.length && cmp(container[right], container[exchange])) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, index, exchange);
      index = exchange;
      exchange = index * 2 + 1;
    }
    return res;
  }

  top() {
    return this.container.length > 0 ? this.container[0] : null;
  }
}

var MedianFinder = function() {
  this.maxHeap = new Heap();
  this.minHeap = new Heap((x, y) => x < y);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.maxHeap.insert(num);
  // 插入的该num后，得到大顶堆中的最大值，放入小顶堆中，放入的值有可能是成为最小值，也有可能不会。
  this.minHeap.insert(this.maxHeap.top());
  this.maxHeap.extract()

  if (this.maxHeap.container.length < this.minHeap.container.length) {
    // 把小顶堆中的最小值，放入到大顶堆中，一定会变成大顶堆的最大值。
    this.maxHeap.insert(this.minHeap.top());
    this.minHeap.extract()
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  return this.maxHeap.container.length > this.minHeap.container.length
    ? this.maxHeap.top()
    : (this.maxHeap.top() + this.minHeap.top()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
