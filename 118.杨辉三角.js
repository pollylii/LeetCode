/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 * 
 * 规律：通过观察, 得出如下规律

    1) 每一行设为m行, 每行上面的某个元素, 设为第n个元素

    2) 每一行上面, 第一个元素为1, 最后一个元素为1

    3) 第m行上面, 有m个元素

    4) 第m行上面的第n个元素的值, 等于第m-1行上面第n个元素与第m-1行上面第n-1个元素的值的和

        用排列组合公式表示为：C(m, n) = C(m-1, n) + C(m -1, n -1)
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const result = [];
    if (numRows <= 0) {
        return result;
    }
    for (let i = 0; i < numRows; i ++) {
        const subArr = [];
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                subArr.push(result[i-1][j-1] + result[i-1][j]);
            } else {
                subArr.push(1);
            }
        }
        result.push(subArr);
    }
    return result;
};
// @lc code=end

