import "package:test/test.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for true",
        () => expect(booleanToString(true), equals("true")));
    test("Testing for false",
        () => expect(booleanToString(false), equals("false")));
  });
}

String booleanToString(bool b) {
  return b.toString();
}


