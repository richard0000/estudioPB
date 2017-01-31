<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  @include('layouts.links')
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no" />
  <title>Estudio PB</title>
</head>
<body class="dark">
  <div class="loader">
    <img src="img/loader.GIF" alt="loader"> 
  </div>
  <div class="content-block">
    <div class="content-main">
      @include('layouts.nav')

      @include('layouts.top-slider')
      
      @include('layouts.about') 

      @include('layouts.services')

      @include('layouts.team')

      @include('layouts.contact')
    </div>
  </div>  
</body>
@include('layouts.scripts')
</html>