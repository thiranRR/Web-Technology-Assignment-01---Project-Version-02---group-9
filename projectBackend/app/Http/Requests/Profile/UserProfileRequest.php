<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UserProfileRequest extends FormRequest
{
    /**
     * Only logged-in users can update their profile.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Validation rules for the Users table.
     */
    public function rules(): array
    {
        return [
            'name'            => 'sometimes|string|max:150',
            'email'           => 'sometimes|email|max:150|unique:users,email,' . auth()->id(),
            'profile_picture' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'bio'             => 'nullable|string|max:500',
        ];
    }

    /**
     * Custom error messages.
     */
    public function messages(): array
    {
        return [
            'name.max'               => 'Name cannot exceed 150 characters.',
            'email.email'            => 'Email must be valid.',
            'email.unique'           => 'This email is already registered.',
            'profile_picture.image'  => 'Profile picture must be an image.',
            'profile_picture.mimes'  => 'Profile picture must be a JPG or PNG file.',
            'profile_picture.max'    => 'Profile picture size cannot exceed 2MB.',
            'bio.max'                => 'Bio cannot exceed 500 characters.',
        ];
    }
}
