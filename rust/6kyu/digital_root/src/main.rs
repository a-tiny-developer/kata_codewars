fn main() {
    println!("{}", 941 % 9);
}

// * My solution
fn digital_root(n: i64) -> i64 {
    if n < 10 {
        return n;
    }
    digital_root(digitize(n).iter().sum())
}

fn digitize(mut n: i64) -> Vec<i64> {
    let mut reverse: Vec<i64> = vec![];
    while n != 0 {
        reverse.push(n % 10);
        n /= 10;
    }
    reverse
}

// * Best Practice
fn digital_root2(n: i64) -> i64 {
    if n / 10 == 0 {
        n
    } else {
        digital_root(n % 10 + n / 10)
    }
}


// * BEST CLEVER
fn digital_root3(n: i64) -> i64 {
    (n - 1) % 9 + 1
}

// Interesting function
fn sum_digits(n: i64) -> i64 {
    let mut sum = 0;
    let mut n = n;
    while n != 0 {
        sum += n % 10;
        n = n / 10;
    }
    sum
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn returns_expected() {
        assert_eq!(digital_root(16), 7);
    }
}
