package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestHelloWorld(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "HelloWorld Suite")
}

// TODO: replace with your own tests (TDD). An example to get you started is included below.
// Ginkgo BDD Testing Framework <http://onsi.github.io/ginkgo></http:>
// Gomega Matcher Library <http://onsi.github.io/gomega></http:>
var _ = Describe("Example Tests", func() {
	It("should return string: 'hello world!'", func() {
		Expect(greet()).To(Equal("hello world!"))
	})
})
