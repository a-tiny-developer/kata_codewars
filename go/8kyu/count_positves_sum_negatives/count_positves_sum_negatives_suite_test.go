package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestCountPositvesSumNegatives(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "CountPositvesSumNegatives Suite")
}

var _ = Describe("Test Example", func() {
	It("should work for sample tests", func() {
		arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15}
		res := []int{10, -65}
		Expect(CountPositivesSumNegatives(arr)).To(Equal(res))
	})
})
