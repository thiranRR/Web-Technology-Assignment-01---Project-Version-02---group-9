<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Authorize the request.
     * Both students and lecturers can send messages.
     */
    public function authorize(): bool
    {
        return auth()->check() && in_array(auth()->user()->role, ['student', 'lecturer']);
    }

    /**
    * Validation rules for sending a message.
    */
    public function rules(): array
    {
        return [
            // receiver_id is optional; if provided, must exist in users table
            'receiver_id' => 'nullable|exists:users,id',

            // content is required, must be string, max 1000 chars
            'content'     => 'required|string|max:1000',
        ];
    }

    /**
     * Custom messages for validation errors.
     */
    public function messages(): array
    {
        return [
            'receiver_id.exists' => 'The recipient user does not exist.',
            'content.required'   => 'Message content cannot be empty.',
            'content.string'     => 'Message must be a valid text.',
            'content.max'        => 'Message cannot exceed 1000 characters.',
        ];
    }
}
