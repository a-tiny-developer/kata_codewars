import codewars_test as test


def high_and_low(numbers: str) -> str:
    low = None
    high = None
    for character in numbers.split(" "):
        number = int(character)
        if low is None and high is None:
            low = number
            high = number
        elif number < low:
            low = number
        elif number > high:
            high = number
    return f"{high} {low}"


# def high_and_low(numbers: str) -> str:
#     numbers = tuple(int(n) for n in numbers.split(" "))
#     return f"{max(numbers)} {min(numbers)}"


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(high_and_low(
            "8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
        test.assert_equals(high_and_low("1 2 3"), "3 1")
