import { FaTimes } from 'react-icons/fa'

type TaskProps ={
    task: Task,
    onDelete:(id: number)=>void,
    onToggle:(id:number)=> void
}

type Task={
    text:string,
    day: string,
    id: number,
    reminder: boolean
}
const Task = ({ task, onDelete, onToggle }: TaskProps) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
