<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:150',
            'email' => 'required|email|max:150|unique:users,email',
            'password' => 'required|string|confirmed|min:8',
            'role' => 'required|in:student,faculty', // changed from lecturer to faculty

            // student-specific fields
            'degree' => 'sometimes|required_if:role,student|string|max:100',
            'year' => 'sometimes|required_if:role,student|integer|min:1|max:10',

            // faculty-specific fields
            'department' => 'sometimes|required_if:role,faculty|string|max:100',
            'bio' => 'sometimes|string|max:500',
        ];
    }

    public function messages()
    {
        return [
            'role.in' => 'Role must be either student or faculty.',
            'degree.required_if' => 'Degree is required for students.',
            'year.required_if' => 'Academic year is required for students.',
            'department.required_if' => 'Department is required for faculty.',
        ];
    }
}
