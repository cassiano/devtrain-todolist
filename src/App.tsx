import { FC } from 'react'
import './App.css'
import TaskManager from './components/task_manager'

export type TaskType = {
  id: number
  title: string
  done: boolean
}

// Mocked data.
const TASKS: TaskType[] = [
  { id: 1, title: 'A', done: true },
  { id: 2, title: 'B', done: false },
  { id: 3, title: 'C', done: true },
]

const App: FC = () => <TaskManager tasks={TASKS} />

export default App
