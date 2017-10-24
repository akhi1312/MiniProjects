// Code goes here


var todoList ={
  todos: [],
  

  
  addTodo: function(todoText) {
    this.todos.push({
       todoText : todoText,
       completed : false 
    });
  } ,
  
  changeTodo: function(position , todoText){
    this.todos[position].todoText = todoText;
  
  } ,
  
  deleteTodo: function(position){
    this.todos.splice(position ,1);
   
  } ,
  
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;

  } ,
  
  toggleAll : function() {
    
    var totalTodo = this.todos.length;
    var completedTodo = 0;
    
    // Completed todo List count 

    this.todos.forEach(function(todo){
      if(todo.completed === true){
         completedTodo++ ;
      }
    });
    // Case 1 if all tood list is completed make all false 
    if(totalTodo ===  completedTodo)
    {
        this.todos.forEach(function (todo){
        todo.completed = false;
      });
    }
    
    //   Case 2 Otherwise make all true ; 
    else {
      this.todos.forEach(function (todo){
        todo.completed = true;
      });
      
    }
    
  }
  
};


  
  var handlers = {
  
  addTodosButton : function(){
    var todoText = document.getElementById('addInputText');
    todoList.addTodo(todoText.value);
    todoText.value = '';
    view.displayTodo();
  } ,
  
  changeTodosButton : function(){
    
    var position = document.getElementById('changeTodoPosition');
    var changeTodoText = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(position.valueAsNumber , changeTodoText.value);
    position.value = '';
    changeTodoText.value = '';
    view.displayTodo();
   },
   
   deleteTodosButton : function(position){
    // var position = document.getElementById('deleteTodoposition');
     todoList.deleteTodo(position);
     position.value = '';
     view.displayTodo();
      } ,
      
  toggleCompletedTodosButton:function(){
    
    var position = document.getElementById('toggleCompletedodoposition');
    todoList.toggleCompleted(position.valueAsNumber);
     position.value = '';
     view.displayTodo();
   },
   
  toggleAllButton : function(){
        todoList.toggleAll();
        view.displayTodo();
   }
  };
  
  var view = {
    
    displayTodo : function(){
      
       var todoUl = document.querySelector('ul');
       todoUl.innerHTML = '';

      
      
      todoList.todos.forEach(function(todo ,position){
        
       var todoLi = document.createElement('li');
      
       var todoTextWithCompletion = '';
      
      if(todo.completed === true)
      {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      }
      else 
      {
        todoTextWithCompletion = '( ) ' + todo.todoText
      }
      
      todoLi.id = position ;
      todoLi.textContent = todoTextWithCompletion ;
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
     
        
      } , this);
      
    },
    
    createDeleteButton : function() {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },
    
    setUpEventListener : function(){
      
      var todoUl = document.querySelector('ul');
  todoUl.addEventListener('click' , function(event){
    
    
    var elementClicked = event.target ;
    // Check if clicked element is deletebutton only 
    
    if(elementClicked.className  === 'deleteButton')
    {
      handlers.deleteTodosButton(parseInt(elementClicked.parentNode.id));
    }
   // console.log(event.target.parentNode.id);
    
  });
  
    }
    
  };
  
  view.setUpEventListener();
  
  
