export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const slug = getRouterParam(event, 'slug')
    const category = await $fetch("https://cdn.contentful.com/spaces/ufk8mb6l5g95/environments/master/entries?content_type=category&limit=1&order=-sys.createdAt&fields.slug%5Ball%5D=" + slug, {
        "headers": {
            "authorization": `Bearer ${config.ctfToken}`,
        },
        "body": null,
        "method": "GET"
    });
    if (category.items.length <= 0) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }

    const shiftedCat = category.items.shift()
    let categoryMapped = {
        id: shiftedCat.sys.id,
        title: shiftedCat.fields.title,
        slug: shiftedCat.fields.slug,
        description: shiftedCat.fields.description,
        tags: shiftedCat.metadata.tags
    }

    const articles = await $fetch("https://cdn.contentful.com/spaces/ufk8mb6l5g95/environments/master/entries?content_type=entry&order=-sys.createdAt&fields.category.sys.id%5Ball%5D="+categoryMapped.id, {
        headers: {
            Authorization: "Bearer 0QOr2bhtebHGu2wMjlyRD9CZofnSeCFxANlDyOq-0l8",
        }
    })

    categoryMapped.articles = articles.items
    // articles.items.forEach((item) => {
    //     categoryMapped.articles.push({
    //         id: item.sys.id,
    //         slug: item.fields.slug,
    //         description: item.fields.description,
    //         ytLink: item.fields.ytLink
    //     })
    // })

    return categoryMapped
})
