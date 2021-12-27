package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestDnaToRna(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "DnaToRna Suite")
}

var _ = Describe("Test Example", func() {
	It("GCAT", func() {
		Expect(DNAtoRNA("GCAT")).To(Equal("GCAU"))
	})
})
