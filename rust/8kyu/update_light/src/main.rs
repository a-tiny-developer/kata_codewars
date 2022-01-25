fn main() {}

fn update_light(current: &str) -> String {
    match current {
        "green" => "yellow",
        "yellow" => "red",
        "red" => "green",
        _ => "Invalid",
    }
    .into()
}

// * KEKW
// fn update_light(current: &str) -> String {
//     match current {
//         "green" => "yellow",
//         "yellow" => "red",
//         _ => "green"
//         // Why? Because I like living on the wild side.
//     }.to_owned()
// }

#[test]
fn basic_test() {
    assert_eq!(update_light("green"), "yellow");
    assert_eq!(update_light("yellow"), "red");
    assert_eq!(update_light("red"), "green");
}
