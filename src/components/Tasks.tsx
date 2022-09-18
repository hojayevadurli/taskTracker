import Task from './Task'


type TasksProps ={
    tasks: Task[],
    onDelete:(id: number)=>void,
    onToggle:(id:number)=> void
}
const Tasks =({tasks, onDelete, onToggle}: TasksProps)=>{    
  return (
    <>
    
     {tasks.map((task)=>(
      <Task key={task.id} task={task}
      onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks



