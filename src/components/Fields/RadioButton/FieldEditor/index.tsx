import {lazy} from 'react'
import createFieldEditor from '../../createFieldEditor'

const RadioButton = lazy(() => import('./InlineEditor'))

export default createFieldEditor({renderer: RadioButton})