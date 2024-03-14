<?php

header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Cache-Control: post-check=0, pre-check=0', false);
header('Pragma: no-cache');
header('X-Frame-Options: SAMEORIGIN');

?>
<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <title>{{ isset($title) ? $title . ' | ' : '' }} Project</title>
    <base href="{{ config('APP_URL') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
        <!-- Favicon -->
            <!-- Favicon -->
    {{-- <link rel="shortcut icon" type="image/x-icon" href="{{ asset('favicon/favicon.svg?ver=1') }}"> --}}
    <meta name="theme-color" content="#ffffff">
    @section('styles')

    {{-- <link rel="icon" href="{{ asset('assets/img/mini_logo.png') }}" type="image/png"> --}}
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome Icons -->
        <link rel="stylesheet" href="{{ asset('assets/admin/css/app.css') }}">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{ asset('assets/admin/css/adminlte.css') }}">
        <!-- Loader Css -->
        <link rel="stylesheet" href="{{ asset('assets/admin/css/common.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/admin/vendor/libs/sweetalert2/sweetalert2.min.css') }}">
         <!-- Select2 -->
        <link rel="stylesheet" href="{{ asset('assets/admin/vendor/libs/select2/css/select2.css') }}">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        {{-- New --}}
        <style>
            .swal2-container.swal2-center>.swal2-popup {
                grid-column: 2;
                grid-row: 2;
                align-self: center;
                justify-self: center;
                font-size: inherit;
            }
            /* footer{
                background-image: linear-gradient(10deg ,#3838f6  ,  #353535);
                color:white;
                display:block;
                height: 10vh;
                /* width:100vw; */
                /* position: fixed;
                bottom:0%;
            } */
            /* .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 10px;
                z-index: 9999;
            } */

            @media only screen and (max-width: 600px) {
                .footer {
                    position: static;
                }
            }
            .btn-group, .btn-group-vertical {
                position: relative;
                display: inline-block;
                vertical-align: middle;
                float: right;
            }

            /* footer > a:hover{

                color: yellow;
            } */
            .nav-link {
            font-size: 14px !important;
            transform: none !important;
            }
            .sidebar {
            position: fixed !important;
            }


           </style>

    @show
</head>

