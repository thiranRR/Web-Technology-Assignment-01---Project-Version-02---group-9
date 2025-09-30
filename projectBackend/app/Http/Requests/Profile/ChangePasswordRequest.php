<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Hash;

class ChangePasswordRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'current_password' => ['required', 'current_password'],
            'new_password' => [
                'required',
                'string',
                'confirmed',
                Password::min(8)         // minimum 8 characters
                    ->letters()          // must contain at least one letter
                    ->mixedCase()        // must contain uppercase & lowercase
                    ->numbers()          // must contain at least one number
                    ->symbols()          // must contain at least one symbol
            ],
        ];
    }

     public function messages(): array
    {
        return [
            'current_password.required' => 'Current password is required.',
            'new_password.required'     => 'New password is required.',
            'new_password.confirmed'    => 'Passwords do not match.',
            'new_password.min'          => 'New password must be at least 8 characters.',

            'new_password.letters'      => 'Password must contain at least one letter.',
            'new_password.mixedCase'    => 'Password must include both uppercase and lowercase letters.',
            'new_password.numbers'      => 'Password must contain at least one number.',
            'new_password.symbols'      => 'Password must contain at least one symbol.',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            // Check if new password is same as current password
            if (\Hash::check($this->new_password, auth()->user()->password)) {
                $validator->errors()->add(
                    'new_password',
                    'New password cannot be the same as your current password.'
                );
            }
        });
    }
}
