import codewars_test as test


def update_light(current: str) -> str:
    if current == 'green':
        return 'yellow'
    elif current == 'yellow':
        return 'red'
    elif current == 'red':
        return 'green'
    else:
        return ""

# * Best Practice
# def update_light(current: str) -> str:
#     return {"green": "yellow", "yellow": "red", "red": "green"}.get(current, "Invalid")


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(update_light('green'), 'yellow')
        test.assert_equals(update_light('yellow'), 'red')
        test.assert_equals(update_light('red'), 'green')
