import axios from 'axios';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    const categories = $fetch("https://cdn.contentful.com/spaces/ufk8mb6l5g95/environments/master/entries?content_type=category&order=-sys.createdAt", {
        headers: {
            Authorization: `Bearer ${config.ctfToken}`
        }
    })

    return categories
})
