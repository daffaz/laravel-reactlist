<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel-React</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@200;300;600;700&display=swap"
        rel="stylesheet">

    <style>
        .heading {
            font-family: 'Poppins', sans-serif;
        }

        .paragraph {
            font-family: 'PT Sans', sans-serif;
        }

    </style>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    @yield('react')
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
