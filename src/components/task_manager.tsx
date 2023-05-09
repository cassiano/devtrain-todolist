import { FC } from 'react'
import { TaskType } from '../App'
import classNames from 'classnames'

type PropsType = {
  tasks: TaskType[]
}

const TaskManager: FC<PropsType> = props => {
  // console.log(props.tasks)

  return (
    <>
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <input className='new-todo' placeholder='What needs to be done?' autoFocus />
        </header>

        <section className='main'>
          <input id='toggle-all' className='toggle-all' type='checkbox' />
          <label htmlFor='toggle-all'>Mark all as complete</label>
          <ul className='todo-list'>
            {props.tasks.map(task => (
              <li className={classNames({ completed: task.done })}>
                <div className='view'>
                  <input className='toggle' type='checkbox' checked={task.done} />
                  <label>{task.title}</label>
                  <button className='destroy'></button>
                </div>
                <input className='edit' value='Taste JavaScript' />
              </li>
            ))}
          </ul>
        </section>

        <footer className='footer'>
          <span className='todo-count'>
            <strong>0</strong> item left
          </span>
          <ul className='filters'>
            <li>
              <a className='selected' href='#/'>
                All
              </a>
            </li>
            <li>
              <a href='#/active'>Active</a>
            </li>
            <li>
              <a href='#/completed'>Completed</a>
            </li>
          </ul>
          <button className='clear-completed'>Clear completed</button>
        </footer>
      </section>

      <footer className='info'>
        <p>Double-click to edit a todo</p>
        <p>
          Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a>
        </p>
        <p>
          Created by <a href='http://todomvc.com'>you</a>
        </p>
        <p>
          Part of <a href='http://todomvc.com'>TodoMVC</a>
        </p>
      </footer>
    </>
  )
}

export default TaskManager
