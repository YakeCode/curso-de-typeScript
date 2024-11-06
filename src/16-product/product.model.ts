export type Size = 'S' | 'M' | 'L' | 'XL' // Type Alias

export type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
}