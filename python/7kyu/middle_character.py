import codewars_test as test


def get_middle(s: str) -> str:
    length = len(s)
    mid_length = int(length / 2)
    if length % 2 == 0:
        return s[mid_length - 1:mid_length + 1]
    return s[mid_length:mid_length + 1]


# def get_middle(s: str) -> str:
#     return s[(len(s)-1) // 2: len(s)//2 + 1]


test.assert_equals(get_middle("test"), "es")
test.assert_equals(get_middle("testing"), "t")
test.assert_equals(get_middle("middle"), "dd")
test.assert_equals(get_middle("A"), "A")
test.assert_equals(get_middle("of"), "of")
