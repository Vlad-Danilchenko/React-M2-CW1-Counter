import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
// import initialTodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  return (
    <>
      <h1>Состояние компонента</h1>

      <Counter initialValue={10} />
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}

      {/* <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
    </>
  );
};

export default App;