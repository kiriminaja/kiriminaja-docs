export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const query = getQuery(event)

    const results = await $fetch(`https://cdn.contentful.com/spaces/ufk8mb6l5g95/environments/master/entries?content_type=entry&limit=5&order=-sys.createdAt&query=`+query.query, {
        "headers": {
            "authorization": `Bearer ${config.ctfToken}`,
        },
    });

    return results.items
})
