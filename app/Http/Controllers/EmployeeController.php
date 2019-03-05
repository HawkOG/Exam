<?php

namespace App\Http\Controllers;
use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    
    public function index()
    {
        $items = Employee::all();

        return response()->json($items);
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $employee = new Employee();
        $employee->name = $request['name'];
        $employee->lastname = $request['lastname'];
        $employee->specialization = $request['specialization'];
        $employee->company = $request['company'];
        $employee->city = $request['city'];
        $employee->gender = $request['gender'];
        $employee->rating = $request['rating'];
        $employee->like = $request['like']; 
        
   
        $employee->save();
    }

    
    public function show($id)
    {
        //
    }

   
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}
