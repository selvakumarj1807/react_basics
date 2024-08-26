import React, { useState } from 'react';
import './FormValidation.css';
import Swal from 'sweetalert2';

function FormValidation() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        gender: '',
        country: '',
        profilePicture: null,
        bio: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate Name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name must contain only letters";
        }

        // Validate Mobile
        if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "A valid 10-digit mobile number is required";
        }

        // Validate Gender
        if (!formData.gender) {
            newErrors.gender = "Gender is required";
        }

        // Validate Country
        if (!formData.country) {
            newErrors.country = "Country is required";
        }

        // Validate Profile Picture
        if (!formData.profilePicture) {
            newErrors.profilePicture = "Profile picture is required";
        }

        // Validate Bio
        if (!formData.bio.trim()) {
            newErrors.bio = "Bio is required";
        }

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            Swal.fire({
                title: "Error!",
                text: "Please correct the highlighted errors and try again.",
                icon: "error"
            });
        } else {
            setErrors({});
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            console.log(formData);
        }
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}

                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}

                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                </div>
                <div>
                    <label>Gender:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}

                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}

                    >
                        <option value="">Select your country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                    </select>
                    {errors.country && <span className="error">{errors.country}</span>}
                </div>
                <div>
                    <label htmlFor="profilePicture">Profile Picture:</label>
                    <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        accept="image/*"
                        onChange={handleChange}
                    />
                    {errors.profilePicture && <span className="error">{errors.profilePicture}</span>}
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}

                    />
                    {errors.bio && <span className="error">{errors.bio}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormValidation;
