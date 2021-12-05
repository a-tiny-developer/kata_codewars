package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestBoolToWord(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "BoolToWord Suite")
}

var _ = Describe("Test Example", func() {
	It("should test that the solution returns the correct value", func() {
		Expect(BoolToWord(true)).To(Equal("Yes"))
		Expect(BoolToWord(false)).To(Equal("No"))
	})
})