<body class="hold-transition sidebar-mini body">
    <div class="container-fluid loader-main" style="display:none;">
        <div class="loader"></div>
    </div>

    <div class="wrapper">

        <!-- Top Menu -->
        @include('layouts.admin.top')
        <?php
        function active_class($path, $active = 'active')
        {
            return call_user_func_array('Request::is', (array) $path) ? $active : '';
        }

        // For checking activated route
        function is_active_route($path)
        {
            return call_user_func_array('Request::is', (array) $path) ? 'true' : 'false';
        }

        // For add 'show' class for activated route collapse
        function show_class($path)
        {
            return call_user_func_array('Request::is', (array) $path) ? 'show' : '';
        }



        $banner_route = ['banners' , 'banners-add' , 'banners-edit' , 'banners-view' ];
        $event_tickers_route = [ 'event-tickers' , 'event-tickers-add' , 'event-tickers-edit' , 'event-tickers-view' ];
        $types_route = ['types' , 'types-add' , 'types-edit' , 'types-view' ];
        $months_route = ['months' , 'months-add' , 'months-edit' , 'months-view' ];
        $teams_route = ['teams' , 'teams-add' , 'teams-edit' , 'teams-view' ];
        $events_route = ['events' , 'events-add' , 'events-edit' , 'events-view' ];

        ?>
        <!-- Side Menu -->
        @include('layouts.admin.left')

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

            <form id="delete_form">
                @csrf
                <input type="hidden" name="id" id="delete_id">
            </form>
            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    @yield('content')
                </div>
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Footer -->
        @include('layouts.admin.footer')

    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->
    @section('scripts')
        <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <!-- Bootstrap 4 -->
        <script src="{{ asset('assets/admin/vendor/libs/bootstrap/js/bootstrap.bundle.js') }}"></script>
        <!-- Sweetalert -->
        <script src="{{ asset('assets/admin/vendor/libs/sweetalert2/sweetalert2.min.js') }}"></script>
        {{--  Select 2 jquery plug-in  --}}
        <script src="{{ asset('assets/admin/vendor/libs/select2/js/select2.full.min.js') }}"></script>
        <!--Moment -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js"></script>
        <!--Jquery Validate -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
        <!-- AdminLTE App -->
        <script src="{{ asset('assets/admin/vendor/js/adminlte.js') }}"></script>
        {{-- ckEditor --}}
        <script src="https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js"></script>
        <script>
            var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            $.validator.addMethod("noSpaceName", function(value) {
                return value.trim().length != 0;
            }, 'Please enter a valid name.');
            $.validator.addMethod("noSpaceDetails", function(value) {
                return value.trim().length != 0;
            }, 'Please enter a valid details.');
            $.validator.addMethod("password_rules", function(value) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
                },
                'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
            );

            $.validator.addMethod('filesize', function(value, element, param) {
                return this.optional(element) || (element.files[0].size <= param * 1000000)
            }, 'File size must be less than {0} MB');
            const showLoader = () => {
                $(".loader-main").show();
                $(".body").addClass('body');
            };
            const hideLoader = () => {
                $(".body").removeClass('body');
                $(".loader-main").hide();
            };
            const delete_row = (url, id) => {
                Swal.fire({
                        title: `Are you sure you want to delete this record?`,
                        text: "If you delete this, it will be gone forever.",
                        icon: "warning",
                        allowOutsideClick: false,
                        confirmButtonText: `Yes Confirm`,
                        showCancelButton: true
                    })
                    .then((willDelete) => {
                        if (willDelete.isConfirmed) {
                            let final_url = "{{ url('') }}/" + url;
                            $('#delete_id').val(id);
                            $('#delete_form')
                                .attr('action', final_url)
                                .attr('method', 'POST')
                                .submit();
                        }
                    });
            };

            const block_row = (url, id,name) => {
                Swal.fire({
                        title: `Are you sure you want to `+name+` this user`,
                        text: "This action is reversible",
                        icon: "warning",
                        allowOutsideClick: false,
                        confirmButtonText: `Yes Confirm`,
                        showCancelButton: true
                    })
                    .then((willDelete) => {
                        if (willDelete.isConfirmed) {
                            let final_url = "{{ url('') }}/" + url;
                            $('#delete_id').val(id);
                            $('#delete_form')
                                .attr('action', final_url)
                                .attr('method', 'POST')
                                .submit();
                        }
                    });
            };



            const status_row = (url, id,status,table) => {

                if(status==1) {
                    name = 'block';
                } else {
                    name = 'unblock';
                }
                console.log(url+' '+id+' '+status+' '+table);
                Swal.fire({
                        title: `Are you sure you want to `+name+``,
                        icon: "warning",
                        allowOutsideClick: false,
                        confirmButtonText: `Yes Confirm`,
                        showCancelButton: true
                    })
                    .then((willDelete) => {
                        if (willDelete.isConfirmed) {
                            if(status==1) { update = 0; } else { update = 1; }
                            console.log(url);
                            $.ajax({
                                url: "{{ url('') }}/" + url,
                                type: "POST",
                                data: {id: id,"_token": "{{ csrf_token() }}",status:status},
                                dataType: "html",
                                success: function (data) {
                                    Swal.fire({
                                        title: data+` successfully!`,
                                        icon: "success"
                                    });
                                    location.reload();
                                }
                            });
                        } else {
                            if(status==1) {
                                $('#'+id).prop('checked', true);
                            } else {
                                $('#'+id).prop('checked', false);
                            }

                        }
                    });


            };
        </script>
    @show
</body>
<footer class="main-footer footer">
    <strong>Copyright &copy; 2014-2023 <a href="https://techovirish.com/" class="text-light">Techo Virish</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
    <b>Version</b> 1.0.0
    </div>
    </footer>

</html>
