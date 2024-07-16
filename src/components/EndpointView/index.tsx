
type EndpointInterface = {
    endpoint: string,
    method?: 'post' |'get' | 'delete' | 'put' | 'patch'
}

export default function EndpointView(props: EndpointInterface): JSX.Element {
    return (
        <>
        TEST COMPONENT</>
    )
}
