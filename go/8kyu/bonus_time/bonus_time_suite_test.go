package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestBonusTime(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "BonusTime Suite")
}

// Ginkgo BDD Testing Framework <http://onsi.github.io/ginkgo></http:>
// Gomega Matcher Library <http://onsi.github.io/gomega></http:>

var _ = Describe("Basic tests", func() {
	It("Does not add a bonus if undeserved", func() {
		Expect(BonusTime(100, false)).To(Equal("£100"))
		Expect(BonusTime(9, false)).To(Equal("£9"))
		Expect(BonusTime(55000, false)).To(Equal("£55000"))
	})
	It("Adds a bonus if deserved", func() {
		Expect(BonusTime(100, true)).To(Equal("£1000"))
		Expect(BonusTime(14000, true)).To(Equal("£140000"))
	})
})
