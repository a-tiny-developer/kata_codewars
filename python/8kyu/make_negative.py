import codewars_test as test


def make_negative(number: int) -> int:
    return number if number < 0 else -number


@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(make_negative(42), -42)
        test.assert_equals(make_negative(-9), -9)
        test.assert_equals(make_negative(0), 0)
