export function validateEmail(email: string) {
    if (!email) return "Email is required";

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email))
        return "Invalid email address";

    return "";
}

export function validatePassword(password: string) {
    if (!password)
        return "Password is required";

    if (password.length < 8)
        return "Password must be at least 8 characters";

    if (!/\d/.test(password))
        return "Password must contain at least one number";

    return "";
}

export function validateConfirmPassword(
    password: string,
    confirm: string
) {
    if (!confirm)
        return "Confirm password is required";

    if (password !== confirm)
        return "Passwords do not match";

    return "";
}