fn main() {}

// fn count_sheep(n: u32) -> String {
//     let mut result = String::new();
//     if n == 0 {
//         return result;
//     }
//     for i in 1..=n {
//         result.push_str(&format!("{} sheep...", i))
//     }
//     result
// }

// * Best practice
fn count_sheep(n: u32) -> String {
    (1..=n).map(|x| format!("{} sheep...", x)).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn returns_expected() {
        assert_eq!(count_sheep(0), "");
        assert_eq!(count_sheep(1), "1 sheep...");
        assert_eq!(count_sheep(2), "1 sheep...2 sheep...");
        assert_eq!(count_sheep(3), "1 sheep...2 sheep...3 sheep...");
    }
}
