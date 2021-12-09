package kata

func ReverseSeq(n int) []int {
	sequence := make([]int, n)
	for i := range sequence {
		sequence[i] = n - i
	}
	return sequence
}
