package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestMultiples3And5(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Multiples3And5 Suite")
}


var _ = Describe("Multiples of 3 and 5", func() {

   It("should handle basic cases", func() {
     Expect(Multiple3And5(10)).To(Equal(23))
   })
})
