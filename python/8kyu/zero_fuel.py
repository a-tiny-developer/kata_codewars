import codewars_test as test


def zero_fuel(distance_to_pump: int, mpg: int, fuel_left: int) -> bool:
    return mpg * fuel_left >= distance_to_pump


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(zero_fuel(50, 25, 2), True)
        test.assert_equals(zero_fuel(100, 50, 1), False)
