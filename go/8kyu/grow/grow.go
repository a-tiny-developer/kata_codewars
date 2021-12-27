package kata

func Grow(arr []int) int {
	product := 1
	for _, v := range arr {
		product *= v
	}
	return product
}
