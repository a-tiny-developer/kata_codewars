import "package:test/test.dart";

String countSheep(int numb) {
  var result = '';
  for (var i = 1; i <= numb; i++) {
    result += '$i sheep...';
  }
  return result;
}

// * Clever
// String countSheep(numb) =>
//     List.generate(numb, (int i) => "${i + 1} sheep...").join();

void main() {
  group("Fixed tests", () {
    test("Testing for 0", () => expect(countSheep(0), equals("")));
    test("Testing for 1", () => expect(countSheep(1), equals("1 sheep...")));
    test("Testing for 2",
        () => expect(countSheep(2), equals("1 sheep...2 sheep...")));
    test("Testing for 3",
        () => expect(countSheep(3), equals("1 sheep...2 sheep...3 sheep...")));
  });
}
