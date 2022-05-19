import { useState } from 'react';
import * as C from './styles'

import { Item } from '../../types/Item'
import { categories } from '../../data/categories';

import { convertToDate } from '../../helpers/dateFilter'

type InputAreaProps = {
  onAdd: (item: Item) => void;
}

export function InputArea({ onAdd }: InputAreaProps){
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
  
  const categoryKeys: string[] = Object.keys(categories);

  function handleAddItem(){
    const errors: string[] = []

    if(isNaN(new Date(dateField).getTime())){
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)){
      errors.push('Categoria inválida!');
    }
    if(titleField === ''){
      errors.push('Valor inválido!')
    }
    if(valueField <= 0){
      errors.push('Valor inválido!');
    }

    if(errors.length > 0){
      alert(errors.join("\n"))
    }else{
      onAdd({
        date: convertToDate(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      })
      clearFields()
    }
  }

  const clearFields = () =>{
    setDateField('')
    setCategoryField('')
    setTitleField('')
    setValueField(0)
  }
  
  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input 
          type="date"
          value={dateField}
          onChange={event => setDateField(event.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>    
        <C.Select
          value={categoryField}
          onChange={e => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) =>(
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input 
          type="text"
          value={titleField}
          onChange={event => setTitleField(event.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input 
          type="number"
          value={valueField}
          onChange={event => setValueField(parseFloat(event.target.value))}
        />
      </C.InputLabel>
      <C.Button onClick={handleAddItem}>Adicionar</C.Button>
    </C.Container>
  )
}