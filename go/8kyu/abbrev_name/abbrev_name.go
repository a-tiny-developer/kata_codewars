package kata

import "strings"

func AbbrevName(name string) string {
	var letters []string
	for _, word := range strings.Fields(name) {
		letters = append(letters, strings.ToUpper(string([]rune(word)[0])))
	}
	return strings.Join(letters, ".")
}
