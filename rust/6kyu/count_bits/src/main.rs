fn main() {
    println!("{}", count_bits(0));
    println!("{}", count_bits(4));
    println!("{}", count_bits(7));
    println!("{}", count_bits(9));
    println!("{}", count_bits(10));
}

fn count_bits(n: i64) -> u32 {
    n.count_ones()
}

// * Clever - binary string
// fn count_bits(n: i64) -> u32 {
//     format!("{:b}", n).matches('1').count() as u32
// }

// * Clever shift operator
// fn count_bits(n: i64) -> u32 {
//   let mut count = 0;
//   for i in 0 .. 64 {
//       count += (n >> i) & 1
//   }
//   count as u32
// }

#[test]
fn returns_expected() {
    assert_eq!(count_bits(0), 0);
    assert_eq!(count_bits(4), 1);
    assert_eq!(count_bits(7), 3);
    assert_eq!(count_bits(9), 2);
    assert_eq!(count_bits(10), 2);
}
