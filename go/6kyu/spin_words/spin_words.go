package kata

import "strings"

func SpinWords(str string) string {
	var spin string
	for _, word := range strings.Fields(str) {
		if len(word) >= 5 {
			spin += Reverse(word)
		} else {
			spin += word
		}
		spin += " "
	}
	spin = strings.Trim(spin, " ")
	return spin
}

func Reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
