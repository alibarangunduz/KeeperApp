import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';

function App() {
  const [items, setItems] = useState([]);
  
  function addNote(newValue) {
    setItems(prevNote => {
      return [...prevNote, newValue];
    })
  }

  function deleteNote(id) {
    setItems(prevValue => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div >
     <Header />
      <CreateArea 
        addItem = {addNote}
      />
      
        {items.map((item, index) => {
          return (
            <Note 
              key = {index}
              id = {index}
              title = {item.title}
              content = {item.content}
              onDelete = {deleteNote}
            />      
          );
        })}
      
     <Footer />
    </div>
  );
}

export default App;
