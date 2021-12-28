package kata

func Multiple3And5(number int) int {
	var sum int
	for i := 1; i < number; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}
