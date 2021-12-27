package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestMakeUpperCase(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "MakeUpperCase Suite")
}

var _ = Describe("Make uppercase", func() {
	It("basic tests", func() {
		Expect(MakeUpperCase("hello")).To(Equal("HELLO"))
		Expect(MakeUpperCase("hello world")).To(Equal("HELLO WORLD"))
		Expect(MakeUpperCase("hello world !")).To(Equal("HELLO WORLD !"))
		Expect(MakeUpperCase("heLlO wORLd !")).To(Equal("HELLO WORLD !"))
		Expect(MakeUpperCase("1,2,3 hello world!")).To(Equal("1,2,3 HELLO WORLD!"))
	})
})
