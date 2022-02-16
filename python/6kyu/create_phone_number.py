from re import L
import codewars_test as test


# def create_phone_number(n: list[int]) -> str:
#     s = ''.join(str(x) for x in n)
#     return f"({s[:3]}) {s[3:6]}-{s[6:]}"


# * Clever
def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)


@test.describe("Create Phone Number")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(create_phone_number(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
        test.assert_equals(create_phone_number(
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
        test.assert_equals(create_phone_number(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
        test.assert_equals(create_phone_number(
            [0, 2, 3, 0, 5, 6, 0, 8, 9, 0]), "(023) 056-0890")
        test.assert_equals(create_phone_number(
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), "(000) 000-0000")
