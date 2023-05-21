
function combinationSum(candidates, target) {
    let result = [];
    let path = [];
  
    function backtrack(start, target) {
      if (target < 0) {
        return;
      }
      if (target === 0) {
        result.push([...path]);
        return;
      }
      for (let i = start; i < candidates.length; i++) {
        path.push(candidates[i]);
        backtrack(i, target - candidates[i]);
        path.pop();
      }
    }
  
    backtrack(0, target);
    return result;
  }

console.log( combinationSum( [1,2,3,4], 5) );
