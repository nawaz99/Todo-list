import React , { Component }from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=  this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
    
    this.state = {
      items:[],
      id:uuid(),
      item:'',
      editItem:false
    };
}


handleChange(e){
  this.setState({
    item:e.target.value
  });
 }


handleSubmit(e){
   e.preventDefault();

const newItem = {
  id:this.state.id,
  title:this.state.item
}

this.setState({
  items:[...this.state.items,newItem],
  item:'',
  id:uuid(),
  editItem:false
})
}

clearList = () =>{
  this.setState({
    items:[]
  })
}
handleDelete = (id)=>{
const  updatedItems = this.state.items.filter(item =>{
  return item.id !== id;
});
this.setState({
  items:updatedItems
})
}

handleEdit =id =>{
  const  updatedItems = this.state.items.filter(item =>{
    return item.id !== id;
  });
  const selectedItem = this.state.items.find(item => item.id === id);
  this.setState({
    items:updatedItems,
    item:selectedItem.title,
    editItem:true,
    id:id
  })
}
 
 render(){
  return (
    <div className='container'>
       <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'>todo input</h3>
       <TodoInput item={this.state.item} 
       handleSubmit={this.handleSubmit}
       handleChange={this.handleChange}
       editItem={this.state.editItem}/>
       
       <TodoList items={this.state.items}
        clear={this.clearList} 
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
        </div>
       </div>
    </div>
       );
    }
 }
  

export default App;
