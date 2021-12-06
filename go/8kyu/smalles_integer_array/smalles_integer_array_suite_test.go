package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestSmallesIntegerArray(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "SmallesIntegerArray Suite")
}

var _ = Describe("Sample Test Cases", func() {
	It("should work for sample tests", func() {
		Expect(Expect(SmallestIntegerFinder([]int{34, 15, 88, 2})).To(Equal(2)))
		Expect(Expect(SmallestIntegerFinder([]int{34, -345, -1, 100})).To(Equal(-345)))
	})
})
