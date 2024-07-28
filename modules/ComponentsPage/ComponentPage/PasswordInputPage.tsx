import React from 'react';

import PasswordInput from '@/components/PasswordInput';

export default function PasswordInputPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Password Input Example</h1>
      <PasswordInput
        placeholder="Enter your password"
        className="max-w-md"
      />
    </div>
  );
}
