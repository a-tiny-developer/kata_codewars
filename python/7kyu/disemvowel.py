import codewars_test as test


def disemvowel(string_: str) -> str:
    return "".join("" if c.lower() in "aeiou" else c for c in string_)


@test.describe("Fixed Tests")
def basic_tests():
    @ test.it("First fixed test")
    def fixed_test_1():
        test.assert_equals(disemvowel(
            "This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
