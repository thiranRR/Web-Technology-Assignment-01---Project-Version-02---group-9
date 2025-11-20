<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class ResearchPostRequest extends FormRequest
{
    /**
     * Only logged-in lecturers can create/update research posts.
     */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'lecturer';
    }

    /**
     * Validation rules for research posts.
     */
    public function rules(): array
    {
        return [
            // Research topic/title (max 200 chars)
            'title'        => 'required|string|max:200',

            // Detailed description (required)
            'description'  => 'required|string',

            // Requirements for students (optional, max 500 chars)
            'requirements' => 'nullable|string|max:500',

            // Status must be open or closed
            'status'       => 'required|in:open,closed',
        ];
    }

    /**
    * Custom messages for validation errors.
    */
    public function messages(): array
    {
        return [
            'title.required'        => 'Research title is required.',
            'title.string'          => 'Research title must be a valid string.',
            'title.max'             => 'Research title cannot exceed 200 characters.',

            'description.required'  => 'Research description is required.',
            'description.string'    => 'Research description must be a valid string.',

            'requirements.string'   => 'Requirements must be a valid string.',
            'requirements.max'      => 'Requirements cannot exceed 500 characters.',

            'status.required'       => 'Status is required.',
            'status.in'             => 'Status must be either open or closed.',
        ];
    }
}
