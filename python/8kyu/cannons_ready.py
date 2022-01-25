import codewars_test as test
from typing import Dict


def cannons_ready(gunners: Dict[str, str]) -> str:
    for v in gunners.values():
        if v != 'aye':
            return 'Shiver me timbers!'
    return 'Fire!'

# * Best Practice
# def cannons_ready(gunners):
#   return 'Shiver me timbers!' if 'nay' in gunners.values() else 'Fire!'


a = {'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye'}
b = {'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye'}
test.assert_equals(cannons_ready(a), 'Fire!')
test.assert_equals(cannons_ready(b), 'Shiver me timbers!')
