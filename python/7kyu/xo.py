

def xo(s: str) -> bool:
    s = s.lower()
    return sum(x == 'x' for x in s) == sum(x == 'o' for x in s)


# def xo(s):
#     s = s.lower()
#     return s.count('x') == s.count('o')
