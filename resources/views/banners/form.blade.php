@extends('layouts.admin.app')
@section('styles')

    @parent
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/libs/select2/css/select2.css') }}">
    <!-- Include the Dropzone.js library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.js"></script>

    <style>
            .ck-editor__editable[role="textbox"] {
                /* editing area */
                min-height: 200px;
            }
            .addmore{
                margin-left: 11px;
            }
            .preview-container {
                display: flex;
                flex-wrap: wrap;
            }
            .del{
                /* position: absolute; */
                position: relative;
                top: 0px;
                height: 25px;
                width: 15px;
                text-align: center;
                right: 15px;
            }

            .uvdel{
                position: absolute;
                top: 5px;
                right: 5px;
                height: 25px;
                width: 25px;
                text-align: center;
                background-color: #ff0000;
                color: #ffffff;
                border-radius: 50%;
                line-height: 25px;
                font-size: 16px;
                cursor: pointer;
                z-index: 1;
            }
            /* position: absolute;
            top: 5px;
            right: 5px;
            height: 25px;
            width: 25px;
            text-align: center;
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50%;
            line-height: 25px;
            font-size: 16px;
            cursor: pointer;
            z-index: 1; */

            .pdel{
                /* position: absolute; */
                position: relative;
                top: 0px;
                height: 25px;
                width: 15px;
                text-align: center;
                right: 15px;
            }

            .preview {
                margin-right: 10px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                padding: 5px;
                max-width: 200px;
            }

            .preview img {
                max-width: 100%;
            }


        </style>
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
                        @php $url = $route; $table_name = 'project_form'; @endphp
                        <li class="breadcrumb-item"><a href="{{ url($url) }}">{{$title}}</a></li>

                        <li class="breadcrumb-item active">{{(!empty($data))? 'Edit '.$title : 'Add '.$title}}</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    @if(!empty($data))
    {{ Form::model($data,['url' => [$url.'/update/'.$data->id], 'files' => true, 'id' => 'project_table','class'=>'']) }}
    @endif
    @if(empty($data))
    {{ Form::open([ 'url' => $url.'/store', 'files' => true, 'id' => 'project_table','class'=>'']) }}
    @endif
    @csrf
    <div class="card">
        @include('utils.message')
        {{-- @if($errors->any())
            {!! implode('', $errors->all('<div class="alert alert-danger">:message</div>')) !!}
        @endif --}}
        <div class="card-body">

           {{--           title	club_name	date	location	budget	chairman	secretary	description	 --}}
            <div class="form">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="title">Title<span class="text-danger">*</span></label>
                            {{Form::text('title',(!empty($data->title)?$data->title:''),['class' => 'form-control','placeholder'=>'Title','id'=>'title'])}}
                            <span class="text-danger">
                                @error('title')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>
                        {{-- <div class="col-6">
                            <div class="form-group">
                                <label for="club_name">Club Name<span class="text-danger">*</span></label>
                                {{Form::text('club_name',(!empty($data->club_name)?$data->club_name:''),['class' => 'form-control','placeholder'=>'Club Name','id'=>'club_name'])}}
                                <span class="text-danger">
                                    @error('club_name')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </div>
                        </div> --}}
                </div>

                {{-- <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="date">Date<span class="text-danger">*</span></label>
                            {{Form::date('date',(!empty($data->date)?$data->date:''),['class' => 'form-control','placeholder'=>'Date','id'=>'date'])}}
                            <span class="text-danger">
                                @error('date')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="location">Location<span class="text-danger">*</span></label>
                            {{Form::text('location',(!empty($data->location)?$data->location:''),['class' => 'form-control','placeholder'=>'Location','id'=>'location'])}}
                            <span class="text-danger">
                                @error('location')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>
                </div> --}}
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="description">Description<span class="text-danger">*</span></label>
                            {{Form::text('description',(!empty($data->description)?$data->description:''),['class' => 'form-control','placeholder'=>'description','id'=>'description'])}}
                            <span class="text-danger">
                                @error('description')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>

                </div>
                <div class="row">
                    {{-- <div class="col-6">
                        <div class="form-group">
                            <label for="secretary">Secretary<span class="text-danger">*</span></label>
                            {{Form::text('secretary',(!empty($data->secretary)?$data->secretary:''),['class' => 'form-control','placeholder'=>'Secretary','id'=>'secretary'])}}
                            <span class="text-danger">
                                @error('secretary')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="project_type">Project Type<span class="text-danger">*</span></label>
                            {{Form::select('project_type',array(
                                '' => 'Select Project Type',
                                'FOCUS' => 'FOCUS',
                                'OTHERS' => 'OTHERS'
                            ),(!empty($data->project_type)?$data->project_type:'OTHERS'),['class' => 'form-control','id'=>'project_type'])}}
                            <span class="text-danger">
                                @error('project_type')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div> --}}
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="description">Description<span class="text-danger">*</span></label>
                            {{Form::textarea('description',(!empty($data->description)?$data->description:''),['rows'=>10,'class' => 'form-control ckeditor','placeholder'=>'Description','id'=>'description'])}}
                            <span class="text-danger">
                                @error('description')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>
                </div>

                {{-- <div class="row">
                    <div class="{{!empty($data->image) ? 'col-9' : 'col'}}">
                        <div class="form-group">
                            <label for="image">Banner<span class="text-danger">*</span></label>
                            {{Form::file('image',['class' => 'form-control','id'=>'image'])}}
                            <span class="text-danger">
                                @error('image')
                                    {{ $message }}
                                @enderror
                            </span>
                        </div>
                    </div>

                    @if(!empty($data->image))
                    <div class="col-3">

                        <img id="old_image" src="{{asset('project/images')}}/{{$data->image}}" width="100" height="100" data-value={{!empty($data->company_logo)?'':'1'}}>

                    </div>
                    @else
                    <div class="col-3"  style="flex-wrap: wrap; display: inline-flex;" >
                        <img src="" id="preview_img" width="100" height="100" data-id="image">
                        <div class="btn-danger pdel"  role="button" >x</div>


                    </div>
                    @endif

                </div> --}}




                 <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="gallery">Images<span class="text-primary">Multiple Images can be upload</span></label>
                                        {{Form::file('gallery[]',['class' => 'form-control','id'=>'images','multiple'])}}

                                        <span class="text-danger">
                                            @error('gallery')
                                                {{ $message }}
                                            @enderror
                                        </span>
                                    </div>
                                </div>
                 </div>
                 {{-- For Preview the Image --}}
                    <div class="grid" id="pre_cl">
                    </div>
                    {{-- For the Edit Form Images    --}}
                            @if(!empty($data))
                            <div class="row">
                                <div class="col" style="flex-wrap: wrap; display: inline-flex;">

                                        @foreach($data->gallery as $logo)

                                            <img src="{{asset('banner/images/gallery')}}/{{$logo->images}}" width="100" height="100" id="old_cllogo" data-value={{!empty($logo->client_logo)?'':'1'}} >
                                            <div class="del btn-danger " data-logo-id="{{$logo->id}}" role="button" action ="clientLogoDel({{$logo->id}})">x</div>
                                            {{-- <button onclick="" class="text-danger">x</button> --}}

                                        @endforeach




                                </div>
                            </div>
                            @endif


                    {{-- <div class="col" style="flex-wrap: wrap; display: inline-flex; position: relative;">
  < ?php if(!empty($model->donationVideos)) {?>
    < ?php foreach($model->donationVideos as $v){?>
      <div style="position: relative;">
        <iframe width="150" height="150" src="https://www.youtube.com/embed/< ?= $v->donation_video?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        <div class="uvdel btn-danger" data-url-id="< ?= $v->id ?>" role="button" >x</div>
      </div>
    < ?php }}?>
</div> --}}






            </div>


                            {{Form::hidden('is_active',1)}}




            {{ Form::submit((empty($data)?'Save':'Update'), ['class' => 'btn btn-primary float-right','id'=>'quickSubmit']) }}

            {{ Form::close() }}
            <br><br>
        </div>
    </div>

