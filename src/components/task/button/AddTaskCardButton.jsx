import React from 'react';
import { v4 } from 'uuid';

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = v4();
    // タスクカードを追加する
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item-${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardAreaButton">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
