fn main() {}

fn disemvowel(s: &str) -> String {
    s.chars().filter(|&c| !"aeoiuAEIOU".contains(c)).collect()
}

#[cfg(test)]
mod tests {
    use super::disemvowel;

    #[test]
    fn example_test() {
        assert_eq!(
            disemvowel("This website is for losers LOL!"),
            "Ths wbst s fr lsrs LL!"
        );
    }
}
