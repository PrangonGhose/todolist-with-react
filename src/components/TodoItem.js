/* eslint-disable */
import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem(props) {
  const [state, setState] = useState(
    {
      editing: false,
    }
  )
  const { completed, id, title } = props.todo;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  const handleEditing = () => {
    setState({
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = event => {
    if (event.key === 'Enter') {
      setState({
        editing: false,
      })
    }
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)} />
        <button onClick={() => props.deleteTodoProps(id)}><FaTrash /></button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type='text'
        className={styles.textInput}
        style={editMode} value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}