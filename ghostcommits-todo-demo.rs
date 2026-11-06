// just another zebra
fn main() {
    let cipher = "cool project";

    for shift in 1..26 {
        let decrypted: String = cipher.chars()
            .map(|c| {
                if c.is_ascii_lowercase() {
                    ((c as u8 - b'a' + 26 - shift) % 26 + b'a') as char
                } else {
                    c
                }
            })
            .collect();

        println!("Shift {}: {}", shift, decrypted);
    }
}