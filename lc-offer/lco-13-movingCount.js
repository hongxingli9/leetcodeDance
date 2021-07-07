/**
 * 
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20

*/

/**
 * DFS
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let visited = new Set()
  return dfs(0, 0, 0, 0);
  function dfs(x, y, sx, sy) {
    if (x >= m || y >= n || sx + sy > k || visited.has(`${x},${y}`)) return 0
    visited.add(`${x},${y}`)
    /**
     * Sx 表示x的数位和，Sx + 1为x + 1的数位和
     * 当（x + 1) % 10 = 0时，Sx + 1 = Sx - 8
     * 当 (x + 1) % 10 != 0时，Sx + 1 = Sx + 1
     */
    return 1
      + dfs(x + 1, y, (x + 1) % 10 ? sx + 1 : sx - 8, sy)
      + dfs(x, y + 1, sx, (y + 1) % 10 ? sy + 1 : sy - 8)
  }
}

// BFS
var movingCount = function (m, n, k) {
  let visited = new Set()
  let queue = []
  queue.push([0, 0, 0 ,0])
  while (queue.length) {
    let t = queue.shift()
    let x = t[0], y = t[1], sx = t[2], sy = t[3]
    if (x >= m || y >= n || k < sx + sy || visited.has(`${x},${y}`)) continue
    visited.add(`${x},${y}`)
    queue.push([x + 1, y, (x + 1) % 10 ? sx + 1 : sx - 8, sy])
    queue.push([x, y + 1, sx, (y + 1) % 10 ? sy + 1 : sy - 8])
  }
  return visited.size
}
