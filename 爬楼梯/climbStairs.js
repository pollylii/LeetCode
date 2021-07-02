/**
 * 
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    注意：给定 n 是一个正整数。
 */
// 递归
var climbStairs = function(n, fn2=0, fn1=1) {
    if(!n){
        return fn1
    }
    return climbStairs(n - 1, fn1, fn1+fn2)
};