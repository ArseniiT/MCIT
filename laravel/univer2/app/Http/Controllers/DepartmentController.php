<?php

namespace App\Http\Controllers;

use App\department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(department $department)
    {
        //
    }

    public function hello(){
        $a = 2 +10;
        return $a;
    }

    public function getAllDepartments()
    {
        $departments = Department::with('professors')->get();
        return $departments;
    }

    public function getDepartmentByID($id){
        //$department = Department::find($id);
        $department = Department::with('professors')->find($id);
        if($department)
            return $department;
        return "No Department found with this ID";

    }

    public function getDepartmentsByName($name){
        // $departments = Department::where('name', $name)->get();
        $departments = Department::where('name', '=', $name)->get();
        if($departments && count($departments)>0)
            return $departments;
        return "No Department found with this condition";
    }

    public function getDepartmentsByNameAndOrdered($name, $order){
        $departments = Department::where('name', '=', $name)
            ->orderBy('name', $order)
            ->get();
        if($departments && count($departments)>0)
            return $departments;
        return "No Department found with this conditions";
    }

    public function createDepartment(Request $request){
        // Department::create($request->all());
        $department = new Department($request->all());
        $department->name += 10;
        $department->save();
    }

    public function updateDepartment(Request $request, $id){
        // Department::find($id)->update($request->all());
        $department = Department::find($id);
        $department->fill($request->all());
        $department->save();
    }

    public function deleteDepartment($id){
        $department = Department::find($id);
        if($department){
            $department->delete();
            return "Department Deleted";
        }
        return "No Department to Delete";
    }

    public function createDepartmentWithPilot(Request $request){
        $department = new Department(['name' => $request['department_name'],
            'name' => $request['name']]);
        $department->save();

        $department->professors()->save(new Professor(['rank' => $request['professor_rank']]));

    }

}
