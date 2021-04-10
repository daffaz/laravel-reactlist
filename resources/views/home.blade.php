@extends('master')
@section('react')
    <div id="root"></div>
    {{-- SEND DATA TO REACT VIEWS --}}
    <script>
        let response = {!! $data !!}
    </script>
@endsection
