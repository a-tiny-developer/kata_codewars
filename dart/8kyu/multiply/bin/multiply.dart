import "package:test/test.dart";

void main() {
  test('Multiply should return the product', () {
    expect(multiply(1, 1), equals(1));
  });
}

int multiply(int a, int b) {
  return a * b;
}
