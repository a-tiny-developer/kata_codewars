fn main() {}

fn duty_free(price: i32, discount: i32, holiday_cost: i32) -> i32 {
    let price = f64::from(price);
    let discount = f64::from(discount);
    let holiday_cost = f64::from(holiday_cost);
    (holiday_cost / (price * discount * 0.01)) as i32
}

// * Best Practice
// fn duty_free(price: i32, discount: i32, holiday_cost: i32) -> i32 {
//     holiday_cost * 100 / (discount * price)
// }

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_tests() {
        assert_eq!(duty_free(12, 50, 1000), 166);
        assert_eq!(duty_free(17, 10, 500), 294);
    }
}
