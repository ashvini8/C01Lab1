import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Keyboard } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'; 

const ToDoList = ({ initialToDo }) => {
    const [toDos, setToDos] = useState(initialToDo.map((toDo) => ({ id: uuidv4(), title: toDo })));

    const addToDo = ( newTitle ) => {
        setToDos((prevToDos) => [
            ...prevToDos, { id: uuidv4(), title: newTitle }
        ]);
    }

    const removeToDo = (id) => {
        setToDos((prevToDos) =>
            prevToDos.filter((toDo) => toDo.id !== id)
        );
    }

    return (
        <View style={styles.todoListContaine}>
          {toDos.map((toDo) => (
            <View key={toDo.id} style={styles.todoItem}>
              <Text>{toDo.title}</Text>
              <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
            </View>
          ))}
          <AddTask onAddTask={addToDo} />
        </View>
     );

};

ToDoList.defaultProps = {
    initialToDo: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});


export default ToDoList;