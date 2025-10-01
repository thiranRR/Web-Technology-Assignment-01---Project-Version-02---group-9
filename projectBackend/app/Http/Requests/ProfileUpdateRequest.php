<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    public function authorize() { return true; }

    public function rules()
    {
        return [
            'name' => 'sometimes|string|max:150',
            'email' => [
                'sometimes',
                'email',
                'max:150',
                Rule::unique('users')->ignore($this->route('id')),
            ],
        ];
    }
}
