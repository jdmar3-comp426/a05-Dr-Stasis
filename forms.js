window.addEventListener( "load", function () {
    function sendData() {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new FormData(form);
        sendRequest.addEventListener( "error", function(event){
            alert( 'Submission unseuccessful! Please try again.');
        });
        sendRequest.addEventListener( "load", function(event){
            alert( 'Your account was created');
        });
        sendRequest.open ("POST", "http://localhost:5000/app/new/user");
        sendRequest.send(signupInfo);
    }
    const form = document.getElementById("signup");

    form.addEventListener( "submit", function (event){
        this.event.preventDefault();
        sendData;
    });
})