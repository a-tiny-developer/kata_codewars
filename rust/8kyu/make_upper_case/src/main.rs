fn main() {
}

fn make_upper_case(s: &str) -> String {
    s.to_uppercase()
}

// static make_upper_case: fn(&str) -> String = str::to_uppercase;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_make_upper_case() {
        assert_eq!(make_upper_case("hello"), "HELLO");
    }
}
