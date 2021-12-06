package kata

import (
	"fmt"
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestSummation(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Summation Suite")
}

var _ = Describe("Basic Tests", func() {
	examples := [...][2]int{
		{1, 1},
		{8, 36},
		{22, 253},
		{100, 5050},
		{213, 22791},
	}
	for i := 0; i < len(examples); i++ {
		v := examples[i]
		It(fmt.Sprintf("Testing for %d", v[0]), func() {
			Expect(Summation(v[0])).To(Equal(v[1]))
		})
	}
})
