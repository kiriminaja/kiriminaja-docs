export default defineEventHandler((event) => {
    const config = useRuntimeConfig(event)
    const query = getQuery(event)

    if (!!!query.slug) {
        return {
            status: false
        }
    }

    return $fetch("https://cdn.contentful.com/spaces/ufk8mb6l5g95/environments/master/entries?content_type=entry&order=-sys.createdAt&fields.category.sys.id%5Ball%5D=7ybAX7cy0lppom4NtyWpQh", {
        "headers": {
            "authorization": `Bearer ${config.ctfToken}`,
        },
    });
})
