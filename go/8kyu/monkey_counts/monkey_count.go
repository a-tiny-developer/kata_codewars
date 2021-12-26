package kata

func monkeyCount(n int) []int {
	var result []int
	for i := 0; i < n; i++ {
		result = append(result, i+1)
	}
	return result
}


// package kata

// func monkeyCount(n int) []int {
//   result := make([]int, n)

//   for i := range result {
//     result[i] = i + 1
//   }

//   return result
// }
