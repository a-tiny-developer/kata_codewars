use itertools::Itertools;

fn main() {}

// fn descending_order(x: u64) -> u64 {
//     let mut x = x.to_string().chars().collect::<Vec<_>>();
//     x.sort();
//     x.iter().rev().collect::<String>().parse::<u64>().unwrap()
// }

fn descending_order(x: u64) -> u64 {
    x.to_string()
        .chars()
        .sorted()
        .rev()
        .collect::<String>()
        .parse::<_>()
        .unwrap()
}

#[test]
fn returns_expected() {
    assert_eq!(descending_order(0), 0);
    assert_eq!(descending_order(1), 1);
    assert_eq!(descending_order(15), 51);
    assert_eq!(descending_order(1021), 2110);
    assert_eq!(descending_order(123456789), 987654321);
    assert_eq!(descending_order(145263), 654321);
    assert_eq!(descending_order(1254859723), 9875543221);
}
