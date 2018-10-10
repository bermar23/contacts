<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactsAPIController extends Controller
{
    public function index(){
        return [
            {'name'=>'name1', 'content'=>'content1'}
            {'name'=>'name2', 'content'=>'content2'}
        ];

    }

}
