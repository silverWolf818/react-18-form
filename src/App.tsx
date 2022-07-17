import React from 'react'
import {FormProvider} from '@formily/react'
import {createForm} from '@formily/core'
import FormCanvasPanel from './components/FormCanvasPanel'
import FormFieldsPanel from './components/FormFieldsPanel'
import FormNavigator from './components/FormNavigator'
import FormSettingPanel from './components/FormSettingPanel'
import './App.css'

function App() {
    const form = createForm({
        initialValues: {
            dict: [],
            fields: {}
        }
    })

    return (
        <div className="form-container">
            <div className="form-header">
                <FormNavigator/>
            </div>
            <div className="form-composite">
                <FormProvider form={form}>
                    <FormFieldsPanel/>
                    <FormCanvasPanel/>
                    <FormSettingPanel/>
                </FormProvider>
            </div>
        </div>
    )
}

export default App
