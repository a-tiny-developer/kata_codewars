package kata

import "math"

func SquareSum(numbers []int) int {
	sum := 0
	for _, v := range numbers {
		sum += int(math.Pow(float64(v), 2))
	}
	return sum
}
