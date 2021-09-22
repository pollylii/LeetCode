/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let a = 0;
    for(const num of nums) {
        a  ^= num;
    }
    return a;
};
// @lc code=end

