package kata

func CountSheeps(numbers []bool) int {
	sum := 0
	for _, v := range numbers {
		if v {
			sum += 1
		}
	}
	return sum
}
