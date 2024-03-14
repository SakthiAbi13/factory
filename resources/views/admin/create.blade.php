@extends('layouts.admin.app')
@section('styles')
    @parent
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('vendor/libs/select2/css/select2.css') }}">
@stop
@section('content')
    <!-- Content Header (Page header) -->

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Admin</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ url('dashboard') }}">Home</a></li>
                        <li class="breadcrumb-item active">Add</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <div class="card">
        @include('utils.message')
        {{-- @if($errors->any())
            {!! implode('', $errors->all('<div class="alert alert-danger">:message</div>')) !!}
        @endif --}}
        <div class="card-body">
            {{-- {{ Form::open(['url' => 'store', 'files' => true, 'id' => 'admin_form']) }} --}}
            <form action="{{url('store')}}" method='POST' >
                @csrf
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="name">Name <span class='text-danger'>*</span></label>
                        <input name="name" id="name" type="text" placeholder="Name" class = 'form-control'>
                        {{-- {{ Form::text('category_name', '', ['class' => 'form-control', 'placeholder' => 'Name']) }} --}}
                        <span class="text-danger">
                            @error('name')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="email">Email  <span class='text-danger'>*</span></label>
                        {{-- {{ Form::select('parent_category',$category_list, null, ['placeholder' => 'Select Parent Category..', 'class' => 'form-control select2','required']) }} --}}
                        <label id="email" class="error" for="email"></label>
                        <input name="email" id="email" type="email" placeholder="Email" class = 'form-control'>
                        <span class="text-danger">
                            @error('email')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="password">Password  <span class='text-danger'>*</span></label>
                        {{-- {{ Form::file('category_img', ['class' => 'form-control', 'accept' => 'image/*']) }} --}}
                        <input name="password" id="password" type="password" class = 'form-control'>
                        <span class="text-danger">
                            @error('password')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="password_confirm">Confirm Password  <span class='text-danger'>*</span></label>
                        {{-- {{ Form::file('category_img', ['class' => 'form-control', 'accept' => 'image/*']) }} --}}
                        <input name="password_confirm" id="password_confirm" type="password" class = 'form-control'>
                        <span class="text-danger">
                            @error('password_confirm')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="status">Status  <span class='text-danger'>*</span></label>
                        {{-- {{ Form::text('category_desc', '', ['class' => 'form-control', 'placeholder' => 'Category Description']) }} --}}
                        <select name="status" id="status" class = 'form-control select'>
                            <option value="">Select</option>
                            <option value="1" >Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <span class="text-danger">
                            @error('status')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                </div>
            </div>
            {{-- {{ Form::submit('Save', ['class' => 'btn btn-primary float-right']) }} --}}
            {{-- {{ Form::close() }} --}}
            <input type="submit" name="Save" value="Save" class = ' btn btn-primary float-right'>
        </div>
    </div>

@endsection
@section('scripts')
    @parent
     <!-- Select2 -->
     <script src="{{ asset('vendor/libs/select2/js/select2.full.min.js') }}"></script>
    <script>
          $(function() {
            //Initialize Select2 Elements
            $('.select2').select2()
        });
        $('#admin_form').validate({
            ignore: '.ignore, .disabled',
            focusInvalid: false,
            rules: {
                name: {
                    required: true
                },
                email:{
                    required:true,
                    email:true
                },
                password:{
                    required:true,
                },
                confirm_password:{
                    required:true,
                    equalTo: "#password"
                },
                status: {
                    required:true
                }

            }
        });
    </script>
@stop
