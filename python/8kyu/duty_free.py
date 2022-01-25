import codewars_test as test


def duty_free(price: int, discount: int, holiday_cost: int) -> int:
    return int(holiday_cost / (price * discount * 0.01))


test.describe("Basic tests")
test.assert_equals(duty_free(12, 50, 1000), 166)
test.assert_equals(duty_free(17, 10, 500), 294)
