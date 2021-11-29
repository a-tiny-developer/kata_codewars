import "package:test/test.dart";

void main() {
  group("Basic tests", () {
    test("Testing for 1", () => expect(summation(1), equals(1)));
    test("Testing for 8", () => expect(summation(8), equals(36)));
    test("Testing for 22", () => expect(summation(22), equals(253)));
    test("Testing for 100", () => expect(summation(100), equals(5050)));
    test("Testing for 213", () => expect(summation(213), equals(22791)));
  });
}

int summation(int n) {
  return n * (n + 1) ~/ 2;
}
