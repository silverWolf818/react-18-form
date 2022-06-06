import React from 'react'
import './App.css'
import FormCanvasPanel from './components/FormCanvasPanel'
import FormFieldsPanel from './components/FormFieldsPanel'
import FormNavigator from './components/FormNavigator'
import FormSettingPanel from './components/FormSettingPanel'

function App() {
    return (
        <div className="form-container">
            <FormNavigator/>
            <div className="form-composite">
                <FormFieldsPanel/>
                <FormCanvasPanel/>
                <FormSettingPanel/>
            </div>
        </div>
    )
}

export default App
