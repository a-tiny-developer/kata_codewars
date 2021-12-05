package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestOppositiveNumber(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "OppositiveNumber Suite")
}

var _ = Describe("opposite function", func() {
	It("should invert number", func() {
		Expect(Opposite(1)).To(Equal(-1))
	})
})
