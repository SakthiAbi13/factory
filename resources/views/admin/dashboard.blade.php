@extends('layouts.admin.app')
@section('styles')
    @parent


    <style>
        #select_modify .select2-container--open {
            /* top: 200px !important; */
        }

        .select2-dropdown {
            top: -12px;
        }
        a{
            text-decoration: none;
            color:black;
        }
    </style>
@stop
@section('content')
    <!-- Content Header (Page header) -->

    <div class="content-header">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Dashboard</h1>
            </div>

        </div>
    </div>
    <div class="row">

        <div class="col-md-3 col-sm-6 col-12">
            <a href="{{ url('banner') }}">
                <div class="info-box">
                    <span class="info-box-icon bg-info"><i class="fas fa-building"></i></span>
                <div class="info-box-content">
                <span class="info-box-text  h5">Banner</span>
                <span class="info-box-number pr  h6">0</span>
                </div></div>
            </a>
        </div>
    </div>
    {{-- <!-- Spot Count -->
    <div class="row mb-4 mt-20">
        <div class="row d-flex">

        </div>
    </div>

        </div>
    </div> --}}


@endsection

@section('scripts')
    @parent


    <script>
           function parseData(data) {
                try {
                    return JSON.parse(data);
                } catch (e) {}

                return data;
                }

        $(document).ready(function(){
            $.ajax({
                url : "{{url('ajax/dashboard_data')}}",
                type : 'GET',
                success: function(response){
                    var json = parseData(response);
                    console.log(response);
                    $('.pr').html(response.project);
                    $('.vid').html(response.video);
                    $('.sho').html(response.shorts);
                    $('.cat').html(response.category);
                }
            });
        });

    </script>

@stop
