fn main() {
    println!("Hello, world!");
}

// fn high_and_low(numbers: &str) -> String {
//     let high: i32 = numbers
//         .split(" ")
//         .map(|c| c.parse().unwrap())
//         .max()
//         .unwrap();
//     let low: i32 = numbers
//         .split(" ")
//         .map(|c| c.parse().unwrap())
//         .min()
//         .unwrap();
//     format!("{} {}", high, low)
// }

// fn high_and_low(numbers: &str) -> String {
//     use std::cmp;
//     let f = |(max, min), x| (cmp::max(max, x), cmp::min(min, x));

//     let answer = numbers
//         .split_whitespace()
//         .flat_map(str::parse)
//         .fold((i32::min_value(), i32::max_value()), f);
//     format!("{} {}", answer.0, answer.1)
// }

fn high_and_low(numbers: &str) -> String {
    let numbers: Vec<i32> = numbers.split(" ").flat_map(str::parse).collect();
    format!(
        "{} {}",
        numbers.iter().max().unwrap(),
        numbers.iter().min().unwrap()
    )
}

#[test]
fn sample_test() {
    assert_eq!("42 -9", high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
}
