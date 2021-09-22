/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 * 
 * 遍历第一个字符串标记出现的字符数量，再遍历第二个减去出现的数量，直到遇到为 0 或者原哈希表就不存在的情况
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const val = map.get(s[i]);
        map.set(s[i], val === undefined ? 1 : val + 1);
    }
    for(let i = 0; i < t.length; i++) {
        const val = map.get(t[i]);
        if(val === 0 || val === undefined) {
            return t[i];
        } else {
            map.set(t[i], val - 1);
        }
    }
};

// @lc code=end

