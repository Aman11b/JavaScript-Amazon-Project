import formatCurrency from "../../scripts/utils/money.js";
describe("Test suite: format currency", () => {
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("works with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("rounds up to nearest cents backwards", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
  it("rounds up to nearest cents forward", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
