// See https://pub.dartlang.org/packages/test
import "package:test/test.dart";

void main() {
  test("test", () {
    expect(getMiddle("test"), equals("es"));
  });
  test("testing", () {
    expect(getMiddle("testing"), equals("t"));
  });
  test("middle", () {
    expect(getMiddle("middle"), equals("dd"));
  });
  test("A", () {
    expect(getMiddle("A"), equals("A"));
  });
}

String getMiddle(String s) {
  return s.substring((s.length - 1) ~/ 2, s.length ~/ 2 + 1);
}
