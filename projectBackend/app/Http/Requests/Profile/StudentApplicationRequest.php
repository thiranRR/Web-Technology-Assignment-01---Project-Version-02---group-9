<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class StudentApplicationRequest extends FormRequest
{
    /**
    * Allow only authenticated students to submit applications.
    */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'student';
    }

    /**
    * Validation rules for submitting a research application.
    */
    public function rules(): array
    {
        return [
            // ID of the research post student is applying to
            'research_id' => 'required|exists:research_posts,id'
        ];
    }

    /**
    * Custom messages for validation errors.
    */
    public function messages(): array
    {
        return [
            'research_id.required' => 'You must select a research post to apply.',
            'research_id.exists'   => 'The selected research post does not exist.'
        ];
    }
}
