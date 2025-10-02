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
            // Student can optionally update first name & last name; must be a string of max 100 characters
            'first_name'    => 'sometimes|string|max:100',
            'last_name'     => 'sometimes|string|max:100',

            // Email is optional, must be valid, max 150 chars, and unique except for the current user
            'email'         => 'sometimes|email|max:150|unique:users,email,' . auth()->id(),

            // Skills, optional, but if provided must be text up to 500 characters
            'skills'        => 'nullable|string|max:500',

            // GitHub link, optional, must be a valid URL, max length 255 chars
            'github_link'   => 'nullable|url|max:255',

            // LinkedIn link, optional, must be a valid URL, max length 255 chars
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
            'first_name.max'        => 'First name cannot exceed 100 characters.',
            'last_name.max'         => 'Last name cannot exceed 100 characters.',
            'email.email'           => 'Email must be valid.',
            'email.unique'          => 'This email is already taken.',
            'skills.max'            => 'Skills cannot exceed 500 characters.',
            'github_link.url'       => 'GitHub link must be a valid URL.',
            'linkedin_link.url'     => 'LinkedIn link must be a valid URL.',
        ];
    }
}
