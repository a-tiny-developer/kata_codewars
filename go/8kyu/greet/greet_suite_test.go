package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestGreet(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Greet Suite")
}

var _ = Describe("Example test cases", func() {
	It("should return greeting for Ryan", func() {
		Expect(Greet("Ryan")).To(Equal("Hello, Ryan how are you doing today?"))
	})
})
