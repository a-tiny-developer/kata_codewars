fn main() {}

fn digitize(n: u64) -> Vec<u8> {
    n.to_string()
        .chars()
        .rev()
        .map(|x| x.to_digit(10).unwrap() as u8)
        .collect()
}

/// Function that splits a positive integer
/// into digits and reverses them.
// fn digitize(mut a: u64) -> Vec<u8> {
//     let mut reverse: Vec<u8> = vec![];

//     loop {
//         reverse.push((a % 10) as u8);
//         a /= 10;

//         if a == 0 {
//             break;
//         }
//     }

//     reverse
// }

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fixed() {
        assert_eq!(digitize(35231), vec![1, 3, 2, 5, 3]);
    }
}
