import formatCurrency from "../../scripts/utils/money";

console.log("test suit: format currency");
console.log("converts cents into dollars");
if (formatCurrency(2095) === `20.95`) {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("works with zero");
if (formatCurrency(0) === `0.00`) {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds up to nearest cents forward");
if (formatCurrency(2000.5) === `20.01`) {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds up to nearest cents backwards");
if (formatCurrency(2000.4) === `20.00`) {
  console.log("passed");
} else {
  console.log("failed");
}

// basic and edge test cases
// group of text -> text suite
// automated testing-> use code to test code
