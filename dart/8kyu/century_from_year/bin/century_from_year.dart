import "package:test/test.dart";

void main() {
  group("Basic tests", () {
    test("Testing for 1705", () {
      expect(century(1705), equals(18));
    });
    test("Testing for 1900", () {
      expect(century(1900), equals(19));
    });
    test("Testing for 1601", () {
      expect(century(1601), equals(17));
    });
    test("Testing for 2000", () {
      expect(century(2000), equals(20));
    });
    test("Testing for 89", () {
      expect(century(89), equals(1));
    });
  });
}

int century(year) {
  return (year + 99) ~/ 100;
}
