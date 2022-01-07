fn main() {}

fn first_non_consecutive(arr: &Vec<i32>) -> Option<i32> {
    for (&x, y) in arr.iter().zip(arr[0]..=arr[arr.len() - 1]) {
        if x != y {
            return Some(x);
        }
    }
    None
}

// * Best practice
// fn first_non_consecutive(arr: &[i32]) -> Option<i32> {
//     arr.windows(2).find(|s| s[0] + 1 != s[1]).map(|s| s[1])
// }


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_basic() {
        assert_eq!(first_non_consecutive(&vec![1, 2, 3, 4, 6, 7, 8]), Some(6));
        assert_eq!(first_non_consecutive(&vec![1, 2, 3, 4, 5, 6, 7, 8]), None);
        assert_eq!(first_non_consecutive(&vec![4, 6, 7, 8, 9, 11]), Some(6));
        assert_eq!(first_non_consecutive(&vec![4, 5, 6, 7, 8, 9, 11]), Some(11));
        assert_eq!(first_non_consecutive(&vec![31, 32]), None);
        assert_eq!(first_non_consecutive(&vec![-3, -2, 0, 1]), Some(0));
        assert_eq!(first_non_consecutive(&vec![-5, -4, -3, -1]), Some(-1));
    }
}
