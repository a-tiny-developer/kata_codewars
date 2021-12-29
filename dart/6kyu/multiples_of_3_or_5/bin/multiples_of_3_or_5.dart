import "package:test/test.dart";

int solution(int n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    sum += i % 5 == 0 || i % 3 == 0 ? i : 0;
  }
  return sum;
}

void tester(int n, int exp) =>
    test("Testing for $n", () => expect(solution(n), equals(exp)));
void main() {
  group("Basic tests", () {
    tester(10, 23);
    tester(20, 78);
    tester(200, 9168);
  });
}
