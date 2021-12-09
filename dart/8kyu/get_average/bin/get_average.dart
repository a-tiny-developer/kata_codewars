import "package:test/test.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for [2, 2, 2, 2]",
        () => expect(getAverage([2, 2, 2, 2]), equals(2)));
    test("Testing for [1, 2, 3, 4, 5]",
        () => expect(getAverage([1, 2, 3, 4, 5]), equals(3)));
    test("Testing for [1, 1, 1, 1, 1, 1, 1, 2]",
        () => expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), equals(1)));
  });
}

int getAverage(List<int> arr) {
  return arr.reduce((value, element) => value + element) ~/ arr.length;
}
