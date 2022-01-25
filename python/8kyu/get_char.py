import codewars_test as test


def get_char(c: int) -> str:
    return chr(c)


test.assert_equals(get_char(65), 'A')
