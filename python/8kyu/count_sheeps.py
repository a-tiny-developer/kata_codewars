import codewars_test as test


def count_sheeps(sheep: list) -> int:
    return sum(x for x in sheep if x)


# def count_sheeps(arrayOfSheeps):
#   return arrayOfSheeps.count(True)


array1 = [True,  True,  True,  False,
          True,  True,  True,  True,
          True,  False, True,  False,
          True,  False, False, True,
          True,  True,  True,  True,
          False, False, True,  True]

test.assert_equals(result := count_sheeps(array1), 17,
                   "There are 17 sheeps in total, not %s" % result)
G