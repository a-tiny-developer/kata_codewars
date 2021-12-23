fn main() {
    println!("Hello, world!");
}

// fn xo(string: &'static str) -> bool {
//     let string = string.to_lowercase();
//     return string.chars().filter(|&c| c == 'o').count()
//         == string.chars().filter(|&c| c == 'x').count();
// }

fn xo(s: &str) -> bool {
    let s = s.to_lowercase();
    s.matches('x').count() == s.matches('o').count()
}

// fn xo(string: &'static str) -> bool {
//   string.chars().fold(0, |a, c|{
//     match c {
//       'x' | 'X' => a + 1,
//       'o' | 'O' => a - 1,
//       _ => a
//     }
//   }) == 0
// }

#[test]
fn returns_expected() {
    assert_eq!(xo("xo"), true);
    assert_eq!(xo("Xo"), true);
    assert_eq!(xo("xxOo"), true);
    assert_eq!(xo("xxxm"), false);
    assert_eq!(xo("Oo"), false);
    assert_eq!(xo("ooom"), false);
}
