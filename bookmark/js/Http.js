const domain = "http://api.mowangtao.com";

function post(url, data, vuem, success) {
    $.ajax({
        type: "POST",
        url: domain + url,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        timeout: 20000,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success: function (res, textStatus, request) {
            console.log(request);
            if (res.code == 1) {
                vuem.$message({
                    message: res.msg,
                    type: 'warning'
                });
            }
            success ? success(res) : function () { };
        },
        error(e) {
            vuem.$notify.error({
                title: '网络异常',
                message: "请求出现一个错误...请联系网站管理者"
            });
            console.log(e);
        }
    });
}