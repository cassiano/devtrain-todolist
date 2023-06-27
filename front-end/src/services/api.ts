import axios from 'axios'
import { TaskType } from '../components/task_manager'

export const listTasksApi = () => axios.get<TaskType[]>('http://127.0.0.1:3000/api/tasks')
