import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import * as Styled from './styles'

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

  console.log(formFields)

  return (
    <Styled.Wrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='formFields'>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formFields?.map((field, i) => (
                <Draggable key={field.id} draggableId={field.id} index={i}>
                  {provided => (
                    <Styled.FormField
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}>
                      <input
                        label={field.label}
                        type={field.type}
                        name={field.name}
                      />
                      <label htmlFor={field.name}>
                        {field.label || 'Field Label'}
                      </label>
                    </Styled.FormField>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Styled.Wrapper>
  )
}
