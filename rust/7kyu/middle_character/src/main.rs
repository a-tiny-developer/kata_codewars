fn main() {
    println!("Hello, world!");
}

fn get_middle(s: &str) -> &str {
    &s[(s.len() - 1) / 2..s.len() / 2 + 1]
}

#[test]
fn example_tests() {
    assert_eq!(get_middle("test"), "es");
    assert_eq!(get_middle("testing"), "t");
    assert_eq!(get_middle("middle"), "dd");
    assert_eq!(get_middle("A"), "A");
    assert_eq!(get_middle("of"), "of");
}
