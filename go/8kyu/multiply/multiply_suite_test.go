package multiply

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestMultiply(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Multiply Suite")
}

var _ = Describe("multiply method", func() {
	It("should multiply integers", func() {
		Expect(Multiply(1, 1)).To(Equal(1))
		Expect(Multiply(1, 0)).To(Equal(0))
		Expect(Multiply(2, 5)).To(Equal(10))
		Expect(Multiply(5, 10)).To(Equal(50))
	})
})
