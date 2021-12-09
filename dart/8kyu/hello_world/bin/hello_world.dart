import "package:test/test.dart";

// You should return hello world!
void main() {
  test('Return the correct string', () {
    expect(greet(), equals("hello world!"));
  });
}

String greet() {
  return "hello world!";
}
