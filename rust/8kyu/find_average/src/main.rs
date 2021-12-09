fn main() {
    let input = [
        17.0, 16.0, 16.0, 16.0, 16.0, 15.0, 17.0, 17.0, 15.0, 5.0, 17.0, 17.0, 16.0,
    ];
    println!("{}", find_average(&input));
}

fn find_average(slice: &[f64]) -> f64 {
    if slice.is_empty() {
        return 0.0;
    }
    slice.iter().sum::<f64>() / slice.len() as f64
}

// fn find_average(xs: &[f64]) -> f64 {
//     match xs.len() {
//         0 => 0.,
//         n => xs.iter().sum::<f64>() / n as f64
//     }
// }
