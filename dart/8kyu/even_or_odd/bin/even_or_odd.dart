import "package:test/test.dart";

void main(List<String> arguments) {
  test('Basic tests', () {
    expect(evenOrOdd(2), equals('Even'));
    expect(evenOrOdd(1), equals('Odd'));
    expect(evenOrOdd(0), equals('Even'));
    expect(evenOrOdd(7), equals('Odd'));
    expect(evenOrOdd(-1), equals('Odd'));
  });
}

String evenOrOdd(int number) {
  return number % 2 == 0 ? 'Even' : 'Odd';
}
