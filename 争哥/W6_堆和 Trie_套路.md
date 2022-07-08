# 一. 堆

适合处理动态排序相关

## 堆的定义和存储

堆一定是完全二叉树

堆的每个节点大于等于每个子节点的值

大顶堆: 每个节点大于等于每个子节点

小顶堆: 每个节点小于等于没格子节点

堆是完全二叉树, 所以适合用数组来存储

root下标-1

i下标-2i-2i+1

## 堆的操作

### 插入数据

将新数据插到数组的末尾, 再执行自下而上的堆化操作

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231134510747.png" alt="image-20211231134510747" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231134533605.png" alt="image-20211231134533605" style="zoom:50%;" />

### 取堆顶元素

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231134716151.png" alt="image-20211231134716151" style="zoom:50%;" />

### 删堆顶元素

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231134949443.png" alt="image-20211231134949443" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231135032764.png" alt="image-20211231135032764" style="zoom:50%;" />

### 更新元素

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231150322539.png" alt="image-20211231150322539" style="zoom:50%;" />

# 二. 堆排序

两大步骤

1.建堆: 将数组的数据原地组织成一个堆

2.排序: 基于堆排序数据

### 建堆

1. 从前往后处理每个元素, 每个元素自下而上堆化(类似插入)(Onlogn)
2. 从后往前处理每个元素, 每个元素自上而下堆化(类似删除)(On)

这里以从小到大举例, 19 比 7 大, 和 7 换位置

这两种时间复杂度不用理解

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231154005353.png" alt="image-20211231154005353" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231154127829.png" alt="image-20211231154127829" style="zoom:50%;" />

### 排序

1. 将堆顶和最后一个元素交换, 最大元素就放到下标为 n 的位置, 堆大小-1
2. 交换之后的堆顶元素, 自上而下堆化, 重新构建成堆
3. 重复到堆只剩一个元素, 排序就完成

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231154442627.png" alt="image-20211231154442627" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231154459753.png" alt="image-20211231154459753" style="zoom:50%;" />

### 总结

是否原地排序算法: 是

是否稳定算法: 否 (排序过程中, 堆顶元素和最后一个元素交换会不稳定)

时间复杂度: Onlogn

空间复杂度: O1

# 三. 套路

## 例题一 优先级队列

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231155223134.png" alt="image-20211231155223134" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231155243998.png" alt="image-20211231155243998" style="zoom:50%;" />

## 例题二 Top K

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231155545540.png" alt="image-20211231155545540" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231155821812.png" alt="image-20211231155821812" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231155919576.png" alt="image-20211231155919576" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231155935960.png" alt="image-20211231155935960" style="zoom:50%;" />

## 例题三 中位数/百分位数

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231160116368.png" alt="image-20211231160116368" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231161732006.png" alt="image-20211231161732006" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231161815039.png" alt="image-20211231161815039" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231161929720.png" alt="image-20211231161929720" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231161957343.png" alt="image-20211231161957343" style="zoom:50%;" />

求百分位数

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20211231162405215.png" alt="image-20211231162405215" style="zoom:50%;" />

# 四. Trie 树

考的很少, 几乎不会有代码实现, 只是看有没有了解. 像滑动的字符串

分为单模式串匹配和多模式串匹配

单模式匹配:

==BF 算法, RK 算法==, BM 算法, KMP 算法(后两个不会考)

## 单模式串匹配

### BF 算法

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102171143845.png" alt="image-20220102171143845" style="zoom:50%;" />

### RK算法

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102202543960.png" alt="image-20220102202543960" style="zoom:50%;" />

通过前面字符串的哈希值推断后面字符串的哈希值

要求:1.无冲突 2.前一个哈希值 能推出后一个哈希值

不是特别实用, 要求比较高

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102202903550.png" alt="image-20220102202903550" style="zoom:50%;" />

## 多模式串匹配

看用户有没有敏感词, ngnix

==Trie 树==和 AC 自动机

主要用 AC 自动机, 因为性能更好

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102203122419.png" alt="image-20220102203122419" style="zoom:50%;" />

### Trie 树

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102203318095.png" alt="image-20220102203318095" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102203525134.png" alt="image-20220102203525134" style="zoom:50%;" />

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102203605100.png" alt="image-20220102203605100" style="zoom:50%;" />

#### Trie 字符串查找

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102203925883.png" alt="image-20220102203925883" style="zoom:50%;" />

时间复杂度 Oh

#### Trie 多模式串匹配

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102204335707.png" alt="image-20220102204335707" style="zoom:50%;" />

#### True 前缀匹配

<img src="https://wuzhi-img.oss-cn-shanghai.aliyuncs.com/img/image-20220102204313959.png" alt="image-20220102204313959" style="zoom:50%;" />