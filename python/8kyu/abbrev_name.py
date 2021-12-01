import codewars_test as test


def abbrev_name(name: str) -> str:
    return '.'.join(x[0].capitalize() for x in name.split(' '))


# def abbrevName(name):
#     return '.'.join(w[0] for w in name.split()).upper()


@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(abbrev_name("Sam Harris"), "S.H")
        test.assert_equals(abbrev_name("patrick feenan"), "P.F")
        test.assert_equals(abbrev_name("Evan C"), "E.C")
        test.assert_equals(abbrev_name("P Favuzzi"), "P.F")
        test.assert_equals(abbrev_name("David Mendieta"), "D.M")
