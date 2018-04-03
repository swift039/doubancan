module.exports =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name = 'viewport' content="width=device-width,initial-scale=1">
    <title>koa server Html</title>
    <link herf = "https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    <script src="./jquery.min.js"></script>
    
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>hi<%= you %></h1>
                <p>this <%= me %></p>          
            </div>
            <div class="col-md-4">
                <p>测试静态文件</p>     
            </div>                 
        </div>                  
    </div>
</body>
</html>
    
`


