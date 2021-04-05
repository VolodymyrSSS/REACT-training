import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} 
        <FaTimes 
          style={{color:'red'}} 
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p style={{color:'blue'}}>{task.day}</p>
    </div>
  )
}

Task.propsType = {
  task: PropTypes.object
}

export default Task
