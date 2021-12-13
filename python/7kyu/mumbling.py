import codewars_test as test


def accum(s: str) -> str:
    return "-".join((char.lower() * i).capitalize()
                    for i, char in enumerate(s, start=1))

# def accum(s):
#     return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))

    # your code
test.describe("accum")
test.it("Basic tests")
test.assert_equals(accum("ZpglnRxqenU"),
                   "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
test.assert_equals(accum("NyffsGeyylB"),
                   "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
test.assert_equals(accum("MjtkuBovqrU"),
                   "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
test.assert_equals(accum("EvidjUnokmM"),
                   "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
test.assert_equals(accum("HbideVbxncC"),
                   "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
