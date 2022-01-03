package kata

import "math/bits"

func CountBits(x uint) int {
	return bits.OnesCount(x)
}
