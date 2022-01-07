package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestCountSheep(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "CountSheep Suite")
}

var _ = Describe("Sample Test Cases", func() {
	It("The solution should return the correct values for the sample test cases!", func() {
		Expect(countSheep(2)).To(Equal("1 sheep...2 sheep..."))
		Expect(countSheep(0)).To(Equal(""))
		Expect(countSheep(1)).To(Equal("1 sheep..."))
	})
})
