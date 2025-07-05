//---------------------------------------------

// Js own pracice 01

//  https://leetcode.com/problems/longest-harmonious-subsequence/description/?envType=daily-question&envId=2025-06-30

// let nums = [-1, 0, -1, 0, -1, 0, -1];
let nums = [1,3,2,2,5,2,3,7]

// var findLHS = function (nums) {
//   let result = [];
//   const set = new Set();
//   for (i of nums) {
//     console.log(i);
//     let no = i;
//     if (set.has(i) || !nums.includes(no + 1)) continue;
//     let temp = [];
//     nums.forEach((element) => {
//       if (element == no || element == no + 1) {
//         console.log(element);
//         temp.push(element);
//       }
//     });
//     console.log(temp);

//     set.add(no);
//     if (temp.length > result.length) result = temp;
//   }
//   console.log(result, " length : ", result.length);
//   return result.length;
// };

var findLHS = function (nums) {
  let result = [];
  const set = new Set();
  for (i of nums) {
    let no = i;
    if (set.has(i) || !nums.includes(no + 1)) continue;
    let temp = nums.filter((element) => {
      return element == no || element == no + 1;
    });
    set.add(no);
    if (temp.length > result.length) result = temp;
  }
  console.log(result, " length : ", result.length);
  return result.length;
};

console.log(findLHS(nums));

// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
  if (this.length < 1) return -1;
  return this[this.length - 1];
};

console.log(nums.last());

// https://leetcode.com/problems/sleep/

function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}

console.log(
  sleep(5000).then(() => {
    console.log("done");
  })
);

// https://leetcode.com/problems/array-reduce-transformation/

var reduce = function (nums, fn, init) {
  if (nums.length < 1) return init;
  for (i of nums) {
    init = fn(init, i);
  }
  return init;
};

// https://leetcode.com/problems/function-composition/submissions/1681447991/

var compose = function(functions) {
    let function1 = functions.reverse()
    return function(x) {
        let result = x;
        function1.forEach((fn)=>{
            result = fn(result)
        })
        return result
    }
};