@endsection
@section('scripts')
    @parent
     <!-- Select2 -->
     <script src="{{ asset('assets/admin/vendor/libs/select2/js/select2.full.min.js') }}"></script>

     <script src="https://cdn.ckeditor.com/ckeditor5/37.1.0/classic/ckeditor.js"></script>






    <script>

var table = '#project_table';

        $(document).ready(function(){
            var val = $('#project_type').val();
            if(val == 'OTHERS'){
                $('.other_project').show();
            }else{
                $('.other_project').hide();
            }

            var val = $('#other_project_type').val();
            // if(val != ''){
            //     $('.month_col').show();
            // }else{
            //     $('.month_col').hide();
            // }
            // if(val != ''){
            //     $('.month_col').show();
            //     $('.club_projects').hide();
            //     $('.month_projects').hide();
            // }else
            if(val == 'monthly_project'){
                $('.month_projects').show();
                $('.month_col').show();
                $('.club_projects').hide();
            }else if(val == 'club_project'){
                $('.club_projects').show();
                $('.month_col').hide();
                $('.month_projects').hide();
            }
            else{
                console.log(val);
                $('.month_col').hide();
                $('.club_projects').hide();
                $('.month_projects').hide();
            }
        });
        function parseData(data) {
                try {
                    return JSON.parse(data);
                } catch (e) {}

                return data;
        }

        function showImg(html){
            $('#show').append(html);

        }

        $('#project_type').change(function(){
            var val = $(this).val();
            if(val == 'OTHERS'){
                $('.other_project').show();
            }else{
                $('.other_project').hide();
            }
        });

        $(document).on('change','#other_project_type',function(){
            var val = $(this).val();
            console.log(val);
            // if(val != ''){
            //     $('.month_col').show();
            //     $('.club_projects').hide();
            //     $('.month_projects').hide();
            // }else
            if(val == 'monthly_project'){
                $('.month_projects').show();
                $('.month_col').show();
                $('.club_projects').hide();
            }else if(val == 'club_project'){
                $('.club_projects').show();
                $('.month_col').hide();
                $('.month_projects').hide();
            }
            else{
                console.log(val);
                $('.month_col').hide();
                $('.club_projects').hide();
                $('.month_projects').hide();
            }
        });

        // const source = document.querySelector('.uvdel');
        // const target = document.querySelector('.del');

        // const styles = window.getComputedStyle(source);
        // for (let i = 0; i < styles.length; i++) {
        // const property = styles[i];
        // const value = styles.getPropertyValue(property);
        // target.style.setProperty(property, value);
        // }

        const deleteButtons = document.querySelectorAll('.del');

            // Loop through the deleteButtons array and attach a click event listener
            deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Get the value of the data attribute "data-logo-id"
                const logoId = this.getAttribute('data-logo-id');
                // Use the logoId value in your JavaScript code
                // console.log('Logo ID:', logoId);
                        $.ajax({
                            url : "{{url('project/gallery')}}",
                            type : "POST",
                            data : {id : logoId },
                            headers: {
                                'X-CSRF-TOKEN': '{{ csrf_token() }}'
                            },
                            success: function(response){
                                var json = parseData(response);
                                console.log(json);
                                const imgElement = button.previousElementSibling;
                                button.style.display = 'none';
                                imgElement.style.display = 'none';
                                window.scrollTo(0, document.body.scrollHeight);

                            }

                        });
            });
            });


                const utube_video = document.querySelectorAll('.uvdel');
                utube_video.forEach(element=>{
                    element.addEventListener('click',function(event){
                        const utube_div=event.target;
                        // console.log(utube_div.getAttribute('data-url-id'));
                        const utube_id = utube_div.getAttribute('data-url-id');

                        $.ajax({
                            url : "{{url($url.'/utube')}}",
                            type : "POST",
                            data : {id : utube_id},
                            headers : {
                                'X-CSRF-TOKEN' : '{{csrf_token()}}'
                            },
                            success : function(response){
                                var json = parseData(response);
                                console.log(json);
                                // var id = '#'+element.getAttribute('id');
                                const vidElement = utube_div.previousElementSibling;
                                console.log(vidElement);
                                console.log(utube_video);
                                utube_div.style.display = 'none';
                                vidElement.style.display = 'none';

                            }
                        });

                    });
                });
                const client_preview = document.getElementById('images');
                client_preview.addEventListener('change',(event)=>{

                    const files = event.target.files;
                    for(let i=0;i<files.length; i++){
                        const client_img = files[i];
                        var img_path = URL.createObjectURL(client_img);
                        // var html = '<div class="col-3" style="flex-wrap: wrap; display: inline-flex;"><div class="pre_del btn-danger del" id="cl_id'+i+'" data-imgpath="'+img_path+'" role="button" >x</div><img src="'+img_path+'" width="100" height="100"></div>';
                        var html = '<div class="col-3" style="flex-wrap: wrap; display: inline-flex;"><img src="'+img_path+'" width="100" height="100"></div>';

                        $('#pre_cl').append(html);

                    }

                });


                const cl_pr_de = document.querySelectorAll('.pre_del');
                cl_pr_de.forEach(element=>{
                    element.addEventListener('click',(event)=>{
                        const pr_cl_id = event.target;
                        console.log(pr_cl_id);
                    });
                });

                const imageInput = document.getElementById('image');
                imageInput.addEventListener('change', (event) => {
                const selectedImage = event.target.files[0];
                const imagePath = URL.createObjectURL(selectedImage);
                    $('#preview_img').attr('src',imagePath);
                });

                // const companyLogo = document.getElementById('company_logo');
                // companyLogo.addEventListener('change',(event)=>{
                //     const selectedCompanyLogo = event.target.files[0];
                //     // console.log(selectedCompanyLogo);
                //     const companyLogoPath = URL.createObjectURL(selectedCompanyLogo);
                //     $('#preview_cl').attr('src',companyLogoPath);
                // });

                const pdel = document.querySelectorAll('.pdel');
                pdel.forEach(element=>{
                    element.addEventListener('click',(event)=>{
                        const pre = event.target.previousElementSibling;
                        const id = '#' + pre.id;
                        const img = '#' + pre.getAttribute('data-id');
                        $(id).attr('src', '');
                        $(img).val('');
                    });
                });

















        // var cmlogo = $('#old_cmlogo').val();
        var old_image = $('#old_image').attr('data-value');
        var prlogo = $('#old_prlogo').attr('data-value');  //.attr('src');
        var cllogo = $('#old_cllogo').attr('data-value');

        $(document).ready(function(){
                // $('.select2').select2();

                // $('.ckeditor').ckeditor();


        // var table = '#'+{{$table_name}};


            $(table).validate({
            ignore: '.ignore, .disabled',
            focusInvalid: false,
            rules: {
                title	    : { required : true  },
                club_name : { required : true  },
                date : { required : true  },
                location : { required : true  },
                budget : { required : true  },
                chairman : { required : true  },
                secretary : { required : true  },
                image: {
                    required: (old_image != 1)?true:false,
                    extension: "jpg|jpeg|png",
                    maxfilesize: 2097152,
                },
              description : { required : true  }
            //   'client_logo'=> 'required|mimes:jpg,png|max:2048',
            }
        });



        ClassicEditor
                .create( document.querySelector( '.ckeditor' ) )
                .catch( error => {
                    console.error( error );
                } );

                $('#add-more').click(function() {
            // Clone the first input field group
            var inputGroup = $('#url').clone().val('').removeAttr('id');

            // Clear the values of the cloned input fields
            // inputGroup.find('input').val('');
            // var input = inputGroup.getElementsByTagName('input');

            inputGroup.value = '';


            // Append the cloned input field group to the input container
            $('#input-container').append(inputGroup);
        });

    });/*----jquery-----*/


    </script>
@stop

