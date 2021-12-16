import codewars_test as test


def descending_order(num: int) -> int:
    return int("".join(sorted(str(num), reverse=True)))


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(descending_order(0), 0)
        test.assert_equals(descending_order(15), 51)
        test.assert_equals(descending_order(123456789), 987654321)


print(descending_order(123))
