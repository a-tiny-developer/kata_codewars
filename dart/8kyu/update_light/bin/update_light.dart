import "package:test/test.dart";

String updateLight(String current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      throw "Invalid";
  }
}

void main() {
  group("Sample tests", () {
    test("current light is green", () {
      expect(updateLight("green"), equals("yellow"));
    });
    test("current light is yellow", () {
      expect(updateLight("yellow"), equals("red"));
    });
    test("current light is red", () {
      expect(updateLight("red"), equals("green"));
    });
  });
}
