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
        success: (response) => {
            document.cookie = "access_token=" + response + "";
            location.href = "/home.html";
            setTimeout(() => $('#pleaseWaitDialog').modal('hide'), 0)
        },
        error: (response) => {
            $('.toast-body').text(response.statusText);
            $('.toast').toast({ delay: 4000 }).toast('show');
            setTimeout(() => $('#pleaseWaitDialog').modal('hide'), 0)
        }
    });
});

function ShowLoader() {
    $('#pleaseWaitDialog').modal({ backdrop: 'static', keyboard: false });
}