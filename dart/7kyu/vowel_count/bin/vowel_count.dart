// See https://pub.dartlang.org/packages/test
import "package:test/test.dart";

void main() {
  test("Sample tests", () {
    expect(getCount("bcdfghjklmnpqrstvwxy"), equals(0));
    expect(getCount("abcde"), equals(2));
    expect(getCount("aeiou"), equals(5));
    expect(getCount("abracadabra"), equals(5));
  });
}

int getCount(String inputStr) {
  return inputStr
      .toLowerCase()
      .runes
      .where((element) => 'aeiou'.contains(String.fromCharCode(element)))
      .fold(0, (previousValue, element) => previousValue + 1);
}

// int getCount(String str) => new RegExp('[aeiou]').allMatches(str).length;
