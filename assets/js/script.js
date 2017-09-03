//Strike through todos on click
$(".todo-list").on('click', '.todo-item', function() {
	$(this).toggleClass('done')
})

$('.todo-list').on('click', '.delete', function(event) {
	$(this).parent().fadeOut(600, function() {
		$(this).remove()
	})
	event.stopPropagation()
})

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var newTodo = $(this).val()
		$('.todo-list').append('<li class="todo-item"><span class="delete"><i class="fa fa-trash"></i></span> '+newTodo+'</li>')
		$(this).val('')
	}
})

$('.fa-plus').on('click', function() {
	$("input[type='text']").fadeToggle()
})