package kata

import "strings"

// Just ASCII
func Accum(s string) string {
	var result []string
	for i, v := range s {
		char := string(v)
		result = append(result, strings.ToUpper(char)+strings.Repeat(strings.ToLower(char), i))
	}
	return strings.Join(result, "-")
}
