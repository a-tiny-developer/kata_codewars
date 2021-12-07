package kata

func Maps(x []int) []int {
	var y []int
	for _, v := range x {
		y = append(y, v*2)
	}
	return y
}

// func Maps(x []int) []int {
//   result := make([]int, len(x))
//   for i, v := range x {
//     result[i] = v + v
//   }
//   return result
// }
