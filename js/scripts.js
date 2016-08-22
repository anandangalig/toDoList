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


    $(".task-list").append("<div class='checkbox'><input type='checkbox'>" + " " + inputTask + "</div>")

    $(".checkbox").last().click(function() {
      $("#show-task").show();
      $(".taskName").text(newTask.toDoTask);
      $(".taskCreator").text(newTask.toDoCreator);
      $(".taskDescription").text(newTask.toDoDescription);
      $(".taskStart").text(newTask.toDoOriginDate);
      $(".taskDue").text(newTask.toDoDueDate);
      $(".taskCollaborators").text(newTask.toDoCollaborators);
    });
  });

  $(".remove-complete").click(function() {
    $(":checked").parent().remove();
    $("#show-task").hide();
  });
});
