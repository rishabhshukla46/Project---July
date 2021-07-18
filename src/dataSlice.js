import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 13,
  companies: ['Google', 'Facebook', 'GoldmanSachs'],
  roles: ['SDE-1', 'SDE-2', 'Manager', 'Analyst'],
  lanes: [
    {
      id: 'lane1',
      title: 'Phone Screen',
      label: '15 mins',
      cards: [
        { id: 'Card1', title: 'Noah Pastro', description: 'SDE-1', label: 'Google' },
        { id: 'Card2', title: 'Joan Crandon', description: 'SDE-2', label: 'Facebook' },
        { id: 'Card3', title: 'Adrian Lew', description: 'Manager', label: 'Google' },
        { id: 'Card4', title: 'Sam Jones', description: 'Analyst', label: 'Goldman Sachs' },
      ]
    },
    {
      id: 'lane2',
      title: 'Interview 1',
      label: '60 mins',
      cards: [
        { id: 'Card5', title: 'Leonard Lowly', description: 'SDE-1', label: 'Google' },
        { id: 'Card6', title: 'Brian Ballecz', description: 'SDE-2', label: 'Facebook' },
        { id: 'Card7', title: 'Marcel Tori', description: 'Manager', label: 'Google' },
      ]
    },
    {
      id: 'lane3',
      title: 'Interview 2',
      label: '90 mins',
      cards: [
        { id: 'Card8', title: 'Lori Sewell', description: 'SDE-2', label: 'Facebook' },
        { id: 'Card9', title: 'Johnny Mathros', description: 'Analyst', label: 'Goldman Sachs' },
      ]
    },
    {
      id: 'lane4',
      title: 'Onsite',
      label: '60 mins',
      cards: [
        { id: 'Card10', title: 'Tory Montres', description: 'SDE-1', label: 'Google' },
        { id: 'Card11', title: 'Sasha Kanyal', description: 'SDE-2', label: 'Facebook' },
        { id: 'Card12', title: 'Trey Marnell', description: 'Manager', label: 'Google' },
      ]
    },
    {
      id: 'lane5',
      title: 'Decision',
      label: '0/0',
      cards: [
        { id: 'Card13', title: 'Corey Dawson', description: 'Analyst', label: 'Goldman Sachs' },
      ]
    }
  ]
}

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    add: (state, obj) => {
      state.lanes[0].cards.push(obj.payload);
      if (!state.companies.includes(obj.payload.label)) {
        state.companies.push(obj.payload.label);
      }
      if (!state.roles.includes(obj.payload.description)) {
        state.roles.push(obj.payload.description)
      }
    },
    increment: (state) => {
      state.id += 1;
    },
  },
})

export const { add, increment } = counterSlice.actions

export default counterSlice.reducer