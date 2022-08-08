@extends('layouts.masterHead')

@section('content')
 <!-- Breadcrumb -->
 <nav class="hk-breadcrumb" aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-light bg-transparent">
        <li class="breadcrumb-item active">อายุจัดเก็บสินค้า</li>
    </ol>
</nav>
<!-- /Breadcrumb -->

    <!-- Container -->
    <div class="container-fluid px-xxl-65 px-xl-20">
        <!-- Title -->
        <div class="hk-pg-header mb-10">
            <div class="topichead-bgred"><i data-feather="clock"></i> อายุจัดเก็บสินค้า</div>
        </div>
        <!-- /Title -->

        @include('product_age_main')

    </div>
    <!-- /Container -->
@endsection
