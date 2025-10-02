<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class StudentProjectRequest extends FormRequest
{
    /**
    * Determine if the user is authorized to make this request.
    *
    * Only logged-in students can create/update their projects.
    */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'student';
    }

     /**
     * Get the validation rules that apply to the request.
     *
     * Ensures title, description, and repo link meet the requirements.
     */
    public function rules(): array
    {
        return [
            // Project title is required, must be a string, max 200 characters
            'title'       => 'required|string|max:200',

            // Project description is required
            'description' => 'required|string',

            // Repository link is optional, must be a valid URL if provided, max 255 chars
            'repo_link'   => 'nullable|url|max:255',
        ];
    }

    /**
     * Custom messages for validation errors.
     */
    public function messages(): array
    {
        return [
            'title.required'       => 'Project title is required.',
            'title.string'         => 'Project title must be a string.',
            'title.max'            => 'Project title cannot exceed 200 characters.',

            'description.required' => 'Project description is required.',
            'description.string'   => 'Project description must be a string.',

            'repo_link.url'        => 'Repository link must be a valid URL.',
            'repo_link.max'        => 'Repository link cannot exceed 255 characters.',
        ];
    }
}
