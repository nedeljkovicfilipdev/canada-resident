import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export const EmailForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus(null);
  
      try {
        const response = await axios.post('/api/emails', formData);
        if (response.status === 200) {
          setStatus('Email sent successfully!');
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setStatus('Failed to send email. Please try again later.');
      }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <label className="block text-sm">
                    {t('First Name')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm">
                    {t('Last Name')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm">
                  {t('Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                />
              </div>
              <div>
                <label className="block text-sm">
                  {t('Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  rows={4}
                ></textarea>
              </div>
              <Button
                className="w-full bg-customblue py-2 text-lg text-white font-bold hover:bg-custombluehover"
                size="lg"
                type="submit"
              >
                {t('SEND')}
              </Button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
    )
}
