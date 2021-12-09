package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestJennySecretMessage(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "JennySecretMessage Suite")
}

var _ = Describe("Test Example", func() {
	It("should work for sample test cases", func() {
		Expect(Greet("Alfred")).To(Equal("Hello, Alfred!"))
		Expect(Greet("Johnny")).To(Equal("Hello, my love!"))
	})
})
