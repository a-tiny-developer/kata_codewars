import "package:test/test.dart";

void main() {
  test('reversed world', () {
    expect(solution('world'), equals('dlrow'));
  });

  test('hello reversed', () {
    expect(solution('hello'), equals('olleh'));
  });

  test('reversed ', () {
    expect(solution(''), equals(''));
  });

  test('reversed h', () {
    expect(solution('h'), equals('h'));
  });
}

String solution(String str) {
  return String.fromCharCodes(str.runes.toList().reversed);
}
