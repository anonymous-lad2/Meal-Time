import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError();
    console.log(err)

    return (
        <div className="text-center py-20">
            <h1 className="font-bold text-3xl">Error</h1>
            <h2 className="text-2xl">Bad Request</h2>
            <h3>{err.status} - {err.statusText}</h3>
        </div>
    )
}

export default Error