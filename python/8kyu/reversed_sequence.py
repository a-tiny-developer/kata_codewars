import codewars_test as test


def reverse_seq(n):
    return [x for x in range(n, 0, -1)]


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(reverse_seq(5), [5, 4, 3, 2, 1])
