import codewars_test as test


def count_sheep(n: int) -> str:
    result = ""
    for i in range(1, n+1):
        result += f'{i} sheep...'
    return result

# * Best practice
# def count_sheep(n):
#     return ''.join(f"{i} sheep..." for i in range(1, n+1))


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(count_sheep(0), "")
        test.assert_equals(count_sheep(1), "1 sheep...")
        test.assert_equals(count_sheep(2), "1 sheep...2 sheep...")
        test.assert_equals(count_sheep(3), "1 sheep...2 sheep...3 sheep...")
