package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestReversedSequence(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "ReversedSequence Suite")
}

var _ = Describe("Test Example", func() {
	It("should work for sample tests", func() {
		var n []int

		n = []int{5, 4, 3, 2, 1}
		Expect(ReverseSeq(5)).To(Equal(n))
	})
})
