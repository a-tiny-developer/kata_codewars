package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestReversedStrings(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "ReversedStrings Suite")
}

var _ = Describe("Test Example", func() {
	It("should test that the solution returns the correct value", func() {
		Expect(Solution("world")).To(Equal("dlrow"))
	})
})
