import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as Sentry from "@sentry/react"
import {BrowserTracing} from "@sentry/tracing"
import Error from "./Error"

Sentry.init({
    dsn: 'https://da046d82f40e42708261b254e6099f8e@o154160.ingest.sentry.io/5495858',
    integrations: [new BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
//     <Sentry.ErrorBoundary
// beforeCapture={scope => {
//     console.log(scope)
//     scope.setLevel('fatal')
// }}
// fallback={<p>An error has occurred</p>}
// >
// <Error />
// </Sentry.ErrorBoundary>
root.render(<Error />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
