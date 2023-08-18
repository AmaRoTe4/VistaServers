export const formateoText = (text) => {
    return text.split(" ").join("_")
}

export const desFormateoText = (text) => {
    return text.split("_").join(" ")
}