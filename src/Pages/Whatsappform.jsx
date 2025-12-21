import { useState } from 'react';

const Whatsappform = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', place: '', state: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name required';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) 
      newErrors.phone = 'Valid 10-digit phone required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = 'Valid email required';
    if (!formData.place.trim()) newErrors.place = 'Place required';
    if (!formData.state.trim()) newErrors.state = 'State required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Name: ${formData.name}\nCompany: ${formData.company}\nContact: ${formData.phone}\nEmail: ${formData.email}\nPlace: ${formData.place}\nState: ${formData.state}`;
      const whatsappUrl = `https://wa.me/919841419345?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-vh-100 bg-gradient-to-br from-danger/10 to-red-50 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="card border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-4">
              {/* Medium Header */}
              <div className="card-header bg-danger text-white text-center py-5 position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0 w-50 h-100 bg-danger opacity-20"></div>
                <h1 className="display-5 fw-bold mb-3">Contact Details</h1>
                <p className="lead opacity-95 mb-0">Fill your details to send via WhatsApp</p>
              </div>
              
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold text-dark mb-3 fs-6">Full Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-control form-control-lg rounded-3 py-3 px-4 border-2 transition-all duration-200 hover:border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 ${errors.name ? 'border-danger bg-danger/5' : 'border-light-subtle'}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback d-block mt-2">
                        <i className="bi bi-exclamation-circle-fill me-2"></i>{errors.name}
                      </div>
                    )}
                  </div>

                  {/* Company Field */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold text-dark mb-3 fs-6">Company Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`form-control form-control-lg rounded-3 py-3 px-4 border-2 transition-all duration-200 hover:border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 ${errors.company ? 'border-danger bg-danger/5' : 'border-light-subtle'}`}
                      placeholder="Your company/organization name"
                    />
                    {errors.company && <div className="invalid-feedback d-block mt-2">{errors.company}</div>}
                  </div>

                  {/* Phone Field */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold text-dark mb-3 fs-6">Contact Number <span className="text-danger">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-control form-control-lg rounded-3 py-3 px-4 border-2 transition-all duration-200 hover:border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 ${errors.phone ? 'border-danger bg-danger/5' : 'border-light-subtle'}`}
                      placeholder="9999999999"
                    />
                    {errors.phone && <div className="invalid-feedback d-block mt-2">{errors.phone}</div>}
                  </div>

                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark mb-3 fs-6">Email ID <span className="text-danger">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control form-control-lg rounded-3 py-3 px-4 border-2 transition-all duration-200 hover:border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 ${errors.email ? 'border-danger bg-danger/5' : 'border-light-subtle'}`}
                        placeholder="example@email.com"
                      />
                      {errors.email && <div className="invalid-feedback d-block mt-2">{errors.email}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark mb-3 fs-6">Place <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        className={`form-control form-control-lg rounded-3 py-3 px-4 border-2 transition-all duration-200 hover:border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 ${errors.place ? 'border-danger bg-danger/5' : 'border-light-subtle'}`}
                        placeholder="City/Area"
                      />
                      {errors.place && <div className="invalid-feedback d-block mt-2">{errors.place}</div>}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="form-label fw-semibold text-dark mb-3 fs-6">State <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`form-control form-control-lg rounded-3 py-3 px-4 border-2 transition-all duration-200 hover:border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 ${errors.state ? 'border-danger bg-danger/5' : 'border-light-subtle'}`}
                      placeholder="Your state"
                    />
                    {errors.state && <div className="invalid-feedback d-block mt-2">{errors.state}</div>}
                  </div>


                  <button 
                    type="submit"
                    className="w-100 btn btn-danger btn-lg py-3 px-5 fw-semibold rounded-3 shadow-md hover:shadow-lg transform hover:-translate-y-px transition-all duration-200 border-0 position-relative overflow-hidden"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Send to WhatsApp
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-danger/20 scale-0 hover:scale-100 transition-transform duration-300 rounded-3"></div>
                  </button>
                </form>
              </div>

              <div className="card-footer bg-white border-top border-light py-4 text-center">
                <div className="text-success fw-semibold fs-6">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Fill form → Click Send → WhatsApp opens with pre-filled message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsappform;
