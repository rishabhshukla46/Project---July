import React, { useState, useEffect } from 'react';
import Board from 'react-trello';
import { useSelector, useDispatch } from 'react-redux';
import { add, increment } from './dataSlice';
import Overlay from './components/OverLay/OverLay';
import Modal from './components/Modal/Modal';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const toggleModal = () => {
    setIsModal(!isModal);
  }

  const [candidate, setCandidate] = useState({
    name: "",
    company: "",
    role: "",
    notes: []
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setCandidate({ ...candidate, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: `Card${data.id + 1}`,
      title: candidate.name,
      description: candidate.company,
      label: candidate.role,
      draggable: true,
    }
    dispatch(add(obj));
    dispatch(increment());
    setCandidate({
      name: "",
      company: "",
      role: "",
      notes: []
    });
  }
  return (
    <div className="App">
      <div className="header">
        {isModal ? <Overlay toggleModal={toggleModal} /> : null}
        {isModal ? <Modal toggleModal={toggleModal} onChange={onChange} onSubmit={onSubmit} /> : null}
        <Button id="header-button" variant="contained" color="primary" onClick={toggleModal}>
          Add a Candidate
        </Button>
      </div>
      <Board data={JSON.parse(JSON.stringify(data))} />
    </div>
  );
}

export default App;
