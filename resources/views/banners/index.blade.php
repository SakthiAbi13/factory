@extends('layouts.admin.app')
        @include('required.top')
@section('styles')
<meta http-equiv="Content-Security-Policy" content="frame-src 'self' https://www.youtube.com;">
    @parent

     {{-- Modal --}}
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
 {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> --}}
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

@stop
@section('content')
    <!-- Content Header (Page header) -->

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                {{-- <div class="col-sm-12" > --}}
                    <div class="col-sm-6">
                        <h1 class="m-0 " style="font-size:30px">{{$title}}</h1>
                    </div>
                    <div class="col">
                        <ol class="breadcrumb" style = "float: right; ">
                            <li class="breadcrumb-item"><a href="{{ url('dashboard') }}">Home</a></li>
                            <li class="breadcrumb-item active">{{$title}}</li>
                        </ol>
                    </div>

                    {{-- <div class="col-12 " style = "float: right;"> --}}

                    {{-- </div><!-- /.col --> --}}
                {{-- </div><!-- /.col --> --}}

            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <div class="row mb-4 mt-20">
        <div class="col-md-12">
            <div class="card card-small p-3">
                @include('utils.message')
                @php $url = $route; $table_name = 'banner_table'; @endphp
                <div class="pb-2 p-0">

                    <h6 class="m-0 pull-left"></h6>

                    <a href="{{ url($url.'/add') }}" data-value="" class="btn btn-primary float-right add"><i
                            class="fa fa-plus"></i> Add</a>
                {{-- <a href="#" data-value="" data-toggle="modal" data-target= "#ModalForm" class="btn btn-primary float-right add"><i
                                class="fa fa-plus"></i> Add</a> --}}
                                <!-- Button trigger modal -->


                </div>
                <div class="table-responsive">
                    <table id="banner-table" class="table table-hover table_width display w-100"  >
                        <thead>

{{--          title	club_name	date	location	budget	chairman	secretary	description	is_active	created_at	updated_at



 --}}


                            <tr>
                                <th>SNo</th>
                                <th data-value="title">Title</th>
                                <th data-value="description">Description</th>
                                <th data-value="is_active">Is Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>





@endsection
@section('scripts')
    @parent
    @include('required.footer')

    <script>




        function parseData(data) {
                try {
                    return JSON.parse(data);
                } catch (e) {}

                return data;
                }


        $(document).ready(function() {



            var tables = '#banner-table';
            // $(tables+' thead tr').clone(true).appendTo( tables+' thead' );
            // $(tables+' thead tr:eq(1) th').each( function (i) {
            //     // if(i!=0 && i!=3 && i!=6 && i!=5) {
            //     $(this).html( '<input type="text" id="column'+i+'" class="filter form-control form-control-sm" placeholder="Search" />' );
            //     // } else {
            //     //     if(i==5) {
            //     //         $(this).html( '<select id="column'+i+'" class="filter form-select form-control"><option value="">Select</option><option value="1">Active</option><option value="0">Deactive</option><select>' );
            //     //     }
            //         if(i == 15) {
            //             $(this).html('');
            //         }
            //     // }
            //         $( '.filter', this ).on( 'keyup change', function () {
            //             if ( table.column(i).search() !== this.value ) {
            //                     table
            //                 .column(i)
            //                 .search( this.value )
            //                 .draw();
            //             }
            //         });
            // });



            var table = $(tables).DataTable({
                "processing": true,
                "serverSide": true,
                // "sScrollY": ($(window).height() - 200),
                "ajax": {
                    "url": "{{ url('ajax/banner_data') }}",
                    "type": "GET",
                    'beforeSend': function(request) {
                        showLoader();
                    },
                    data: function(data) {
                        var info = $(tables).DataTable().page.info();
                        delete data.columns;
                        data.page = info.page + 1;


                        data.search_text = data.search['value'];
                        data.id             = $('#column0').val();
                        data.is_active         = $('#column12').val();
                        data.order_by = $(tables + ' tr').eq(0).find('th').eq(data
                            .order[0]['column']).data('value');
                        data.order_direction = data.order[0]['dir'];
                    },
                    dataFilter: function(data) {
                        var json = parseData(data);
                        console.log(json);
                        json.recordsTotal = json.data.total;
                        json.recordsFiltered = json.data.total;
                        json.data = json.data.data;
                        hideLoader();
                        return JSON.stringify(json); // return JSON string

                    }
                },
                "columns": [
                    {
                        "data": function(data, type, row, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        }
                    },
                    //  title	club_name	date	location	budget	chairman	secretary	description	is_active
                    {
                        "data": "title"
                    },
                    {
                        "data":"description"
                    },
                    // {
                    //     "data":"date"
                    // },
                    // {
                    //     "data":"image",render:function(data,type,row){
                    //         console.log(row.image);
                    //         $html = '<img id="old_image" src="{{asset('Project/images')}}/'+row.image+'" width="50" height="50">';
                    //         return $html;
                    //     }
                    // },

                    {
                        "data":"is_active"
                    },


                    {
                        "data": function(data, type, row) {

                            var add='';
                            var button =
                            //  '<a href="{{ url('project/view/') }}/' + data.id +
                            '<a href="{{url($url.'/view/')}}/'+data.id+'" class="me-1"><i class="fa fa-eye"></i> </a>' +

                                '<a href="{{ url($url.'/edit/') }}/' + data
                                .id +
                                '" class="me-1"><i class="fa fa-edit"></i> </a>';

                                var url = '{{ $url }}';

                                    add ='<a onclick="delete_row(\''+url+'/delete\','+data.id+')" class="delete_icon"><i class="fas fa-trash-alt"></i> </a>';
                                    button = button + ' ' + add ;


                            return button;


                        }
                    }


                ],
                columnDefs: [{
                    orderable: false,
                    targets: -1
                }],
                // responsive: true,
                // lengthMenu: [ 10, 25, 50, 75, 100 ],
                lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
                paging: true,
                info: true,
                lengthChange: true,
                dom: 'Blfrtip',
                buttons: [
                // {
                //     extend: "copy",
                //     exportOptions: {
                //         columns: [":visible :not(:last-child)"]
                //     }
                // },
                {
                    extend: "csv",
                    exportOptions: {
                        columns: [":visible :not(:last-child)"]
                    }
                }, {
                    extend: "excel",
                    exportOptions: {
                        columns: [":visible :not(:last-child)"]
                    }
                }, {
                    extend: "pdf",
                    exportOptions: {
                        columns: [":visible :not(:last-child)"]
                    }
                }],
                "drawCallback": function() {

                    // var info = $(this).DataTable().page.info();
                    // if (info.pages <= 1) {
                    //     $('.dataTables_paginate').hide();
                    //     $('.dataTables_info').hide();
                    // } else {
                    //     $('.dataTables_paginate').show();
                    //     $('.dataTables_info').show();
                    // }
                }


            });
            // });







        });

    </script>


@stop

