package kata

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	low := math.MaxInt64
	high := math.MinInt64
	for _, c := range strings.Fields(in) {
		n, _ := strconv.Atoi(string(c))
		if n > high {
			high = n
		}
		if n < low {
			low = n
		}
	}
	return fmt.Sprintf("%v %v", high, low)
}
