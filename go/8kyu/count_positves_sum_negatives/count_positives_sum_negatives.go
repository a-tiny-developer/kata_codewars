package kata

func CountPositivesSumNegatives(numbers []int) []int {
	res := []int{0, 0}
	for _, v := range numbers {
		if v > 0 {
			res[0]++
		} else {
			res[1] += v
		}
	}
	return res
}
