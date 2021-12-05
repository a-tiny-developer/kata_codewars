package kata

func PositiveSum(numbers []int) int {
	result := 0
	for _, v := range numbers {
		if v > 0 {
			result += v
		}
	}
	return result
}

