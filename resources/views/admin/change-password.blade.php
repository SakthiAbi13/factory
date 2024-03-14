@extends('layouts.admin.app')
@section('styles')
    @parent

@stop
@section('content')
    <!-- Content Header (Page header) -->

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Change Password</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ url('/dashboard') }}">Home</a></li>
                        <li class="breadcrumb-item active">Change Password</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <div class="card">
        @include('utils.message')
        <div class="card-body">
            {{ Form::open(['url' => 'changePassword', 'files' => true, 'id' => 'users_form']) }}
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="current_password">Current Password <span class='text-danger'>*</span></label>
                        <input id="current_password" type="password" class="form-control" name="current_password" required>
                        <span class="text-danger">
                            @error('current_password')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="new_password">New Password <span class='text-danger'>*</span></label>
                        <input id="new_password" type="password" class="form-control" name="new_password" required>
                        <span class="text-danger">
                            @error('new_password')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="new_password_confirmation">Current Password <span class='text-danger'>*</span></label>
                        <input id="new_password_confirmation" type="password" class="form-control" name="new_password_confirmation"
                            required>
                        <span class="text-danger">
                            @error('current_password')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>

            </div>



            {{ Form::submit('Save', ['class' => 'btn btn-primary float-right']) }}
            {{ Form::close() }}
        </div>
    </div>

@endsection
@section('scripts')
    @parent
    <script>
        $('#users_form').validate({
            ignore: '.ignore, .disabled',
            focusInvalid: false,
            rules: {
                current_password: {
                    required: true,
                    noSpaceName: true
                },
                new_password: {
                    required: true,
                    noSpaceName: true,
                    password_rules: true
                },
                new_password_confirmation: {
                    required: true,
                    noSpaceName: true,
                    equalTo: "#new_password"
                }
            }
        });
    </script>
@stop
