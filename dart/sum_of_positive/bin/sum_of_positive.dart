import "package:test/test.dart";

void main() {
  group("fixed tests", () {
    test("Testing for [1, 2, 3, 4, 5]",
        () => expect(positiveSum([1, 2, 3, 4, 5]), equals(15)));
    test("Testing for [1, -2, 3, 4, 5]",
        () => expect(positiveSum([1, -2, 3, 4, 5]), equals(13)));
    test("Testing for []", () => expect(positiveSum([]), equals(0)));
    test("Testing for [-1, -2, -3, -4, -5]",
        () => expect(positiveSum([-1, -2, -3, -4, -5]), equals(0)));
    test("Testing for [-1, 2, 3, 4, -5]",
        () => expect(positiveSum([-1, 2, 3, 4, -5]), equals(9)));
  });
}

int positiveSum(List<int> arr) {
  return arr
      .where((element) => element > 0)
      .fold(0, (previousValue, element) => previousValue + element);
}
