import codewars_test as test


def bonus_time(salary: int, bonus: bool) -> str:
    return f"${salary*10}" if bonus else f"${salary}"


@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(bonus_time(10000, True), '$100000')
        test.assert_equals(bonus_time(25000, True), '$250000')
        test.assert_equals(bonus_time(10000, False), '$10000')
        test.assert_equals(bonus_time(60000, False), '$60000')
        test.assert_equals(bonus_time(2, True), '$20')
        test.assert_equals(bonus_time(78, False), '$78')
        test.assert_equals(bonus_time(67890, True), '$678900')
