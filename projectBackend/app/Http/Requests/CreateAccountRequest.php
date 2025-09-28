<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'student_id' => ['required', 'regex:/^FC\d{6}$/', 'unique:users,student_id'],
            'academic_year' => ['required', 'regex:/^\d{4}\/\d{4}$/'],
            'faculty_name' => 'required|string|max:255',
            'password' => 'required|min:8|confirmed', // checks password_confirmation automatically
        ];
    }

    /**
    * Custom messages for validation errors.
    *
    * @return array<string, string>
    */
     public function messages(): array
    {
        return [
            'full_name.required' => 'Full Name is required.',
            'full_name.max' => 'Full Name cannot exceed 255 characters.',

            'email.required' => 'Email Address is required.',
            'email.email' => 'Enter a valid Email Address.',
            'email.unique' => 'This Email Address is already registered.',

            'student_id.required' => 'Student ID is required.',
            'student_id.regex' => 'Student ID must start with FC followed by 6 digits (e.g., FC123456).',
            'student_id.unique' => 'This Student ID is already registered.',

            'academic_year.required' => 'Academic Year is required.',
            'academic_year.regex' => 'Academic Year must be in the format YYYY/YYYY (e.g., 2024/2025).',

            'faculty_name.required' => 'Faculty Name is required.',
            'faculty_name.max' => 'Faculty Name cannot exceed 255 characters.',

            'password.required' => 'Password is required.',
            'password.min' => 'Password must be at least 8 characters.',
            'password.confirmed' => 'Passwords do not match.',
        ];
    }
}
