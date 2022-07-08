# 堆

# 1. [23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)(困难) **（例题）**



## 难度 6

## 解法 

``` java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        Queue<ListNode> pq = new PriorityQueue<>((v1, v2) -> v1.val - v2.val);
        for (ListNode node: lists) {
            if (node != null) {
                pq.offer(node);
            }
        }
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        while (!pq.isEmpty()) {
            ListNode minNode = pq.poll();
            tail.next = minNode;
            tail = minNode;
            if (minNode.next != null) {
                pq.offer(minNode.next);
            }
        }
        return dummyHead.next;
    }
}
```

时间 O

空间 O

## 注意

完全看不懂

# 2. [347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)（中等） **（例题）**



## 难度 

## 解法 

``` java

```

时间 O

空间 O

## 注意



# 3. [295. 数据流的中位数](https://leetcode-cn.com/problems/find-median-from-data-stream/)（困难）**（例题）**



## 难度 

## 解法 

``` java

```

时间 O

空间 O

## 注意



# 4. [973. 最接近原点的 K 个点](https://leetcode-cn.com/problems/k-closest-points-to-origin/)（中等）



## 难度 

## 解法 

``` java

```

时间 O

空间 O

## 注意



# 5. [313. 超级丑数](https://leetcode-cn.com/problems/super-ugly-number/)（中等）



## 难度 

## 解法 

``` java

```

时间 O

空间 O

## 注意





# Trie

# 6. [208. 实现 Trie (前缀树)](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)（中等） 标准Trie树



## 难度 

## 解法 

``` java

```

时间 O

空间 O

## 注意



# 以下为选做题目：

# [面试题 17.17. 多次搜索](https://leetcode-cn.com/problems/multi-search-lcci/)（中等） 标准AC自动机，不过写AC自动机太复杂，Trie树搞定



# [212. 单词搜索 II](https://leetcode-cn.com/problems/word-search-ii/)（困难）