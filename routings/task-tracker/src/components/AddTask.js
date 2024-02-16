import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if(!text) {
      alert('Please, add task');
      return;
    }

    onAdd({text, day, reminder});

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task Content</label>
        <input 
          type='text' 
          value={text} 
          placeholder='type your task ...'
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type='text'
          value={day}
          placeholder='define your day and time'
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input className='btn btn-block' type='submit' value='Save task' />
    </form>
  )
};

export default AddTask
