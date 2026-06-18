"use client";

import React, { useState } from "react";
import { Xmark, ArrowUpFromLine, Globe, ChevronDown } from "@gravity-ui/icons";
import { Button, Form } from "@heroui/react";
import { redirect } from "next/navigation";
import { createCompanyNewJobRecriter } from "@/lib/actions/jobs";

// Changed "export function" to "export default function"
export default function Page() {
  // State to hold the selected file from the file input
  const [logoFile, setLogoFile] = useState(null);

  // Handle form submission to gather all form data, including the file input
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    if (logoFile) {
      formData.append("companyLogo", logoFile);
    }

    const data = {};
    formData.forEach((value, key) => {
      if (key !== "companyLogo") {
        data[key] = value.toString();
      }
    });

    data.remoteJob = formData.get("remoteJob") === "true";

    if (logoFile) data.companyLogoName = logoFile.name;

    // alert(`Form submitted with:\n${JSON.stringify(data, null, 2)}`);

    // Reset form and file state after submission
    e.currentTarget.reset();
    setLogoFile(null);
    // Here you can also implement the actual API call to submit the form data
    createCompanyNewJobRecriter(values);
  };

  // Handle file input change to store the selected file in state
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 mx-auto ">
      <div className="w-full max-w-2xl rounded-xl bg-[#121212] text-white border border-[#262626] shadow-2xl overflow-hidden font-sans">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-[#212121]">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-100">
              Register New Company
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
          <button
            type="button"
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition"
            aria-label="Close modal"
          >
            <Xmark className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <Form
          className="p-6 flex flex-col gap-6"
          validationBehavior="native"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 w-full">
            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Company Name
              </label>
              <input
                required
                name="companyName"
                placeholder="e.g. Acme Corp"
                className="w-full h-10 px-3 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] text-white placeholder:text-neutral-600 hover:bg-[#222222] focus:outline-none focus:border-neutral-500 transition text-sm"
              />
            </div>

            {/* Industry / Category */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-medium text-neutral-300">
                Industry / Category
              </label>
              <div className="relative w-full">
                <select
                  required
                  name="industry"
                  defaultValue="technology"
                  className="w-full h-10 pl-3 pr-10 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] text-white hover:bg-[#222222] focus:outline-none focus:border-neutral-500 transition appearance-none text-sm"
                >
                  <option value="technology" className="bg-[#1c1c1c]">
                    Technology
                  </option>
                  <option value="finance" className="bg-[#1c1c1c]">
                    Finance
                  </option>
                  <option value="healthcare" className="bg-[#1c1c1c]">
                    Healthcare
                  </option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                </div>
              </div>
            </div>

            {/* Website URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Website URL
              </label>
              <div className="flex items-center w-full h-10 px-3 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] hover:bg-[#222222] focus-within:!bg-[#1c1c1c] focus-within:border-neutral-500 transition">
                <span className="text-neutral-500 text-sm select-none pr-1">
                  https://
                </span>
                <input
                  required
                  name="websiteUrl"
                  type="url"
                  placeholder="www.company.com"
                  className="w-full bg-transparent text-white placeholder:text-neutral-600 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Location
              </label>
              <div className="flex items-center w-full h-10 px-3 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] hover:bg-[#222222] focus-within:!bg-[#1c1c1c] focus-within:border-neutral-500 transition">
                <Globe className="w-4 h-4 text-neutral-500 mr-2" />
                <input
                  required
                  name="location"
                  placeholder="City, Country"
                  className="w-full bg-transparent text-white placeholder:text-neutral-600 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Employee Count Range */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-medium text-neutral-300">
                Employee Count Range
              </label>
              <div className="relative w-full">
                <select
                  required
                  name="employeeCount"
                  defaultValue="1-10"
                  className="w-full h-10 pl-3 pr-10 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] text-white hover:bg-[#222222] focus:outline-none focus:border-neutral-500 transition appearance-none text-sm"
                >
                  <option value="1-10" className="bg-[#1c1c1c]">
                    1-10 employees
                  </option>
                  <option value="11-50" className="bg-[#1c1c1c]">
                    11-50 employees
                  </option>
                  <option value="51-200" className="bg-[#1c1c1c]">
                    51-200 employees
                  </option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                </div>
              </div>
            </div>

            {/* Company Logo Upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Company Logo
              </label>
              <label className="flex items-center gap-3 p-3 bg-[#1c1c1c] border border-dashed border-neutral-700 rounded-xl cursor-pointer hover:bg-[#222222] transition group">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 group-hover:border-neutral-600 text-neutral-400 group-hover:text-neutral-200">
                  <ArrowUpFromLine className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-neutral-200">
                    {logoFile ? logoFile.name : "Upload image"}
                  </span>
                  <span className="text-xs text-neutral-500">
                    PNG, JPG up to 5MB
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Job Requirement Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-neutral-300">
              Job Requirements
            </label>
            <input
              required
              name="jobRequirements"
              placeholder="e.g. 3+ years experience with React, Node.js, TypeScript"
              className="w-full h-10 px-3 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] text-white placeholder:text-neutral-600 hover:bg-[#222222] focus:outline-none focus:border-neutral-500 transition text-sm"
            />
          </div>

          {/* Brief Description */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-neutral-300">
              Brief Description
            </label>
            <textarea
              required
              name="description"
              placeholder="Tell us about your company's mission and culture..."
              rows={4}
              className="w-full p-3 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] text-white placeholder:text-neutral-600 hover:bg-[#222222] focus:outline-none focus:border-neutral-500 transition resize-none text-sm"
            />
          </div>

          {/* Remote Job */}
          <div className="flex items-center gap-3 w-full pt-1">
            <label className="relative flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                name="remoteJob"
                value="true"
                className="peer sr-only"
              />
              <div className="w-5 h-5 bg-[#1c1c1c] border border-[#2b2b2b] rounded-md transition peer-checked:bg-white peer-checked:border-white flex items-center justify-center hover:bg-[#222222]">
                <svg
                  className="w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 transition duration-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="ml-3 text-sm font-medium text-neutral-300">
                This is a remote position
              </span>
            </label>
          </div>

          {/* Action Buttons Footer */}
          <div className="flex justify-end gap-3 w-full pt-4 border-t border-[#212121] mt-2">
            <Button
              type="button"
              variant="flat"
              className="bg-transparent hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-medium px-5 rounded-xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-white hover:bg-neutral-200 text-black font-semibold px-5 rounded-xl"
            >
              Register Company
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
