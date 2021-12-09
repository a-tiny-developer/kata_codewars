package vowel

import "strings"

func GetCount(str string) (count int) {
	for _, v := range strings.ToLower(str) {
		if strings.Contains("aeiou", string(v)) {
			count++
		}
	}
	return
}
