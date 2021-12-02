import codewars_test as test


def past(h: int, m: int, s: int) -> int:
    return h*60*60*1000 + m*60*1000 + s*1000


# def past(h, m, s):
#     return (3600*h + 60*m + s) * 1000


@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(past(0, 1, 1), 61000)
        test.assert_equals(past(1, 1, 1), 3661000)
        test.assert_equals(past(0, 0, 0), 0)
        test.assert_equals(past(1, 0, 1), 3601000)
        test.assert_equals(past(1, 0, 0), 3600000)
