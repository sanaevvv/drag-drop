import { v4 as uuidv4 } from 'uuid';

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuidv4();
    e.preventDefault();
    if(inputText === '') return;
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText('')
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="Add a task"
          className="taskAddInput"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
