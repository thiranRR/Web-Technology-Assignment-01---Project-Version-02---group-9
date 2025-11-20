<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class LecturerProfileRequest extends FormRequest
{
     /**
     * Determine if the user is authorized to make this request.
     *
     * Only logged-in lecturers can update their profile.
     */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'lecturer';
    }

    /**
     * The fields that can be edited in lecturer profile.
     */
    public function rules(): array
    {
        return [
            // Profile update fields
            'designation'    => 'sometimes|string|max:100',   
            'department'     => 'sometimes|string|max:100',   
            'research_areas' => 'sometimes|string|max:500',   
            'contact_email'  => 'sometimes|email|max:150|unique:lecturer_profiles,contact_email,' . auth()->id() . ',user_id',
        ];
    }

    /**
     * Custom validation messages for lecturer profile.
     */
    public function messages(): array
    {
        return [
            'designation.string'      => 'Designation must be a valid string.',
            'designation.max'         => 'Designation cannot exceed 100 characters.',
            
            'department.string'       => 'Department must be a valid string.',
            'department.max'          => 'Department cannot exceed 100 characters.',
            
            'research_areas.string'   => 'Research areas must be a valid string.',
            'research_areas.max'      => 'Research areas cannot exceed 500 characters.',
            
            'contact_email.email'     => 'Contact email must be a valid email address.',
            'contact_email.max'       => 'Contact email cannot exceed 150 characters.',
            'contact_email.unique'    => 'This contact email is already taken.',
        ];
    }
}
