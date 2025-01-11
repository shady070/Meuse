import React, { useState, ChangeEvent, FocusEvent, FormEvent } from "react";

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    password: string;
    businessName: string;
    businessType: string;
    address: string;
    city: string;
    zipCode: string;
  }
  
  interface Errors {
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    password?: string;
    businessName?: string;
    businessType?: string;
    address?: string;
    city?: string;
    zipCode?: string;
  }

const Form: React.FC = () => {
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [formValues, setFormValues] = useState<FormValues>({
      email: "",
      firstName: "",
      lastName: "",
      role: "",
      password: "",
      businessName: "",
      businessType: "",
      address: "",
      city: "",
      zipCode: "",
    });
    const [errors, setErrors] = useState<Errors>({});

  // Function to handle focus
  const handleFocus = (section: number) => {
    setActiveSection(section);
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input change
  };
  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formValues.email) newErrors.email = "Email is required.";
    if (!formValues.firstName) newErrors.firstName = "First name is required.";
    if (!formValues.lastName) newErrors.lastName = "Last name is required.";
    if (!formValues.role) newErrors.role = "Role is required.";
    if (!formValues.password) newErrors.password = "Password is required.";
    if (!formValues.businessName)
      newErrors.businessName = "Business name is required.";
    if (!formValues.businessType)
      newErrors.businessType = "Business type is required.";
    if (!formValues.address) newErrors.address = "Address is required.";
    if (!formValues.city) newErrors.city = "City is required.";
    if (!formValues.zipCode) newErrors.zipCode = "Zip code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8">
      <div>
        {/* Section 1 */}
        <div>
          <div className="flex items-center gap-[20px] mt-[40px]">
            <div
              className={`w-[39px] h-[39px] rounded-full border border-secondary-blue flex items-center justify-center text-[24px] ${
                activeSection === 1
                  ? "bg-secondary-blue text-primary"
                  : "bg-secondary-offWhite text-primary"
              }`}
            >
              1
            </div>
            <h2 className="text-[18px] font-semibold text-primary">
              Let’s start with your email
            </h2>
          </div>
          <p className="text-primary mb-[20px] w-[530px]">
            We’ll use your business email to check if you need to create a new
            location. This way, we ensure that there are no duplicate businesses
            in the system.
          </p>
          <div className="flex flex-col gap-[7px]">
            <p className="text-[16px] text-primary">Email address *</p>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.email}
              onChange={handleChange}
              onFocus={() => handleFocus(1)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center gap-[20px] mt-[40px]">
          <div
              className={`w-[39px] h-[39px] rounded-full border border-secondary-blue flex items-center justify-center text-[24px] ${
                activeSection === 2
                  ? "bg-secondary-blue text-primary"
                  : "bg-secondary-offWhite text-primary"
              }`}
          >
            2
          </div>
          <h2 className="text-[18px] font-semibold text-primary">
            Create your account
          </h2>
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="text-[16px] text-primary">Name *</p>
          <div className="flex gap-[28px]">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.firstName}
              onChange={handleChange}
              onFocus={() => handleFocus(2)}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus(2)}
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
          <div className="flex gap-[28px]">
            <div>
              <p className="text-[16px] text-primary">Your role *</p>
              <input
                name="role"
                type="text"
                placeholder="Your role"
                className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
                value={formValues.role}
                onChange={handleChange}
                onFocus={() => handleFocus(2)}
              />
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role}</p>
              )}
            </div>
            <div>
              <p className="text-[16px] text-primary">Password *</p>
              <input
                name="password"
                type="password"
                placeholder="*************"
                className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
                value={formValues.password}
                onChange={handleChange}
                onFocus={() => handleFocus(2)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-center gap-[20px] mt-[40px]">
          <div
              className={`w-[39px] h-[39px] rounded-full border border-secondary-blue flex items-center justify-center text-[24px] ${
                activeSection === 3
                  ? "bg-secondary-blue text-primary"
                  : "bg-secondary-offWhite text-primary"
              }`}
          >
            3
          </div>
          <h2 className="text-[18px] font-semibold text-primary">
            Add business information
          </h2>
        </div>
        <div className="flex gap-[28px]">
          <div>
            <p className="text-[16px] text-primary">Business/brand name *</p>
            <input
              name="businessName"
              type="text"
              placeholder="Business name"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.businessName}
              onChange={handleChange}
              onFocus={() => handleFocus(3)}
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm">{errors.businessName}</p>
            )}
            <p className="text-[16px] text-primary mt-[20px]">Business type *</p>
            <input
              name="businessType"
              type="text"
              placeholder="Business type"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.businessType}
              onChange={handleChange}
              onFocus={() => handleFocus(3)}
            />
            {errors.businessType && (
              <p className="text-red-500 text-sm">{errors.businessType}</p>
            )}
          </div>
          <div className="flex flex-col gap-[7px]">
            <p className="text-[16px] text-primary">Address *</p>
            <input
              name="address"
              type="text"
              placeholder="Street Address"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.address}
              onChange={handleChange}
              onFocus={() => handleFocus(3)}
            />
            <input
              name="city"
              type="text"
              placeholder="City"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.city}
              onChange={handleChange}
              onFocus={() => handleFocus(3)}
            />
            <input
              name="zipCode"
              type="text"
              placeholder="Zip Code"
              className="w-[263px] h-[41px] rounded-[15px] px-[27px] bg-secondary-offWhite"
              value={formValues.zipCode}
              onChange={handleChange}
              onFocus={() => handleFocus(3)}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
            {errors.zipCode && (
              <p className="text-red-500 text-sm">{errors.zipCode}</p>
            )}
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col gap-[7px]">
          <button type="submit" className="bg-secondary-yellow w-[367px] h-[41px] flex items-center justify-center rounded-[15px] mt-[40px] text-primary text-[16px] ">Lets GO!</button>
          <p >Already have an account? <span className="underline text-secondary-blue">Log in</span></p>
          <p>Keep up with us! Join our mailing list.</p>
        </div>
    </form>
  );
};

export default Form;
