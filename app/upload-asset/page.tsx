'use client';

import { useState, useRef } from 'react';
import axios from 'axios';

interface UploadFormData {
  file: File | null;
  fileName: string;
}

export default function UploadAssetPage() {
  const [formData, setFormData] = useState<UploadFormData>({
    file: null,
    fileName: '',
  });
  const [errors, setErrors] = useState<{ file?: string; fileName?: string }>({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: { file?: string; fileName?: string } = {};

    if (!formData.file) {
      newErrors.file = 'Please select a file to upload';
    }

    if (!formData.fileName.trim()) {
      newErrors.fileName = 'File name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      setErrors({ ...errors, file: undefined });
    }
  };

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, fileName: e.target.value });
    setErrors({ ...errors, fileName: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsUploading(true);
    setUploadedUrl('');
    setCopySuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('file', formData.file as File);
      formDataToSend.append('fileName', formData.fileName);

      const response = await axios.post('/api/upload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setUploadedUrl(response.data.url);
        // Reset form
        setFormData({ file: null, fileName: '' });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          file: error.response?.data?.error || 'Failed to upload file. Please try again.',
        });
      } else {
        setErrors({ file: 'An unexpected error occurred' });
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(uploadedUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Upload Asset
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload your file to AWS S3
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Name Input */}
            <div>
              <label
                htmlFor="fileName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                File Name
              </label>
              <input
                id="fileName"
                type="text"
                value={formData.fileName}
                onChange={handleFileNameChange}
                className={`w-full px-4 py-3 border ${
                  errors.fileName
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all`}
                placeholder="Enter file name"
              />
              {errors.fileName && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.fileName}
                </p>
              )}
            </div>

            {/* File Input */}
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Select File
              </label>
              <input
                id="file"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className={`w-full px-4 py-3 border ${
                  errors.file
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 dark:file:bg-gray-600 dark:file:text-gray-200 transition-all`}
              />
              {formData.file && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Selected: {formData.file.name} ({(formData.file.size / 1024).toFixed(2)} KB)
                </p>
              )}
              {errors.file && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.file}
                </p>
              )}
            </div>

            {/* Upload Button */}
            <button
              type="submit"
              disabled={isUploading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
            >
              {isUploading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Uploading...
                </span>
              ) : (
                'Upload to S3'
              )}
            </button>
          </form>

          {/* Success Section */}
          {uploadedUrl && (
            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center mb-3">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                  Upload Successful!
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  File URL:
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg break-all text-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
                  {uploadedUrl}
                </div>
              </div>
              <button
                onClick={handleCopyUrl}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copySuccess ? 'Copied!' : 'Copy URL'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
