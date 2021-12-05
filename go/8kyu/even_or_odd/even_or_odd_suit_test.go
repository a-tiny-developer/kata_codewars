package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestEvenOrOdd(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "EvenOrOdd Suite")
}

var _ = Describe("Test Example", func() {
	It("should test that the solution returns the correct value", func() {
		Expect(EvenOrOdd(1)).To(Equal("Odd"))
		Expect(EvenOrOdd(2)).To(Equal("Even"))
		Expect(EvenOrOdd(-1)).To(Equal("Odd"))
		Expect(EvenOrOdd(-2)).To(Equal("Even"))
	})
})
