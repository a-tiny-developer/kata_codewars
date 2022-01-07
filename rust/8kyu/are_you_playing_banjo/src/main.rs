fn main() {}

fn are_you_playing_banjo(name: &str) -> String {
    match name.chars().next() {
        Some(c) if c == 'r' || c == 'R' => format!("{} plays banjo", name),
        _ => format!("{} does not play banjo", name),
    }
}
// * Best practice
// fn are_you_playing_banjo(name: &str) -> String {
//     match name.to_lowercase().starts_with("r") {
//         true => format!("{} plays banjo", name),
//         false => format!("{} does not play banjo", name)
//     }
// }

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_are_you_playing_banjo() {
        assert_eq!(
            are_you_playing_banjo("Martin"),
            "Martin does not play banjo"
        );
        assert_eq!(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
        assert_eq!(are_you_playing_banjo("bravo"), "bravo does not play banjo");
        assert_eq!(are_you_playing_banjo("rolf"), "rolf plays banjo");
    }
}
