<!-- Main Sidebar Container
request()->is('about/*')
-->
<!-- resources/css/app.css -->



<style>
   .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: blue;
    color:white;
}
.nav-pills .nav-link {
    color: blue;
}
.nav-sidebar .nav-item>.nav-link:hover{
    color:white;
    background-color:blue;
    border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>
e
<aside class="main-sidebar elevation-4 bg-light text-primary">

    <!-- Brand Logo -->
    <div class="" id="logo">
    <a href="{{ URL::to('/') }}" class="brand-link ">

        <div class="logo d-flex justify-content-between">
            {{-- <a class="large_logo" href=""><img src="{{asset('assets/img/logo.png')}}" alt=""></a> --}}
            {{-- <a class="small_logo" href=""><img src="{{asset('assets/img/mini_logo')}}.png" alt=""></a> --}}
        </div>
    </a>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">




        <!-- Sidebar Menu -->
        <nav class="mt-2" style="padding-bottom:102px">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">

                <li class="nav-item">
                    <a href="{{ url('dashboard') }}"
                        class="nav-link {{ active_class(['dashboard']) }} {{ active_class(['/']) }}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard

                        </p>
                    </a>
                </li>


                <li class="nav-item">
                    <a href="{{ url('banners') }}" class="nav-link {{ in_array(Route::currentRouteName(), $banner_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-building" aria-hidden="true"></i>

                            <p>Banner</p>
                    </a>
                </li>

                {{-- <li class="nav-item">
                    <a href="{{ url('event-tickers') }}" class="nav-link {{ in_array(Route::currentRouteName(), $event_tickers_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-check" aria-hidden="true"></i>
                            <p>Event Tickers</p>
                    </a>
                </li> --}}

                {{-- <li class="nav-item">
                    <a href="{{ url('types') }}" class="nav-link {{ in_array(Route::currentRouteName(), $types_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-list" aria-hidden="true"></i>
                            <p>Project Types</p>
                    </a>
                </li> --}}

                {{-- <li class="nav-item">
                    <a href="{{ url('months') }}" class="nav-link {{ in_array(Route::currentRouteName(), $months_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-calendar" aria-hidden="true"></i>
                            <p>Months</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ url('teams') }}" class="nav-link {{ in_array(Route::currentRouteName(), $teams_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-users" aria-hidden="true"></i>
                            <p>Teams</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ url('events') }}" class="nav-link {{ in_array(Route::currentRouteName(), $events_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-book" aria-hidden="true"></i>
                            <p>Events</p>
                    </a>
                </li> --}}

                 {{-- <li class="nav-item">
                    <a href="{{ url('bookmarks') }}" class="nav-link {{ in_array(Route::currentRouteName(), $bookmarks_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Bookmarks</p>
                    </a>
                </li> --}}



                {{-- Notifications --}}
                {{-- <li class="nav-item">
                    <a href="{{ url('notifications') }}" class="nav-link {{ in_array(Route::currentRouteName(), $notifications_route) ? ' active ' : '' }}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Notifications</p>
                    </a>
                </li> --}}

            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
