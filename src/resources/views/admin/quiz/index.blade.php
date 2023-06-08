@extends('layouts.app')
@section('content')
    <div><a href="/admin/big_question/add">大問追加</a></div>
    <ul>
        @foreach($big_questions as $big_question)
        <li>{{ $big_question->name }}</li>
        <div>
            @foreach($questions->where('big_question_id', $big_question->id) as $question)
            <a href="/admin/edit/{{ $question->id }}" style="text-decoration: none;">
                <img src="/img/{{ $question->image }}" width="200">
            </a>
            @endforeach
            <a href="/admin/add/{{ $big_question->id }}">設問追加</a>
            <a href="/admin/big_question/delete/{{ $big_question->id }}">大問削除</a>
        </div>
        @endforeach
    </ul>
@endsection