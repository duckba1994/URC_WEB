@extends('layouts.masterAdmin')

@section('content')

    @php 
        $action_search = "admin/data_report_product_return/search";
    @endphp  

    @include('shareData_union.report_product_return')  

@endsection

@section('footer')
    @include('layouts.footer')
@endsection
