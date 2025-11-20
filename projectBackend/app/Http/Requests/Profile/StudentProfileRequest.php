<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class StudentProfileRequest extends FormRequest
{
    /**
     * Determine if the user is student to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'student';
    }

    // The fields that can be edited in student profile
    public function rules(): array
    {
        return [
            'degree'        => 'sometimes|string|max:100',
            'year'          => 'sometimes|integer|min:1|max:5',
            'skills'        => 'nullable|string|max:500',
            'github_link'   => 'nullable|url|max:255',
            'linkedin_link' => 'nullable|url|max:255',
        ];
    }

    /**
     * Custom messages for validation errors
     *
     * These messages are returned when a field fails validation.
     * They provide user-friendly explanations for what went wrong.
     */
    public function messages(): array
    {
        return [
            'degree.max'         => 'Degree cannot exceed 100 characters.',
            'year.integer'       => 'Year must be a valid number.',
            'year.min'           => 'Year must be at least 1.',
            'year.max'           => 'Year cannot exceed 5.',
            'skills.max'         => 'Skills cannot exceed 500 characters.',
            'github_link.url'    => 'GitHub link must be a valid URL.',
            'linkedin_link.url'  => 'LinkedIn link must be a valid URL.',
        ];
    }
}
