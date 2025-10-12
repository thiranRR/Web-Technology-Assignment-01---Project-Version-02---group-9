"use client"

import { useState } from "react"
import { User, Mail, UserPlus, Lock } from "lucide-react"
import "../styles/SignUp.css"

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    hasUpperLower: false,
    hasNumber: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Validate password in real-time
    if (name === "password") {
      setPasswordValidation({
        length: value.length >= 6,
        hasUpperLower: /[a-z]/.test(value) && /[A-Z]/.test(value),
        hasNumber: /\d/.test(value),
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    if (!passwordValidation.length || !passwordValidation.hasUpperLower || !passwordValidation.hasNumber) {
      alert("Please meet all password requirements")
      return
    }

    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create Account</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <User className="input-icon" size={20} />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <Mail className="input-icon" size={20} />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <UserPlus className="input-icon" size={20} />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <Lock className="input-icon" size={20} />
          </div>

          <div className="password-requirements">
            <p className={passwordValidation.length ? "valid" : ""}>• At least 6 characters long</p>
            <p className={passwordValidation.hasUpperLower ? "valid" : ""}>
              • Contains uppercase and lowercase letters
            </p>
            <p className={passwordValidation.hasNumber ? "valid" : ""}>• Contains at least one number</p>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <Lock className="input-icon" size={20} />
          </div>

          <div className="terms-group">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="terms-checkbox"
            />
            <label htmlFor="agreeToTerms" className="terms-label">
              I agree to the{" "}
              <a href="#" className="terms-link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="terms-link">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>

          <p className="login-link">
            Already have an account? <a href="/">Login here</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
