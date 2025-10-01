<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $loginType = $this->input('login_type'); // should be 'student' or 'lecturer'

        if ($loginType === 'student') {
            return [
                'user_id' => ['required', 'regex:/^stu\d{6}$/'],
                'pwd'     => ['required', 'string'],
            ];
        } elseif ($loginType === 'lecturer') {
            return [
                'user_id' => ['required', 'regex:/^lec\d{6}$/'],
                'pwd'     => ['required', 'string'],
            ];
        }

        // fallback if login_type missing
        return [
            'user_id' => ['required', 'string'],
            'pwd'     => ['required', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
          'user_id.required' => 'User ID is required.',
          'user_id.regex'    => 'The User ID format is invalid.',
          'pwd.required'     => 'Password is required.',
        ];
    }

    /**
     * Validate the request's credentials and return the user without logging them in.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validateCredentials(): User
    {
        $this->ensureIsNotRateLimited();

        /** @var User|null $user */
        $user = Auth::getProvider()->retrieveByCredentials(
            $this->only('user_id', 'pwd')
        );

        if (! $user || ! Auth::getProvider()->validateCredentials($user, $this->only('pwd'))) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'user_id' => __('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->throttleKey());

        return $user;
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'user_id' => __('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate-limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return $this->string('user_id')
            ->lower()
            ->append('|'.$this->ip())
            ->transliterate()
            ->value();
    }
}
