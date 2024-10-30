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
})()