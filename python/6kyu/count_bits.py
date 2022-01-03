import codewars_test as test


def count_bits(n: int) -> int:
    return bin(n).count("1")


# * Performance?
# def countBits(n):
#     ret = 0
#     while n:
#         ret += n & 1
#         n >>= 1
#     return ret

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Tests")
    def basic_tests():
        test.assert_equals(count_bits(0), 0)
        test.assert_equals(count_bits(4), 1)
        test.assert_equals(count_bits(7), 3)
        test.assert_equals(count_bits(9), 2)
        test.assert_equals(count_bits(10), 2)
