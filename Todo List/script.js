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
    for(var i = 0 ; i < this.todos.length ;i++)
    {
      if(this.todos[i].completed === true)
      {
        completedTodo++;
      }
    }
    // Case 1 if all tood list is completed make all false 
    if(totalTodo ===  completedTodo)
    {
      for(var i = 0 ; i < this.todos.length ; i++)
      {
        this.todos[i].completed = false ;
      }
    }
    
    //   Case 2 Otherwise make all true ; 
    else {
      for(var i = 0 ; i < this.todos.length ; i++)
      {
        this.todos[i].completed = true ;
      }
      
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
   
   deleteTodosButton : function(){
     var position = document.getElementById('deleteTodoposition');
     todoList.deleteTodo(position.valueAsNumber);
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
      
      for(var i = 0 ; i < todoList.todos.length ; i++)
      {

      var todoLi = document.createElement('li');
      
      var todoTextWithCompletion = '';
      var todo = todoList.todos[i]
     
     
      if(todo.completed === true)
      {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      }
      else 
      {
        todoTextWithCompletion = '( ) ' + todo.todoText
      }
      
      todoLi.textContent = todoTextWithCompletion ;
      todoUl.appendChild(todoLi);
      }
      
    }
    
  };
  
