(() => {
    type UserId = string | number | boolean

    let userId: UserId

    function valid(userId: UserId) {
        if (typeof userId === "string") {
            return `soy valid string`
        } else {
            return `soy valid number`
        }
    }

    // Literal Types

    let shirtSize: "S" | "M" | "L" | "XL";

    shirtSize = "S"
    shirtSize = 'S'
    shirtSize = "M"
    shirtSize = "L"
    shirtSize = "XL"

    // shirtSize = "Other" me lo marcaria como error

    //////////////////////////////////////////////////////////////

    // Optimizando con alias y tipos literales

    type Size = "S" | "M" | "L" | "XL";

    let jackets: Size

    jackets = "S"

})()