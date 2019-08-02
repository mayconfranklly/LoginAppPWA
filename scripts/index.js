$('#frmLogin').submit((e) => {
    e.preventDefault();

    ShowLoader();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8090/api/Login',
        headers: {
            'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        dataType: 'JSON',
        data: JSON.stringify({
            Username: $('#inputEmail').val(),
            Password: $('#inputPassword').val(),
            CdMacDispositivo: 'testeMaycon'
        }),
        success: (response) => document.cookie = "access_token=" + response + "",
        complete: () => {
            location.href= "/home.html"
            $('#pleaseWaitDialog').modal('hide')
        },
        error: (response) => console.log(response)
    });
});

function ShowLoader() {
    $('#pleaseWaitDialog').modal();
}