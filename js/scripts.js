// Business Logis:
function toDo (creator, task, description, originDate, dueDate, collaborators) {
  this.toDoCreator = creator;
  this.toDoTask = task;
  this.toDoDescription = description;
  this.toDoOriginDate = originDate;
  this.toDoDueDate = dueDate;
  this.toDoCollaborators = collaborators;
}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputCreator = $("input#creator").val();
    var inputTask = $("input#task").val();
    var inputDescription = $("input#description").val();
    var inputOriginDate = $("input#start-date").val();
    var inputDueDate = $("input#due-date").val();
    var inputCollaborators = $("input#collaborators").val();

    var newTask = new toDo(inputCreator, inputTask, inputDescription, inputOriginDate, inputDueDate, inputCollaborators);

    $("ul#task-list").append("<li><span class='tasks'>" + newTask.toDoTask + "</span></li>");

    $(".tasks").last().click(function() {
      $("#show-task").show();
      $("show-task h2").text(newTask.toDoTask);
      $(".taskCreator").text(newTask.toDoCreator);
      $(".taskDescription").text(newTask.toDoCreator);
      $(".taskStart").text(newTask.toDoOriginDate);
      $(".taskDue").text(newTask.toDoDueDate);
      $(".taskCollaborators").text(newTask.toDoCollaborators);

    });

    
    }
  }
}
