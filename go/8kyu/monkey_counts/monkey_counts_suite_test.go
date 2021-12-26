package kata

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestMonkeyCounts(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "MonkeyCounts Suite")
}

var _ = Describe("monkeyCount", func() {
	It("Should work for fixed tests", func() {
		Expect(monkeyCount(1)).To(Equal([]int{1}))
		Expect(monkeyCount(2)).To(Equal([]int{1, 2}))
		Expect(monkeyCount(3)).To(Equal([]int{1, 2, 3}))
		Expect(monkeyCount(4)).To(Equal([]int{1, 2, 3, 4}))
		Expect(monkeyCount(5)).To(Equal([]int{1, 2, 3, 4, 5}))
		Expect(monkeyCount(6)).To(Equal([]int{1, 2, 3, 4, 5, 6}))
		Expect(monkeyCount(7)).To(Equal([]int{1, 2, 3, 4, 5, 6, 7}))
		Expect(monkeyCount(8)).To(Equal([]int{1, 2, 3, 4, 5, 6, 7, 8}))
		Expect(monkeyCount(9)).To(Equal([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}))
		Expect(monkeyCount(10)).To(Equal([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}))
	})
})
