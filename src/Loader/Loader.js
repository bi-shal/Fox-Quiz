export const loaderData = async() => {
    const productsData = await fetch('data.json')
    const productss = await productsData.json()
    const products = productss.data
    // console.log(products)
    return products
}