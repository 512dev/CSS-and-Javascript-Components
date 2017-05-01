$(document).ready(function(){

   // jQuery methods go here...
$("#bars").click(function(event) {
	$('.bars-dropdown').toggle('fast');
});
 
 $('.modalButton2').click(function(event) {
 	vex.dialog.alert({
                message: 'Plain Theme Modal.  Other Options Available.',
                className: 'vex-theme-plain'
            })
 });

 $('.modalButton3').click(function(event) {
 	vex.dialog.open({
    message: 'Enter your username and password:',
    className: 'vex-theme-os',
    input: [
        '<input name="username" type="text" placeholder="Username" required />',
        '<input name="password" type="password" placeholder="Password" required />'
    ].join(''),
    buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
        $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
    ],
    callback: function (data) {
        if (!data) {
            console.log('Cancelled')
        } else {
            console.log('Username', data.username, 'Password', data.password)
        }
    }
})
 });
