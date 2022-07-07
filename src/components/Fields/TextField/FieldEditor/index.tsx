import {lazy} from 'react'
import createFieldEditor from '../../createFieldEditor'

const TextField = lazy(() => import('./InlineEditor'))

export default createFieldEditor({renderer: TextField})
