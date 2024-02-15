export default () => {
    const config = useRuntimeConfig()
    return config.public.appMode == 'help'
}
