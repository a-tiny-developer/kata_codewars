package vowel

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestVowelCount(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "VowelCount Suite")
}

// Ginkgo BDD Testing Framework <http://onsi.github.io/ginkgo></http:>
// Gomega Matcher Library <http://onsi.github.io/gomega></http:>
var _ = Describe("Test Example", func() {
	It("should test that the solution returns the correct value", func() {
		Expect(GetCount("abracadabra")).To(Equal(5))
	})
})
