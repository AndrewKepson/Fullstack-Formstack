import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import classes from './FormEditor.module.css'

export const FormEditor = ({ columns, fields, updateForm }) => {
  const [formFields, updateFormFields] = useState(fields)

  const handleDragEnd = result => {
    if (!result.destination) return

    const fields = [...formFields]
    const [updatedField] = fields.splice(result.source.index, 1)
    fields.splice(result.destination.index, 0, updatedField)

    updateFormFields(fields)
  }

  const handleSave = () => updateForm(formFields)

  return (
    <section className={classes.wrapper}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='formFields'>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formFields?.map((field, i) => (
                <Draggable key={field.id} draggableId={field.id} index={i}>
                  {provided => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={classes.formFieldWrapper}>
                      <input
                        label={field.label}
                        type={field.type}
                        name={field.name}
                      />
                      <label htmlFor={field.name}>
                        {field.label || 'Field Label'}
                      </label>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  )
}
