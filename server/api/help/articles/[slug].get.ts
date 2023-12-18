export default defineEventHandler((event) => {
    const config = useRuntimeConfig(event)
    const slug = getRouterParam(event, 'slug')
    return $fetch("https://cdn.contentful.com/spaces/ufk8mb6l5g95/environments/master/entries?content_type=entry&limit=1&order=-sys.createdAt&fields.slug%5Ball%5D=" + slug, {
        "headers": {
            "authorization": `Bearer ${config.ctfToken}`,
        },
        "body": null,
        "method": "GET"
    });
})
