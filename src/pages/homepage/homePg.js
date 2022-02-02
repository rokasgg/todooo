import { useState } from 'react';
import '../../App.css';
import './home.css';
import { BiRocket, BiPlusCircle, BiTrash, BiCheckCircle } from "react-icons/bi";
import ProfileArea from './profileArea';
function HomePg() {

    const [todo, setToodo] = useState('');
    const [todosList, setTodosList] = useState([{ task: 'clean your room', finished: false, key: 0, starred: false }, { task: 'make your room', finished: false, key: 1, starred: false }, { task: 'do dishes', finished: false, key: 2, starred: false }, { task: 'cook food', finished: false, key: 3, starred: false }]);
    const [doneTodos, setCompletedTodos] = useState([])


    const addTodo = (e) => {
        e.preventDefault();
        const currectList = Array.from(todosList);
        if (todo === '') return false;
        else if (todosList.length === 0) {
            currectList.push({ task: todo, finished: false, key: 0, starred: false })
            setTodosList(currectList)
            setToodo('')
        }
        else {
            // console.log('BHYs', currectList);
            currectList.push({ task: todo, finished: false, key: currectList[currectList.length - 1].key + 1, starred: false })
            setTodosList(currectList)
            setToodo('')
        };

    }

    function completeTodo(index) {
        deleteTodo(index, 'completing');
        const completedTodos = Array.from(doneTodos);
        completedTodos.push(todosList[index])
        setCompletedTodos(completedTodos)
        console.log(index, 'List of finised todos', completedTodos);

    }

    const deleteTodo = (index, action) => {
        let interStart;
        const currectList = Array.from(todosList);
        if (action !== 'completing') currectList[index].deleting = 'deleting';
        else currectList[index].deleting = 'finished';


        setTodosList(currectList)
        interStart = setInterval(() => {
            if (todosList.length === 0) setTodosList([])
            const currectList = Array.from(todosList);
            currectList.splice(index, 1)
            console.log(index, 'removed', currectList);
            setTodosList(currectList);
            clearInterval(interStart);
        }, 1000)


    }


    function setPriority(index) {
        const currectList = Array.from(todosList);
        if (currectList[index].starred === true) currectList[index].starred = false;
        else if (currectList[index].starred === false) currectList[index].starred = true;
        setTodosList(currectList)
        console.log(index, 'starred item', currectList);
    }


    return (
        <div className="homeBox">
            <ProfileArea finished={doneTodos.length} unfinished={todosList.length} />
            <div style={{ fontSize: '20px', fontWeight: '700' }}>Lazy people are always eager to be doing something...</div>
            <form className='addTaskFields' onSubmit={addTodo}>
                <input className='todoInput' placeholder='Enter you todo' value={todo} onChange={item => setToodo(item.target.value)}></input>
                <button className='addButt' ><BiPlusCircle size={17} color='black' type='submit' /></button>
            </form >
            <div className='todoListField'>
                {todosList.map((item, index) =>
                    <div className={item.deleting === 'deleting' ? 'taskFieldDelete' : item.deleting === 'finished' ? 'taskFieldFinish' : 'taskField'}>
                        <div className='todo' key={item.key}>{item.task}</div>
                        <button className='addButt' style={{ borderRadius: '0px' }} onClick={() => completeTodo(index)}><BiCheckCircle size={17} color='black' /></button>
                        <button className='addButt' style={{ borderRadius: '0px' }} onClick={() => setPriority(index)}><BiRocket size={17} color={item.starred ? 'orange' : 'black'} /></button>
                        <button className='addButt' onClick={() => deleteTodo(index)}><BiTrash size={17} color='black' /></button>

                    </div>

                )}
            </div>
        </div>
    );
}

export default HomePg;