import React from 'react'

export const useRequest = (req) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            const data = await req();
            setData(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    return [
        data,
        isLoading
    ]
}