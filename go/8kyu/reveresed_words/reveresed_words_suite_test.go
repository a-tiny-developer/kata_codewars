package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestReveresedWords(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "ReveresedWords Suite")
}

var _ = Describe("Test Example", func() {
	It("should work for sample test cases", func() {
		Expect(ReverseWords("hello world!")).To(Equal("world! hello"))
		Expect(ReverseWords("yoda doesn't speak like this")).To(Equal("this like speak doesn't yoda"))
		Expect(ReverseWords("foobar")).To(Equal("foobar"))
		Expect(ReverseWords("kata editor")).To(Equal("editor kata"))
		Expect(ReverseWords("row row row your boat")).To(Equal("boat your row row row"))
	})
})
