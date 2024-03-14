@extends('layouts.admin.app')
@section('styles')
    @parent
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/libs/select2/css/select2.css') }}">
@stop
@section('content')
    <!-- Content Header (Page header) -->

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">{{$title}}</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ url('/') }}">Home</a></li>
                        @php $url = $route; $table_name = 'invoices_form'; @endphp
                        <li class="breadcrumb-item"><a href="{{ url($url) }}">Project</a></li>

                        <li class="breadcrumb-item active">{{$title}}</li>
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
            @csrf
             {{--  title	club_name	date	location	budget	chairman	secretary	description	is_active
		 --}}

                <table class="table table-hover table-bordered ">

                    <tbody>
                       {{-- row --}}
                        <tr>
                            @php $var1 = 'title';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                {{$data->$var1}}
                            </td>
                        </tr>
                         {{-- row --}}
                         <tr>

                            <th scope="row">Project Type</th>
                            <td>
                                {{$data->project_type}}
                            </td>
                        </tr>
                        @if($data->project_type == 'OTHERS')
                            {{-- row --}}
                            <tr>

                                <th scope="row">Other Project Type</th>
                                <td>

                                    @php $var = $data->other_project_type;$vars = explode( '_' , $var);
                                    $vars = implode( ' ',$vars);$other_project_type =ucwords($vars);@endphp
                                    {{$other_project_type}}
                                </td>
                            </tr>
                                @if($data->other_project_type == 'monthly_project')
                                    {{-- row --}}
                                    <tr>

                                        <th scope="row">Month</th>
                                        <td>
                                            {{$data->month->name}}
                                        </td>
                                    </tr>
                                @endif
                            @endif
                        {{-- row --}}
                          <tr>
                            @php $var1 = 'club_name';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                {{$data->$var1}}
                            </td>
                        </tr>

                        {{-- row --}}
                          <tr>
                            @php $var1 = 'image';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                <img src = "{{asset('Project/images/')}}/{{$data->$var1}}" width="50" height="50">
                            </td>
                        </tr>
                         {{-- ,  title	club_name	date	location	budget	chairman	secretary	description	is_active
		 --}}


                         {{-- row --}}
                         <tr>
                            @php $var1 = 'date';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                {{$data->$var1}}
                            </td>
                        </tr>
                          {{-- row --}}
                          <tr>
                            @php $var1 = 'location';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                {{$data->$var1}}
                            </td>
                        </tr>

                         {{-- row --}}
                         <tr>
                            @php $var1 = 'budget';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                               {{$data->$var1}}
                            </td>
                        </tr>
                          {{-- row --}}
                          <tr>
                            @php $var1 = 'chairman';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                {{$data->$var1}}
                            </td>
                        </tr>
                           {{-- row --}}
                           <tr>
                            @php $var1 = 'secretary';$var3 = explode( '_' , $var1);
                            $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                            <th scope="row">{{$var3}}</th>
                            <td>
                                {{$data->$var1}}
                            </td>
                        </tr>


                                  {{-- row --}}
                            <tr>
                                @php $var1 = 'description';$var3 = explode( '_' , $var1);
                                $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                                <th scope="row">{{$var3}}</th>
                                <td>
                                     {!!($data->$var1)!!}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Images</th>
                                <td>
                                    @php $logos = $data->gallery ; @endphp
                                   @if(!empty($logos))
                                    @foreach($logos as $logo)
                                        <img src = "{{asset('Project/images/gallery')}}/{{$logo->images}}" width="50" height="50">
                                    @endforeach
                                    @endif
                                <td>
                            </tr>
                            <tr>
                                <th scope="row">Videos</th>
                                <td>
                                    @php $videos = $data->video ; @endphp
                                   @if(!empty($videos))
                                    @foreach($videos as $video)
                                        <a href="https://www.youtube.com/embed/{{$video->url}}" target="_blank" >{{$video->url}} </a>   <br>
                                    @endforeach
                                    @endif
                                <td>
                            </tr>
                               {{-- row --}}
                               <tr>
                                @php $var1 = 'created_at';$var3 = explode( '_' , $var1);
                                $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                                <th scope="row">{{$var3}}</th>
                                <td>
                                    {{$data->$var1}}
                                </td>
                            </tr>
                            {{-- row --}}
                            <tr>
                                @php $var1 = 'updated_at';$var3 = explode( '_' , $var1);
                                $var4 = implode( ' ',$var3);$var3 =ucwords($var4);@endphp
                                <th scope="row">{{$var3}}</th>
                                <td>
                                    {{$data->$var1}}
                                </td>
                            </tr>
                           {{-- , company_name , owner_name , profile_picture , company_logo , category_id , website , email , address , phone_number , whatsapp_number , fb_link , twitter_link , utube_link , insta_link , linkedin_link , google_map_link , desigination , description , is_active , created_at , updated_at
		 --}}
                      {{-- row --}}
                      <tr>
                        <th scope="row">Is Active</th>
                        <td>
                            @if(!empty($data->is_active))
                                @if($data->is_active == 1)
                                <span class="text-success"><strong> {{'Enable'}} </strong></span>
                                @else
                                <span class="text-danger"><strong>{{'Disable'}} </strong></span>
                                @endif
                            @endif
                        </td>
                      </tr>

                    </tbody>
                  </table>
        </div>
    </div>

@endsection
@section('scripts')
    @parent
     <!-- Select2 -->
     <script src="{{ asset('assets/admin/vendor/libs/select2/js/select2.full.min.js') }}"></script>
    <script>

    </script>
@stop
