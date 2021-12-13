package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestHighAndLow(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "HighAndLow Suite")
}

// Ginkgo BDD Testing Framework <http://onsi.github.io/ginkgo></http:>
// Gomega Matcher Library <http://onsi.github.io/gomega></http:>

var _ = Describe("Example Test", func() {
	It("should test that the solution returns the correct value", func() {
		Expect(HighAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).To(Equal("42 -9"))
	})
})
