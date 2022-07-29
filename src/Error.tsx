import * as Sentry from "@sentry/react"
import {useState} from "react";

const Error = () => {
    const [state, setState] = useState('1');
    const methodDoesNotExist = () => {
        // @ts-ignore
        setState('')
    }
    return <div>
        <button onClick={methodDoesNotExist}>
            Break the world
            {JSON.parse(state)}
        </button>
    </div>
}

const Container = () => {
    return <Sentry.ErrorBoundary
        beforeCapture={scope => {
            console.log(scope)
            scope.setLevel('fatal')
        }}
        fallback={<p>An error has occurred</p>}
    >
        <Error />
    </Sentry.ErrorBoundary>
}

export default Container
