package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestSquareSum(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "SquareSum Suite")
}

var _ = Describe("Sample Tests", func() {
	It("Testing [1,2]", func() { Expect(SquareSum([]int{1, 2})).To(Equal(5)) })
	It("Testing [0,3,4,5]", func() { Expect(SquareSum([]int{0, 3, 4, 5})).To(Equal(50)) })
})
