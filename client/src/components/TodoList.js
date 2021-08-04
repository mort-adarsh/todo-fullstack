import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import axios from 'axios';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [l, setl] = useState(0)
     useEffect(() => {
         (async()=>{
            let arr = await axios.get('/gdata');
            //console.log(arr.data)
            if(arr){
                let obj = (arr.data)
                setl(obj.length)
                setTaskList(obj)
            }
         })()
         
        //let arr = localStorage.getItem("taskList")
       // if(arr){
            //     let obj = JSON.parse(arr)
            //     setl(obj.length)
            //     setTaskList(obj)
            // }
    }, [l])


    const deleteTask = async(id) => {
        //localStorage.setItem("taskList", JSON.stringify(tempList))
        
        try {
            await axios.delete(`/dtask/${id}`)
                 .then(function(response) {
                     console.log(response);
                 })
         } catch (err) {
             console.log(err.message);
         }
         setl(taskList.length-1)
        //window.location.reload()
    }

    const updateListArray = async(obj, index) => {
        // let tempList = taskList
        // tempList[index] = obj
        // localStorage.setItem("taskList", JSON.stringify(tempList))
        // setTaskList(tempList)
        // setl(tempList.length)
        // //window.location.reload()

        obj.index = index
        const value = obj
        // localStorage.setItem("taskList", JSON.stringify(tempList))
        try {
           await axios.put('/etask', {
                    value
                })
                .then(function(response) {
                    console.log(response);
                })
        } catch (err) {
            console.log(err.message);
        }
        setl(taskList.length)

    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = async (taskObj) => {
        
        let tempList = taskList
        tempList.push(taskObj)
        const value = taskObj
            // localStorage.setItem("taskList", JSON.stringify(tempList))
            try {
               await axios.post('/ctask', {
                        value
                    })
                    .then(function(response) {
                        console.log(response);
                    })
            } catch (err) {
                console.log(err.message);
            }

        setTaskList(taskList)
        setl(tempList.length)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h1>Todo List</h1>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Task</button>
            </div>
            
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} key={index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;