function threeIntegersSum(arr) {
    let nums = arr.split(' ').map(el => Number(el));

    console.log(check(nums[0], nums[1], nums[2]) ||
                check(nums[0], nums[2], nums[1]) ||
                check(nums[1], nums[2], nums[0]))
}


function  check(num1, num2, sum) {
    if(num1 + num2 !== sum)
    {
        return false;
    }
    if(num1 > num2)
    {
        [num1, num2] = [num2, num1];
        return `${num1} + ${num2} = ${sum}`;
    }
}

threeIntegersSum('5 8 13');
