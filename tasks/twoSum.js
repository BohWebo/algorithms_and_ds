function bruteForce(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i,j];
            }
        }
    }

    return null;
}

function onePass(nums, target) {
    const obj = {};

    for (let i = 0; i <= nums.length; i++) {
       const complement = target - nums[i];

       if (obj.hasOwnProperty(complement)) {
           return [obj[complement], i];
       }

       obj[complement] = i;
    }
}


