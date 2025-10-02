<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class EvaluationRequest extends FormRequest
{
    /**
     * Only logged-in lecturers can evaluate student applications.
     */
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'lecturer';
    }

    /**
     * Validation rules for evaluating a research application.
     */
    public function rules(): array
    {
        return [
            // Status of the application: accepted or rejected
            'status'   => 'required|in:accepted,rejected',

            // Optional comments, max 500 characters
            'comments' => 'nullable|string|max:500',
        ];
    }

    /**
     * Custom messages for validation errors.
     */
    public function messages(): array
    {
        return [
            'status.required'   => 'Evaluation status is required.',
            'status.in'         => 'Status must be either accepted or rejected.',
            'comments.string'   => 'Comments must be a valid string.',
            'comments.max'      => 'Comments cannot exceed 500 characters.',
        ];
    }
}
