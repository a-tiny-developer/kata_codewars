package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestMakeNegative(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "MakeNegative Suite")
}

var _ = Describe("Test Example", func() {
	It("should test that the solution returns the correct value", func() {
		Expect(MakeNegative(42)).To(Equal(-42))
	})
})
