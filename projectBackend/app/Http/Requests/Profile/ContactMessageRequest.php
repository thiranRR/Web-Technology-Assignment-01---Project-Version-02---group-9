<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class ContactMessageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Public form, no auth required
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:150',
            'email' => 'required|email|max:150',
            'message' => 'required|string',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Your name is required.',
            'email.required' => 'Your email is required.',
            'message.required' => 'Please enter a message.',
        ];
    }
}
