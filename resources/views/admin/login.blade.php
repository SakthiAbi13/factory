<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  {{-- <link rel="icon" href="{{ asset('assets/img/mini_logo.png') }}" type="image/png"> --}}
  <title>Login </title>
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('assets/admin/css/app.css') }}">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="{{ asset('assets/admin/css/adminlte.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/admin/page/css/login.css') }}">
  <link rel="manifest" href="{{ asset('assets/admin/favicon/manifest.json') }}">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="{{ asset('assets/admin/favicon/ms-icon-144x144.png') }}">
  <meta name="theme-color" content="#ffffff">
</head>

<body class="hold-transition login-page">
  <div class="login-box">
    <!-- /.login-logo -->
    <div class="card card-outline card-primary">
      <div class="card-header text-center">
        {{-- <a href="#" class="h1"><img src="{{asset('assets/img/logo.png')}}" alt=""></a> --}}
        <p class="h3 text-primary">Rotary</p>

      </div>
      <div class="card-body">

        @if ($errors->any())
        <p class="text-danger">{{ $errors->first() }}</p>
        @endif
        <form action="{{url('loginVerify')}}" method="post">
          @csrf
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email" name="email" required>
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" name="password" required>
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            {{-- <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember">
                <label for="remember">
                  Remember Me
                </label>
              </div>
            </div> --}}
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block black-text float-end">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <!-- <div class="social-auth-links text-center mt-2 mb-3">
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div> -->
        <!-- /.social-auth-links -->

        <!-- <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p> -->
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.login-box -->

  <!-- jQuery -->
  <script src="{{ asset('assets/admin/vendor/libs/jquery/jquery.min.js') }}"></script>
  <!-- Bootstrap 4 -->
  <script src="{{ asset('assets/admin/vendor/libs/bootstrap.bundle.min.js') }}"></script>
  <!-- assets/adminLTE App -->
  <script src="{{ asset('assets/admin/vendor/js/assets/adminlte.min.js') }}"></script>
</body>

</html>
