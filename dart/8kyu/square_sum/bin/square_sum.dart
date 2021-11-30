import "package:test/test.dart";

void main() {
  test('Basic tests', () {
    expect(squareSum([1, 2]), equals(5));
    expect(squareSum([0, 3, 4, 5]), equals(50));
    expect(squareSum([]), equals(0));
    expect(squareSum([-1, -2]), equals(5));
    expect(squareSum([-1, 0, 1]), equals(2));
  });
}

int squareSum(List<int> numbers) {
  return numbers.fold(
      0, (previousValue, element) => previousValue + element * element);
}
