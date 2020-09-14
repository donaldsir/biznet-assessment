let print_all_sum_rec = function (target, current_min, result, output) {
  if (current_min == 0) {
    output.push(result.slice());
  }

  for (let i = target; i > 0; i--) {
    let temp_min = current_min - i;
    if (temp_min >= 0) {
      result.push(i);

      print_all_sum_rec(i, temp_min, result, output);
      result.pop();
    }
  }
};

let print_all_sum = function (target) {
  let output = [];
  let result = [];
  print_all_sum_rec(target, target, result, output);
  return output;
};

let n = 4;
let result = print_all_sum(n);
console.log(result);
